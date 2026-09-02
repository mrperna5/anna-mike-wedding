// POST /api/rsvp — store one RSVP in Cloudflare D1.
// Bound database: `DB` (Pages → Settings → Functions → D1 bindings).
// The guest is already past the shared-password gate (_middleware.js) by the
// time they submit, so this just validates and inserts.

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
	const attending = String(data.attending || '');
	if (!name || (attending !== 'yes' && attending !== 'no')) {
		return json({ ok: false, error: 'missing_fields' }, 400);
	}

	const allowed = new Set(['friday', 'saturday', 'sunday']);
	const dayStr = [...new Set(days.map(String))].filter((d) => allowed.has(d)).join(',');
	const clip = (v) => String(v || '').trim().slice(0, 2000);

	try {
		await env.DB.prepare(
			`INSERT INTO rsvps (name, attending, days, dietary, song, message, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?)`,
		)
			.bind(
				name,
				attending,
				dayStr,
				clip(data.dietary),
				clip(data.song),
				clip(data.message),
				new Date().toISOString(),
			)
			.run();
	} catch (err) {
		return json({ ok: false, error: 'db_error', detail: String(err && err.message) }, 500);
	}

	return json({ ok: true });
}

function json(obj, status = 200) {
	return new Response(JSON.stringify(obj), {
		status,
		headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
	});
}
