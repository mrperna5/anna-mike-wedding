// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages — the site is served at the domain root, so there is NO
// `base` path. (A leftover `base` is what broke CSS on pages.dev earlier:
// assets pointed at /anna-mike-wedding/_astro/… and 404'd.)
// When you add a custom domain (e.g. annaandmike.com), just change `site`.
// https://astro.build/config
export default defineConfig({
	site: 'https://anna-mike-wedding.pages.dev',
});
