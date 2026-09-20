// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages — the site is served at the domain root, so there is NO
// `base` path. (A leftover `base` is what broke CSS on pages.dev earlier:
// assets pointed at /anna-mike-wedding/_astro/… and 404'd.)
// Custom domain anna-mike-wedding.com is registered (Cloudflare Registrar) —
// once it's added as a Custom domain on the Pages project (see DEPLOYMENT.md),
// this `site` value is what makes it the canonical URL.
// https://astro.build/config
export default defineConfig({
	site: 'https://anna-mike-wedding.com',
});
