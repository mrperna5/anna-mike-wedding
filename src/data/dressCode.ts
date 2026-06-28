// Dress code by event. Swatches are the only literal use of the palette.

import type { L } from './i18n';

export type DressDay = {
	day: L;
	event: L;
	code: L;
	note: L;
	swatches: { name: L; hex: string }[];
};

export const dressCode: DressDay[] = [
	{
		day: { en: 'Friday', de: 'Freitag' },
		event: { en: 'Welcome pizza party', de: 'Willkommens-Pizzaparty' },
		code: { en: 'Relaxed', de: 'Leger' },
		note: {
			en: 'Linen, loose tailoring, sandals you can walk cobblestones in. Nothing fussy.',
			de: 'Leinen, lockere Schnitte, Sandalen fürs Kopfsteinpflaster. Nichts Steifes.',
		},
		swatches: [
			{ name: { en: 'Cream', de: 'Creme' }, hex: '#f3ecdd' },
			{ name: { en: 'Sand', de: 'Sand' }, hex: '#d9c9a8' },
			{ name: { en: 'Olive', de: 'Oliv' }, hex: '#7c7e66' },
		],
	},
	{
		day: { en: 'Saturday', de: 'Samstag' },
		event: { en: 'Ceremony & celebration', de: 'Trauung & Feier' },
		code: {
			en: 'Formal · black tie optional',
			de: 'Festlich · Black Tie optional',
		},
		note: {
			en: 'Long dresses and dark suits. The ground is grass and stone, so plan your heels accordingly.',
			de: 'Lange Kleider und dunkle Anzüge. Der Boden ist Gras und Stein — plant eure Absätze entsprechend.',
		},
		swatches: [
			{ name: { en: 'Ink', de: 'Tinte' }, hex: '#26251f' },
			{ name: { en: 'Deep olive', de: 'Dunkles Oliv' }, hex: '#4c5040' },
			{ name: { en: 'Terracotta', de: 'Terrakotta' }, hex: '#b26340' },
		],
	},
	{
		day: { en: 'Sunday', de: 'Sonntag' },
		event: { en: 'Pool party & recovery', de: 'Poolparty & Erholung' },
		code: { en: 'Swim & ease', de: 'Baden & entspannen' },
		note: {
			en: 'Swimwear, a kaftan or shirt over the top, and sunglasses. That is the whole brief.',
			de: 'Badesachen, ein Kaftan oder Hemd darüber und eine Sonnenbrille. Mehr braucht es nicht.',
		},
		swatches: [
			{ name: { en: 'White', de: 'Weiß' }, hex: '#ffffff' },
			{ name: { en: 'Cream', de: 'Creme' }, hex: '#f3ecdd' },
			{ name: { en: 'Sage', de: 'Salbei' }, hex: '#9ca086' },
		],
	},
];
