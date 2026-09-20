// POST /api/rsvp — store one RSVP in Cloudflare D1, then email the guest a
// combined confirmation + reminder (see ../lib/rsvp-email.js), via Resend.
// Bound database: `DB` (Pages → Settings → Functions → D1 bindings).
// Email needs two env vars (Pages → Settings → Variables and Secrets):
//   RESEND_API_KEY — secret, from your Resend account
//   RESEND_FROM    — e.g. "Anna & Mike <rsvp@annaandmike.com>", a verified sender
// See DEPLOYMENT.md for full setup. If either is missing, or the send fails,
// the RSVP is still saved — a guest's reply is never lost over an email hiccup.
// The guest is already past the shared-password gate (_middleware.js) by the
// time they submit, so this just validates, inserts, and emails.

import { buildRsvpEmail } from '../lib/rsvp-email.js';

export async function onRequest(context) {
	const { request, env } = context;

	if (request.method !== 'POST') {
		return json({ ok: false, error: 'method_not_allowed' }, 405);
	}
	if (!env.DB) {
		return json({ ok: false, error: 'no_database_bound' }, 500);
	}

	// Accept JSON (from the site's fetch) or a plain form POST (no-JS fallback).
	let data = {};
	let days = [];
	const ct = request.headers.get('content-type') || '';
	try {
		if (ct.includes('application/json')) {
			data = await request.json();
			days = Array.isArray(data.days) ? data.days : [];
		} else {
			const f = await request.formData();
			data = Object.fromEntries(f);
			days = f.getAll('days');
		}
	} catch {
		return json({ ok: false, error: 'bad_body' }, 400);
	}

	const name = String(data.name || '').trim().slice(0, 200);
	const email = String(data.email || '').trim().slice(0, 320);
	const attending = String(data.attending || '');
	const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	if (!name || !emailOk || (attending !== 'yes' && attending !== 'no')) {
		return json({ ok: false, error: 'missing_fields' }, 400);
	}

	const allowed = new Set(['friday', 'saturday', 'sunday']);
	const dayList = [...new Set(days.map(String))].filter((d) => allowed.has(d));
	const dayStr = dayList.join(',');
	const clip = (v) => String(v || '').trim().slice(0, 2000);
	const dietary = clip(data.dietary);
	const song = clip(data.song);
	const message = clip(data.message);

	let rsvpId;
	try {
		const result = await env.DB.prepare(
			`INSERT INTO rsvps (name, email, attending, days, dietary, song, message, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
		)
			.bind(name, email, attending, dayStr, dietary, song, message, new Date().toISOString())
			.run();
		rsvpId = result?.meta?.last_row_id;
	} catch (err) {
		return json({ ok: false, error: 'db_error', detail: String(err && err.message) }, 500);
	}

	const emailSent = await sendConfirmationEmail(env, {
		name,
		email,
		attending,
		days: dayList,
		dietary,
		song,
		message,
	});
	if (emailSent && rsvpId) {
		try {
			await env.DB.prepare(`UPDATE rsvps SET email_sent_at = ? WHERE id = ?`)
				.bind(new Date().toISOString(), rsvpId)
				.run();
		} catch {
			// Non-fatal — the RSVP and the email both already went through.
		}
	}

	return json({ ok: true, emailSent });
}

// Sends via Resend's HTTP API (https://resend.com/docs/api-reference/emails/send-email).
// Never throws: a missing config or a failed send just means `emailSent: false`,
// and the RSVP itself has already been saved either way.
async function sendConfirmationEmail(env, rsvp) {
	if (!env.RESEND_API_KEY || !env.RESEND_FROM) return false;

	try {
		const { subject, html, text } = buildRsvpEmail(rsvp);
		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${env.RESEND_API_KEY}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify({ from: env.RESEND_FROM, to: rsvp.email, subject, html, text }),
		});
		return res.ok;
	} catch {
		return false;
	}
}

function json(obj, status = 200) {
	return new Response(JSON.stringify(obj), {
		status,
		headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
	});
}
