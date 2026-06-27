# Self-hosted fonts (TODO)

Right now Bodoni Moda, Hanken Grotesk, and a Tangerine **placeholder** load from
Google Fonts (see the `<link>` in `src/layouts/Layout.astro`).

When you're ready to finalise:

1. Drop the real **Amalfi Coast** `.woff2` here (e.g. `amalfi-coast.woff2`) and add an
   `@font-face` block in `src/styles/global.css`.
2. Point the script face at it — change only this line in `global.css`:
   ```css
   --font-script: 'Amalfi Coast', cursive;
   ```
   The script face is used **only** on the word "and" in the couple lockup, so nothing
   else is affected.
3. Optionally self-host Bodoni Moda + Hanken Grotesk here too for performance, and remove
   the Google Fonts `<link>`.
