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
const GATE_ASSETS = new Set([
	'/favicon.svg',
	'/favicon.ico',
	'/fonts/amalfi-coast.woff2',
	'/images/hero-poster.jpg',
]);

export async function onRequest(context) {
	const { request, env, next } = context;
	const url = new URL(request.url);
	const PASSWORD = env.SITE_PASSWORD;

	// Let the small set of assets used by the gate through. Everything else
	// remains protected until the guest has entered the shared password.
	if (GATE_ASSETS.has(url.pathname)) {
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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Hanken+Grotesk:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
  @font-face{
    font-family:'Amalfi Coast';src:url('/fonts/amalfi-coast.woff2') format('woff2');
    font-weight:400;font-style:normal;font-display:swap
  }
  :root{
    --cream:#f8f4ed;--ink:#26251f;--ink-soft:#46453c;--olive:#4c5040;
    --olive-muted:#7c7e66;--terracotta:#b26340;--hairline:#cfc7b5;
    --display:'Playfair Display','Times New Roman',serif;
    --sans:'Hanken Grotesk',system-ui,-apple-system,sans-serif;
    --script:'Amalfi Coast',cursive;--ease:cubic-bezier(.22,1,.36,1)
  }
  *{box-sizing:border-box}
  html{background:var(--cream);-webkit-text-size-adjust:100%}
  body{margin:0;min-height:100vh;min-height:100svh;background:var(--cream);color:var(--ink-soft);
    font-family:var(--sans);font-weight:350;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
  .page{min-height:100vh;min-height:100svh;display:flex;flex-direction:column}
  .gate{width:100%;max-width:72rem;margin:auto;text-align:center;padding:clamp(3.5rem,9vw,7rem) clamp(1.25rem,5vw,4rem) clamp(2.5rem,6vw,4rem)}
  .couple{font-family:var(--display);color:var(--ink);font-weight:400;line-height:.92;
    font-size:clamp(3.25rem,13vw,7.5rem);margin:0;letter-spacing:.01em}
  .amp{display:block;font-family:var(--script);font-weight:400;color:var(--terracotta);
    font-size:.48em;line-height:.6;margin:.45em 0;text-transform:lowercase;letter-spacing:0}
  .rule{width:36px;height:1px;background:var(--terracotta);border:0;margin:clamp(1.75rem,4vw,2.5rem) auto}
  form{width:min(100%,22rem);margin-inline:auto;display:flex;flex-direction:column;align-items:center}
  input{width:100%;font-family:var(--sans);font-size:1rem;text-align:center;color:var(--ink);background:transparent;
    border:0;border-bottom:1px solid var(--hairline);border-radius:0;padding:.8rem .5rem;outline:none;transition:border-color .3s var(--ease)}
  input:focus{border-bottom-color:var(--olive)}
  input::placeholder{color:var(--olive-muted);letter-spacing:.04em}
  button{font-family:var(--sans);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:500;
    color:var(--ink);background:transparent;border:0;border-bottom:1px solid var(--terracotta);padding:0 0 5px;
    margin-top:clamp(2rem,5vw,3rem);cursor:pointer;transition:color .3s var(--ease)}
  button:hover{color:var(--terracotta)}
  .error{color:var(--terracotta);font-size:.875rem;line-height:1.5;margin:1.25rem 0 0}
  .photo{position:relative;flex:0 0 auto;width:100%;height:clamp(20rem,40vw,32rem);margin:0;overflow:hidden;background:var(--olive)}
  .photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 20%}
  :focus-visible{outline:2px solid var(--olive);outline-offset:3px}
  ::selection{background:var(--olive);color:var(--cream)}
  @media(max-width:47.99rem){.photo{height:auto;aspect-ratio:8/5}}
</style>
</head>
<body>
  <main class="page">
    <section class="gate">
      <h1 class="couple">ANNA<span class="amp">and</span>MIKE</h1>
      <hr class="rule" />
      <form method="POST" action="/__auth">
        <input type="hidden" name="redirect" value="${escapeHtml(redirect)}" />
        <input type="password" name="password" placeholder="Password · Passwort" aria-label="Password / Passwort" autocomplete="current-password" autofocus required />
        <button type="submit">Enter · Eintreten</button>
        ${error ? `<p class="error" role="alert">${escapeHtml(error)}</p>` : ''}
      </form>
    </section>
    <figure class="photo" aria-hidden="true">
      <img src="/images/hero-poster.jpg" alt="" />
    </figure>
  </main>
</body>
</html>`;
}
