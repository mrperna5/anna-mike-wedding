// Single source of truth for couple + event facts and navigation.
// Translatable strings are `L` ({ en, de }). Edit copy here.

import type { L } from './i18n';

export const site = {
	couple: { one: 'Anna', two: 'Mike' },
	dateLong: { en: '14 – 16 May 2027', de: '14.–16. Mai 2027' } as L,
	dateShort: '14–16 . 05 . 27',
	year: '2027',
	location: { en: 'Pienza, Tuscany', de: 'Pienza, Toskana' } as L,
	region: "Val d'Orcia",
	// Placeholder — replace with the address you want guests to see.
	email: 'hello@annaandmike.com',
};

// The site is one page per section. `href` is the route; `id` matches the
// section anchor inside each page's component. Order here is the order of the
// nav, the home-page index, and the prev/next pager — change it in one place.
export type PageDef = { id: string; href: string; label: L; inNav?: boolean };

export const pages: PageDef[] = [
	{ id: 'overview', href: '/overview', label: { en: 'The weekend', de: 'Das Wochenende' } },
	{ id: 'story', href: '/story', label: { en: 'Our story', de: 'Unsere Geschichte' } },
	{ id: 'schedule', href: '/schedule', label: { en: 'Schedule', de: 'Programm' } },
	{ id: 'venue', href: '/venue', label: { en: 'Venue', de: 'Location' } },
	{ id: 'travel', href: '/travel', label: { en: 'Travel', de: 'Anreise' } },
	{ id: 'stay', href: '/stay', label: { en: 'Stay', de: 'Unterkunft' } },
	{ id: 'dress', href: '/dress', label: { en: 'Dress code', de: 'Dresscode' } },
	{ id: 'pienza', href: '/pienza', label: { en: 'Pienza', de: 'Pienza' } },
	{ id: 'faq', href: '/faq', label: { en: 'FAQ', de: 'FAQ' } },
	{ id: 'rsvp', href: '/rsvp', label: { en: 'RSVP', de: 'Zusagen' } },
	// Reachable from the footer and the pager, but kept out of the top nav.
	{ id: 'contact', href: '/contact', label: { en: 'Contact', de: 'Kontakt' }, inNav: false },
];

export const nav = pages.filter((p) => p.inNav !== false);
