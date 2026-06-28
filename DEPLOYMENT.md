# Deployment & access

Static Astro site, hosted on **Cloudflare Pages**, made private with a single
**shared password** (a Pages Function gate). GitHub Pages is not used.

- `astro.config.mjs` has **no `base`** — the site is served at the domain root.
  (A leftover `base` is what broke CSS earlier.)
- Cloudflare Pages auto-builds on every push to `master`:
  build command `npm run build`, output dir `dist`. No env vars needed.
- Live: <https://anna-mike-wedding.pages.dev>

> The occasional **"Failed to publish your Function"** error in the build log is
> a transient Cloudflare glitch — we have no `/functions`, and "Assets
> published" means the site is live. Just **Retry deployment** if it recurs.

---

## Make the site private with one shared password

The whole site sits behind a single shared password — fine for any number of
guests, no per-person accounts, free. It's enforced by the Cloudflare Pages
Function in `functions/_middleware.js`, which checks the password **server-side**
before any page is sent, and shows an on-brand password screen if it's missing.
(We do **not** use Cloudflare Access — that's per-person and caps at 50 users.)

### Set the password
1. Cloudflare dashboard → your Pages project → **Settings → Variables and
   Secrets** (a.k.a. *Environment variables*).
2. Under **Production**, **Add variable**:
   - Name: `SITE_PASSWORD`
   - Value: the shared code you'll give guests (e.g. `ValdOrcia2027`)
   - Click **Encrypt** so it's stored as a secret.
3. (Optional) add the same variable under **Preview** so branch previews are
   gated too.
4. **Save**, then **redeploy** (Deployments → ⋯ → Retry deployment, or just push
   a commit) so the new secret is picked up.

> ⚠️ If `SITE_PASSWORD` is not set, the site stays **locked for everyone**
> (including you) with a "password isn't set" notice. That's the safe default —
> just add the secret.

### Test
Open <https://anna-mike-wedding.pages.dev> in a private window → you should see
the cream **Anna and Mike** password screen → enter the code → you're in for 30
days (a cookie remembers you). To change the password later, edit the secret and
redeploy; everyone re-enters the new one.

### Share the code
Put the password on your invitations / save-the-dates, or send it round on
WhatsApp. One code, everyone uses the same one.

---

## Notes

- The gate only runs on Cloudflare (and `wrangler pages dev`). Local
  `astro dev` / `npm run preview` are **not** gated — no password needed while
  developing.
- **Custom domain** (e.g. `annaandmike.com`): add it under the Pages project →
  **Custom domains**, then update `site` in `astro.config.mjs`. The password gate
  keeps working — it's domain-independent.
