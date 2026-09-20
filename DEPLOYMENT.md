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

## RSVP storage (Cloudflare D1)

The RSVP form POSTs to `functions/api/rsvp.js`, which writes each reply to a
Cloudflare **D1** database (free for our size). Do this once, all in the
dashboard.

### 1. Create the database
Workers & Pages → **D1 SQL Database → Create** → name it `anna-mike-rsvp`.

### 2. Create the table
Open the database → **Console** tab → paste the contents of
[`db/schema.sql`](db/schema.sql) → **Execute**.
(CLI alternative: `npx wrangler d1 execute anna-mike-rsvp --remote --file=./db/schema.sql`)

> Already created the table before the `email` column existed? Run
> [`db/migrations/001_add_email.sql`](db/migrations/001_add_email.sql) instead
> (same Console-paste or CLI approach) to add it to your existing table
> without losing any replies already in it.

### 3. Bind it to the site
Your Pages project → **Settings → Bindings** (a.k.a. Functions → D1 bindings) →
**Add → D1 database**:
- Variable name: `DB`  ← must be exactly this
- D1 database: `anna-mike-rsvp`

### 4. Add the admin key
Pages project → **Settings → Variables and Secrets** → add:
- `RSVP_ADMIN_KEY` = a long random string only you know (**Encrypt**).

### 5. Redeploy
Deployments → ⋯ → **Retry deployment** (or push a commit) so the binding + secret
take effect.

### Seeing the replies
- **Dashboard:** D1 → `anna-mike-rsvp` → Console → `SELECT * FROM rsvps ORDER BY created_at DESC;`
- **Spreadsheet:** visit `…/rsvp-admin?key=YOUR_RSVP_ADMIN_KEY` (you'll pass the
  site password first) to download a CSV of everyone's replies.

### Testing a submission
- Local `astro dev` shows the form but **can't save** (Functions/D1 don't run there).
- Real test: after the steps above, open the live site, fill in the RSVP, submit,
  then check the D1 console. Or run `npx wrangler pages dev dist` with a D1 binding
  to test end-to-end locally.

---

## Confirmation & reminder email (Resend)

When a guest submits the RSVP form, `functions/api/rsvp.js` saves it to D1 (above)
and then sends that guest one email — a combined confirmation ("we got your
RSVP") and reminder (dates, venue, the day-by-day schedule), in English and
German, built by `functions/lib/rsvp-email.js`. Sending goes through
[Resend](https://resend.com), via a plain HTTP call — no npm package needed.

If email sending isn't configured yet (or a send fails), the RSVP is still
saved — a guest's reply is never lost over an email hiccup. The response from
`/api/rsvp` includes `emailSent: true/false` so you can tell the two apart.

### 1. Create a Resend account and verify the sending domain
Emails only deliver to arbitrary guest addresses once you've verified a
domain you own — Resend's shared test address (`onboarding@resend.dev`) only
delivers to your own Resend account email, which isn't usable for real guests.

We own **`anna-mike-wedding.com`**, already registered through Cloudflare
Registrar — meaning it already uses Cloudflare's nameservers, so step 3 below
happens in the same Cloudflare dashboard as everything else in this file.

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month,
   plenty for a guest list).
2. **Domains → Add Domain**, enter `anna-mike-wedding.com`.
3. Resend gives you a handful of DNS records (SPF, DKIM, and usually a
   tracking `CNAME`). Add them in Cloudflare: dashboard → the
   `anna-mike-wedding.com` domain → **DNS → Records → Add record**, one per
   row Resend showed you (matching type, name, and value/content exactly).
4. Back in Resend, click **Verify** (or wait — it also polls automatically).
   Usually minutes; occasionally longer while DNS propagates.

### 2. Get an API key
Resend dashboard → **API Keys → Create API Key** → copy it (shown once).

### 3. Add the secrets to Cloudflare Pages
Pages project → **Settings → Variables and Secrets** → add, under
**Production** (and **Preview** if you want previews to send too):
- `RESEND_API_KEY` = the key from step 2 (**Encrypt**).
- `RESEND_FROM` = the sender to send as, e.g.
  `Anna & Mike <rsvp@anna-mike-wedding.com>` (the local part before the `@`
  can be anything — `rsvp@`, `hello@`, whatever you prefer — as long as the
  domain matches the one you verified).

### 4. Redeploy
Deployments → ⋯ → **Retry deployment** (or push a commit) so the new secrets
take effect.

### Testing
Same constraint as D1: this only runs on Cloudflare, not `astro dev`. Submit
a real RSVP on the live site with an email address you can check, and
confirm the message arrives (check spam the first few times, before your
domain has built sending reputation).

### Editing the email content
The copy, schedule, and dates in the email live in
`functions/lib/rsvp-email.js`, written directly (not pulled from `src/data`,
since Pages Functions bundle separately from the Astro site) — update both
places if the schedule or venue changes.

---

## Notes

- The gate only runs on Cloudflare (and `wrangler pages dev`). Local
  `astro dev` / `npm run preview` are **not** gated — no password needed while
  developing.
- **Custom domain:** `anna-mike-wedding.com` is registered (Cloudflare
  Registrar) but still needs to be attached to the Pages project — Pages
  project → **Custom domains → Set up a custom domain**, enter
  `anna-mike-wedding.com` (add `www.anna-mike-wedding.com` too if you want
  that to work as well). Since the domain is already on Cloudflare, the DNS
  record Pages asks for gets added automatically — no manual DNS step needed
  here, unlike the Resend records above. `site` in `astro.config.mjs` is
  already set to `https://anna-mike-wedding.com`. The password gate keeps
  working on the new domain too — it's domain-independent.
