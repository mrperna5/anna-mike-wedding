# Deployment & access

The site is a static Astro build. Two hosting paths are wired up:

| | GitHub Pages | Cloudflare Pages |
| --- | --- | --- |
| Real login (private) | ❌ none possible | ✅ via Cloudflare Access |
| URL | `mrperna5.github.io/anna-mike-wedding/` | `anna-mike-wedding.pages.dev` (or custom domain) |
| Build | `.github/workflows/deploy.yml` (sets `GITHUB_PAGES=true`) | Cloudflare's own build |
| `base` path | `/anna-mike-wedding/` | none (served at root) |

`astro.config.mjs` switches `base`/`site` on the `GITHUB_PAGES` env var, so the
same repo builds correctly for either host.

---

## Why the password requirement means leaving GitHub Pages

GitHub Pages serves static files to anyone with the URL — there is **no
server-side authentication**, so a real "guests log in" wall isn't possible
there. The clean way to get genuine, per-person access is **Cloudflare Pages +
Cloudflare Access** (Zero Trust). It's free for our size and sends each guest a
one-time email code to get in. The repo is already Cloudflare-ready.

---

## A. Set up Cloudflare Pages + Access (the private, real-login site)

You'll do this once in the Cloudflare dashboard — I can't click through your
account, but here's the exact path.

### 1. Connect the repo to Cloudflare Pages
1. Create a free Cloudflare account, go to **Workers & Pages → Create → Pages**.
2. **Connect to Git**, authorise GitHub, pick `mrperna5/anna-mike-wedding`.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - (Leave env vars empty — we do *not* set `GITHUB_PAGES`, so it builds at root.)
4. **Save and Deploy.** You'll get `https://anna-mike-wedding.pages.dev`.

### 2. Turn on Cloudflare Access (the login wall)
1. In the dashboard go to **Zero Trust** (set up the free plan if prompted).
2. **Access → Applications → Add an application → Self-hosted.**
3. Application domain: your Pages URL (`anna-mike-wedding.pages.dev`) or your
   custom domain.
4. Add a **policy**:
   - Action: **Allow**
   - Rule: choose one —
     - **Emails:** paste the guest list (most private; only those addresses get in), or
     - **Emails ending in** a domain, or
     - **Any** + **One-time PIN** (anyone with the link can request a code — easiest, least strict).
5. Save. Now visiting the site shows a Cloudflare login → guest enters their
   email → receives a one-time code → gets in. Sessions last as long as you set
   (e.g. 1 month), so they're not prompted every visit.

> Tip: the **Emails** rule is the sweet spot for a wedding — collect addresses
> with the RSVP later and paste them in.

### 3. (Optional) custom domain
Add `annaandmike.com` in Cloudflare Pages → Custom domains. Then in
`astro.config.mjs` you can drop the GitHub Pages branch and hardcode
`site: 'https://annaandmike.com'`.

---

## B. Fix the GitHub Pages deploy (optional public/preview mirror)

The workflow (`.github/workflows/deploy.yml`) is correct. The usual reason a
GitHub Pages deploy "doesn't work" is the **Pages source setting**:

1. GitHub repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   "Deploy from a branch").
3. Push to `master` (or run the workflow from the **Actions** tab). The site
   publishes at `https://mrperna5.github.io/anna-mike-wedding/`.

⚠️ Note: a GitHub Pages site is **public** — anyone with the link can read it.
Keep real details on the Cloudflare Access site; use Pages only if you want a
public placeholder, or skip it entirely.
