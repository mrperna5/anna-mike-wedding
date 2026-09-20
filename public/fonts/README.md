# Self-hosted fonts

`amalfi-coast.woff2` is the real **Amalfi Coast** script face, self-hosted here and
loaded via the `@font-face` block in `src/styles/global.css`. `--font-script` points
at it. It's used **only** on the word "and" in the couple lockup (`.couple__and`,
shared by the Hero names and the RSVP "join" text) — nothing else is affected.

Playfair Display and Hanken Grotesk still load from Google Fonts (see the `<link>`
in `src/layouts/Layout.astro`).

TODO: optionally self-host Playfair Display + Hanken Grotesk here too for
performance, and remove the Google Fonts `<link>`.
