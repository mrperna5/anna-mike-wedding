// @ts-check
import { defineConfig } from 'astro/config';

// Host-flexible config.
// - GitHub Pages (project site) serves under /anna-mike-wedding/, so the
//   GitHub Actions build sets GITHUB_PAGES=true to apply `base`.
// - Cloudflare Pages (the real-login target, see DEPLOYMENT.md) serves at the
//   domain root, so no env var -> no `base`.
// When you move fully to a custom domain, you can delete the GitHub Pages
// branch entirely and just hardcode `site`.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages
		? 'https://mrperna5.github.io'
		: 'https://anna-mike-wedding.pages.dev',
	base: isGitHubPages ? '/anna-mike-wedding/' : undefined,
});
