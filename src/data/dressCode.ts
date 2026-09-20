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
		event: { en: 'Get together', de: 'Get together' },
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
		event: { en: 'Wedding day', de: 'Hochzeit' },
		code: {
			en: 'Formal · black tie optional',
			de: 'Festlich · Black Tie optional',
		},
		note: {
			en: 'As this day is a very special one for us, it would be nice of you to dress up a little more elegant and festive. Something that feels perfect for a wedding in Tuscany, but still comfortable enough to celebrate, eat and dance with us all night.',
			de: 'Da dieser Tag für uns etwas ganz Besonderes ist, würden wir uns freuen, wenn ihr euch ein bisschen schicker machen würdet. Passend zu einer Hochzeit in der Toskana, aber trotzdem so, dass ihr euch den ganzen Tag wohlfühlt und abends mit uns bis spät in die Nacht feiern könnt.',
		},
		swatches: [
			{ name: { en: 'Ink', de: 'Tinte' }, hex: '#26251f' },
			{ name: { en: 'Deep olive', de: 'Dunkles Oliv' }, hex: '#4c5040' },
			{ name: { en: 'Terracotta', de: 'Terrakotta' }, hex: '#b26340' },
		],
	},
	{
		day: { en: 'Sunday', de: 'Sonntag' },
		event: { en: 'Sip, Swim & recovery', de: 'Sonne, Spritz & Pool' },
		code: { en: 'Swim & ease', de: 'Baden & entspannen' },
		note: {
			en: 'Easy. Bikini, swimsuit, swim shorts, sunglasses and straight into the pool. This day is all about slowing down, soaking up the sun and spending one last lazy afternoon together.',
			de: 'Easy: Bikini, Badeanzug oder Badehose an, Sonnenbrille auf und ab in den Pool. An diesem Tag heißt es nur noch: Sonne tanken, runterkommen, stets einen Aperol in der Hand und einen letzten wunderbar entspannten Nachmittag zusammen verbringen.',
		},
		swatches: [
			{ name: { en: 'White', de: 'Weiß' }, hex: '#ffffff' },
			{ name: { en: 'Cream', de: 'Creme' }, hex: '#f3ecdd' },
			{ name: { en: 'Sage', de: 'Salbei' }, hex: '#9ca086' },
		],
	},
];
