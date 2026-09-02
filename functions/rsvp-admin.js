// GET /rsvp-admin?key=YOUR_KEY — download all RSVPs as CSV.
// Protected by the RSVP_ADMIN_KEY secret (set it in Pages → Settings). This is
// on top of the site-wide password gate, so only you can see replies.
//
// Tip: you can also just browse the data in the Cloudflare dashboard
// (Workers & Pages → D1 → your database → Console: SELECT * FROM rsvps;).

export async function onRequest(context) {
	const { request, env } = context;
	const url = new URL(request.url);
	const key = url.searchParams.get('key') || '';

	if (!env.RSVP_ADMIN_KEY) {
		return new Response('RSVP_ADMIN_KEY is not set.', { status: 503 });
	}
	if (!timingSafeEqual(key, env.RSVP_ADMIN_KEY)) {
		return new Response('Not authorized.', { status: 401 });
	}
	if (!env.DB) {
		return new Response('No database bound.', { status: 500 });
	}

	const { results } = await env.DB.prepare(
		`SELECT id, created_at, name, attending, days, dietary, song, message
		 FROM rsvps ORDER BY created_at DESC`,
	).all();

	const cols = ['id', 'created_at', 'name', 'attending', 'days', 'dietary', 'song', 'message'];
	const lines = [cols.join(',')];
	for (const row of results || []) {
		lines.push(cols.map((c) => csv(row[c])).join(','));
	}

	return new Response(lines.join('\r\n'), {
		status: 200,
		headers: {
			'content-type': 'text/csv; charset=utf-8',
			'content-disposition': 'attachment; filename="anna-mike-rsvps.csv"',
			'cache-control': 'no-store',
		},
	});
}

function csv(value) {
	const s = value == null ? '' : String(value);
	return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function timingSafeEqual(a, b) {
	if (a.length !== b.length) return false;
	let out = 0;
	for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return out === 0;
}
