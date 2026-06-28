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

// Slim section index used by the nav. `id` must match each section's anchor.
export const nav: { id: string; label: L }[] = [
	{ id: 'overview', label: { en: 'The weekend', de: 'Das Wochenende' } },
	{ id: 'story', label: { en: 'Our story', de: 'Unsere Geschichte' } },
	{ id: 'schedule', label: { en: 'Schedule', de: 'Programm' } },
	{ id: 'venue', label: { en: 'Venue', de: 'Location' } },
	{ id: 'travel', label: { en: 'Travel', de: 'Anreise' } },
	{ id: 'stay', label: { en: 'Stay', de: 'Unterkunft' } },
	{ id: 'dress', label: { en: 'Dress code', de: 'Dresscode' } },
	{ id: 'pienza', label: { en: 'Pienza', de: 'Pienza' } },
	{ id: 'faq', label: { en: 'FAQ', de: 'FAQ' } },
	{ id: 'rsvp', label: { en: 'RSVP', de: 'Zusagen' } },
];
