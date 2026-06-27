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

## Deployment (GitHub Pages)

`astro.config.mjs` sets `site` and `base: '/anna-mike-wedding/'` for a project page. If you move
to a **custom domain** (e.g. annaandmike.com), set `site` to that and **delete `base`**.

## Documentation

Full Astro documentation: https://docs.astro.build

- [Routing / pages](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Images (`astro:assets`)](https://docs.astro.build/en/guides/images/)
- [Deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
