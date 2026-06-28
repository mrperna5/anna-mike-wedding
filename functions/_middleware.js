// Shared-password gate for the whole site (Cloudflare Pages Function).
//
// Runs on every request BEFORE any static file is served, so the site is never
// sent to the browser until the correct password is entered. One shared
// password for all guests — no per-person accounts, no user limits.
//
// Setup (see DEPLOYMENT.md): in Cloudflare Pages → Settings → Environment
// variables, add a secret SITE_PASSWORD. Without it, the site stays locked.
//
// Note: this only runs on Cloudflare (and `wrangler pages dev`). Plain
// `astro dev` / `npm run preview` are unaffected and need no password.

const COOKIE = 'wed_auth';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function onRequest(context) {
	const { request, env, next } = context;
	const url = new URL(request.url);
	const PASSWORD = env.SITE_PASSWORD;

	// Let the favicon through so the gate page can show it.
	if (url.pathname === '/favicon.svg' || url.pathname === '/favicon.ico') {
		return next();
	}

	if (!PASSWORD) {
		return html(
			gatePage({
				error:
					'The site password isn’t set yet. Add a SITE_PASSWORD secret in Cloudflare.',
			}),
			503,
		);
	}

	const expected = await token(PASSWORD);

	// Login submission.
	if (request.method === 'POST' && url.pathname === '/__auth') {
		const form = await request.formData();
		const submitted = String(form.get('password') || '');
		const redirect = safePath(String(form.get('redirect') || '/'));
		if (timingSafeEqual(submitted, PASSWORD)) {
			const headers = new Headers({ Location: redirect });
			headers.append(
				'Set-Cookie',
				`${COOKIE}=${expected}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`,
			);
			return new Response(null, { status: 303, headers });
		}
		return html(
			gatePage({ error: 'That password didn’t match. Try again.', redirect }),
			401,
		);
	}

	// Already authenticated?
	const cookies = parseCookies(request.headers.get('Cookie') || '');
	if (cookies[COOKIE] && timingSafeEqual(cookies[COOKIE], expected)) {
		return next();
	}

	// Not authenticated — show the gate, remembering where they were headed.
	return html(gatePage({ redirect: url.pathname + url.search }), 401);
}

// --- helpers ---------------------------------------------------------------

async function token(password) {
	const data = new TextEncoder().encode(`${password}::anna-mike-wedding`);
	const buf = await crypto.subtle.digest('SHA-256', data);
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(a, b) {
	if (a.length !== b.length) return false;
	let out = 0;
	for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return out === 0;
}

function parseCookies(header) {
	const out = {};
	for (const part of header.split(';')) {
		const i = part.indexOf('=');
		if (i > -1) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
	}
	return out;
}

// Only allow same-origin absolute paths — blocks open-redirects.
function safePath(p) {
	if (!p || !p.startsWith('/') || p.startsWith('//')) return '/';
	return p;
}

function escapeHtml(s) {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function html(body, status) {
	return new Response(body, {
		status,
		headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
	});
}

function gatePage({ redirect = '/', error = '' } = {}) {
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Anna and Mike</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500&family=Hanken+Grotesk:wght@400;500&family=Tangerine:wght@700&display=swap" rel="stylesheet" />
<style>
  :root{
    --cream:#f8f4ed;--ink:#26251f;--ink-soft:#46453c;--olive:#4c5040;
    --olive-muted:#7c7e66;--terracotta:#b26340;--hairline:#cfc7b5;
    --display:'Bodoni Moda',serif;--sans:'Hanken Grotesk',system-ui,sans-serif;--script:'Tangerine',cursive;
  }
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;background:var(--cream);color:var(--ink-soft);
    font-family:var(--sans);font-weight:350;display:flex;align-items:center;justify-content:center;padding:2rem}
  .gate{width:100%;max-width:26rem;text-align:center}
  .kicker{font-size:.72rem;letter-spacing:.3em;text-transform:uppercase;font-weight:500;color:var(--olive-muted);margin:0 0 2.25rem}
  .couple{font-family:var(--display);color:var(--ink);font-weight:400;line-height:.95;
    font-size:clamp(3rem,16vw,4.5rem);margin:0;letter-spacing:.01em}
  .amp{display:block;font-family:var(--script);font-weight:700;color:var(--terracotta);
    font-size:.62em;line-height:.5;margin:.05em 0;text-transform:lowercase}
  .rule{width:32px;height:1px;background:var(--terracotta);border:0;margin:2rem auto 1.75rem}
  .intro{font-family:var(--display);font-style:italic;font-size:1.05rem;line-height:1.5;color:var(--ink-soft);margin:0 0 2rem}
  .intro .de{display:block;font-style:normal;font-family:var(--sans);font-size:.9rem;color:var(--olive-muted);margin-top:.5rem}
  form{display:flex;flex-direction:column;gap:.75rem}
  input{font-family:var(--sans);font-size:1rem;text-align:center;color:var(--ink);background:var(--cream);
    border:0;border-bottom:1px solid var(--hairline);padding:.85rem .5rem;outline:none;transition:border-color .25s}
  input:focus{border-bottom-color:var(--olive)}
  input::placeholder{color:var(--olive-muted);letter-spacing:.04em}
  button{font-family:var(--sans);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;font-weight:500;
    color:var(--cream);background:var(--olive);border:0;padding:.95rem;margin-top:.5rem;cursor:pointer;transition:background .25s}
  button:hover{background:var(--ink)}
  .error{color:var(--terracotta);font-size:.85rem;margin:.5rem 0 0}
</style>
</head>
<body>
  <main class="gate">
    <p class="kicker">Pienza · 2027</p>
    <h1 class="couple">Anna<span class="amp">and</span>Mike</h1>
    <hr class="rule" />
    <p class="intro">
      A private invitation — please enter the password
      <span class="de">Eine private Einladung — bitte gib das Passwort ein</span>
    </p>
    <form method="POST" action="/__auth">
      <input type="hidden" name="redirect" value="${escapeHtml(redirect)}" />
      <input type="password" name="password" placeholder="Password · Passwort" aria-label="Password / Passwort" autofocus required />
      <button type="submit">Enter · Eintreten</button>
      ${error ? `<p class="error">${escapeHtml(error)}</p>` : ''}
    </form>
  </main>
</body>
</html>`;
}
