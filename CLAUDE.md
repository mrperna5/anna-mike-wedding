# Anna & Mike — wedding site

A static site for Anna and Mike's three-day destination wedding in **Pienza, Tuscany**,
**14–16 May 2027**. Built with Astro, deployed to GitHub Pages. Mobile-first — most guests
will open it on a phone.

Weekend: **Fri** welcome pizza party · **Sat** ceremony & celebration · **Sun** pool party / recovery.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
(`node` may not be on the Bash PATH in this environment — run npm/astro via PowerShell.)

Build and preview the static output (what GitHub Pages serves):

```
npm run build
npm run preview
```

## Design system

The aesthetic is **elegant, modern, editorial — never cheesy and never a generic wedding
template.** Whitespace and hairlines do the luxury work. The single source of truth is
`src/styles/global.css` (CSS custom properties on `:root`). Use the tokens; don't hardcode.

**Palette** — roughly 70% cream/white, 25% olive, 5% terracotta. Terracotta is a *rare accent*
(a rule, an underline, a number, a hover) — never a theme.

| Token | Value | Use |
| --- | --- | --- |
| `--cream` / `--cream-deep` | `#f8f4ed` / `#efe9dd` | page bg / alt sections (`.section--alt`) |
| `--ink` / `--ink-soft` | `#26251f` / `#46453c` | headings / body |
| `--olive` / `--olive-muted` | `#4c5040` / `#7c7e66` | structural ink / labels |
| `--terracotta` | `#b26340` | rare accent only |
| `--hairline` | `#cfc7b5` | thin dividers |

**Type**
- `--font-display` → **Bodoni Moda** (display serif): all headings and the names. Used large and
  sparingly.
- `--font-sans` → **Hanken Grotesk**: body copy, nav, and the uppercase tracked `.kicker` labels.
- `--font-script` → **Amalfi Coast** (currently a **Tangerine placeholder** — see
  `public/fonts/README.md` to swap). Used on **exactly one thing**: the word **"and"** in the
  couple lockup.

**The names rule (important):** it's `Anna` + `and` + `Mike`, where "Anna" and "Mike" are in
Bodoni Moda and the lowercase word **"and"** is the only thing in the script face. It is the
**word "and", not an ampersand**, and the script never touches the names. The lockup lives in the
`.couple` / `.couple__and` classes — reuse them, don't reinvent.

**Voice / anti-cliché guardrails**
- Copy is dry, warm, first-person — like a thoughtful invitation, not a template.
- No: countdown timers, confetti, "we said yes!", script-everything, watercolour florals, gold
  foil, decorative gradients, or CSS "trees". Image placeholders are flat olive fields with an
  italic caption (`.photo` / `.photo__cap`), never gradients pretending to be photos.

## Bilingual (English + German)

**Every guest-facing string must exist in both English and German.** Many guests
speak only one of the two.

- All copy is typed as `L = { en: string; de: string }` (see `src/data/i18n.ts`).
  Data files (`schedule.ts`, `faq.ts`, …) and the prose/UI strings in
  `src/data/copy.ts` hold both languages. **Never add an English-only string.**
- Render with the `Bi.astro` helper: `<Bi t={item.title} />` (from a localised
  field) or `<Bi en="…" de="…" />` (inline). It outputs both languages as
  `.bi[data-lang]` spans.
- The active language is shown via CSS keyed off `<html data-lang>` (rules in
  `global.css`); the EN/DE toggle in `Nav.astro` flips it instantly (no reload)
  and persists to `localStorage`. The inline script in `Layout.astro` sets the
  initial language before first paint: saved choice → else German browsers get
  German, everyone else English.
- For markup that differs between languages (e.g. a heading with `<br>`, the
  RSVP script word), render two manual `<span class="bi" data-lang="…">` blocks.
- `:global(html[data-lang='…'])` is required when a *scoped* component style
  targets the language state — `html` isn't inside the component, so it needs
  `:global` (see the active-button rule in `Nav.astro`).
- The `<title>`/meta can't live-toggle, so they stay English (with a bilingual
  description) — that's fine.

## Structure

- `src/pages/index.astro` — composes the one-page site from section components.
- `src/layouts/Layout.astro` — head/meta/OG, font links, `global.css`, `Nav`, `Footer`, and a
  small reveal-on-scroll script (progressive enhancement; content is visible without JS).
- `src/components/*.astro` — one component per section (Hero, Overview, Story, Schedule, Venue,
  Travel, Accommodation, DressCode, ThingsToDo, Faq, Rsvp, Contact) plus Nav/Footer. Component-
  specific CSS lives in scoped `<style>` blocks; shared tokens/primitives live in `global.css`.
- `src/data/*.ts` — **all editable copy lives here** (site facts, schedule, accommodation, faq,
  thingsToDo, dressCode). Change content here, not in markup. `site.ts` also drives the nav index;
  each `nav.id` must match a section's anchor `id`.

## Conventions

- **Mobile-first.** Base styles target phones; layer desktop with `min-width` media queries
  (breakpoints used: `48rem`, `64rem`).
- **Accessibility.** Real landmarks/headings, `:focus-visible` outlines, `prefers-reduced-motion`
  respected, decorative elements `aria-hidden`.
- **Performance.** Near-zero JS by design. TODO: self-host fonts as woff2 (`public/fonts/`) and
  drop the Google Fonts `<link>`.
- **RSVP is visual-only for now** — no form, no backend. Wire to a static-friendly service
  (Formspree/Tally) later; see `src/components/Rsvp.astro`.
- **Photos:** flat-tone placeholders today; drop real images in `public/images/` and swap per
  that folder's README (prefer Astro `<Image />`).

## Deployment & access — see `DEPLOYMENT.md`

The site must be **private** (wedding details, not public). GitHub Pages has **no
server-side auth**, so real per-guest login lives on **Cloudflare Pages +
Cloudflare Access** (email one-time-code). `DEPLOYMENT.md` has the full runbook.

`astro.config.mjs` is host-flexible via the `GITHUB_PAGES` env var:
- GitHub Pages build (`.github/workflows/deploy.yml` sets `GITHUB_PAGES=true`)
  → `base: '/anna-mike-wedding/'`, public mirror only.
- Cloudflare Pages build (no env var) → served at root, this is the private site.

Custom domain (e.g. annaandmike.com): set it in Cloudflare, then you can drop the
GitHub Pages branch in `astro.config.mjs` and hardcode `site`.

## Documentation

Full Astro documentation: https://docs.astro.build

- [Routing / pages](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Images (`astro:assets`)](https://docs.astro.build/en/guides/images/)
- [Deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
