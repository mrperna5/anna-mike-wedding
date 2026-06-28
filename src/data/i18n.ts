// Localisation primitives. Every translatable string is an `L` ({ en, de }).
// The site renders BOTH languages into the DOM; a CSS rule keyed off
// <html data-lang> shows one at a time, so the in-page toggle is instant
// and needs no reload. See `Bi.astro`, the toggle in `Nav.astro`, and the
// language rules + init script wired through `Layout.astro`.

export type Locale = 'en' | 'de';

export type L = { en: string; de: string };

export const LOCALES: Locale[] = ['en', 'de'];
export const DEFAULT_LOCALE: Locale = 'en';
