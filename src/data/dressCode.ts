// Dress code by event. Each event is illustrated with three small line icons
// instead of a colour swatch — see DressIcon.astro for the glyph set.

import type { L } from './i18n';

export type DressIconName =
	| 'pasta'
	| 'wine-glass'
	| 'sun'
	| 'rings'
	| 'dress'
	| 'bow-tie'
	| 'aperol'
	| 'beach-ball'
	| 'swimsuit';

export type DressDay = {
	day: L;
	event: L;
	code: L;
	note: L;
	icons: { name: L; icon: DressIconName }[];
};

export const dressCode: DressDay[] = [
	{
		day: { en: 'Friday', de: 'Freitag' },
		event: { en: 'Get together', de: 'Get together' },
		code: { en: 'Smart Casual', de: 'Sommerlich schick' },
		note: {
			en: 'A little dressed up, but still easy and relaxed. Wear whatever makes you feel good and ready to toast the weekend with us. Summery, stylish but not too serious.',
			de: 'Ein bisschen schick, sommerlich und trotzdem nicht too much. Ein schönes Sommerkleid, ein leichtes Hemd – einfach etwas, das sich nach euch und nach Toskana anfühlt und in dem ihr ganz entspannt mit uns auf das bevorstehende Hochzeitswochenende anstoßen könnt.',
		},
		icons: [
			{ name: { en: 'Pasta', de: 'Pasta' }, icon: 'pasta' },
			{ name: { en: 'Wine', de: 'Wein' }, icon: 'wine-glass' },
			{ name: { en: 'Sun', de: 'Sonne' }, icon: 'sun' },
		],
	},
	{
		day: { en: 'Saturday', de: 'Samstag' },
		event: { en: 'Wedding day', de: 'Trauung und Hochzeitsfeier' },
		code: {
			en: 'Elegant · Formal',
			de: 'Herausgeputzt',
		},
		note: {
			en: 'As this day is a very special one for us, it would be nice of you to dress up a little more elegant and festive. Something that feels perfect for a wedding in Tuscany, but still comfortable enough to celebrate, eat and dance with us all night.',
			de: 'Da dieser Tag für uns etwas ganz Besonderes ist, würden wir uns freuen, wenn ihr euch ein bisschen schicker machen würdet. Passend zu einer Hochzeit in der Toskana, aber trotzdem so, dass ihr euch den ganzen Tag wohlfühlt und abends mit uns bis spät in die Nacht feiern könnt.',
		},
		icons: [
			{ name: { en: 'Rings', de: 'Ringe' }, icon: 'rings' },
			{ name: { en: 'Elegant dress', de: 'Elegantes Kleid' }, icon: 'dress' },
			{ name: { en: 'Nice suit', de: 'Guter Anzug' }, icon: 'bow-tie' },
		],
	},
	{
		day: { en: 'Sunday', de: 'Sonntag' },
		event: { en: 'Sip, Swim & recovery', de: 'Sonne, Spritz & Pool' },
		code: { en: 'Poolside Casual', de: 'Entspannt sommerlich' },
		note: {
			en: 'Easy. Bikini, swimsuit, swim shorts, sunglasses and straight into the pool. This day is all about slowing down, soaking up the sun and spending one last lazy afternoon together.',
			de: 'Easy: Bikini, Badeanzug oder Badehose an, Sonnenbrille auf und ab in den Pool. An diesem Tag heißt es nur noch: Sonne tanken, runterkommen, stets einen Aperol in der Hand und einen letzten wunderbar entspannten Nachmittag zusammen verbringen.',
		},
		icons: [
			{ name: { en: 'Aperol', de: 'Aperol' }, icon: 'aperol' },
			{ name: { en: 'Beach ball', de: 'Wasserball' }, icon: 'beach-ball' },
			{ name: { en: 'Swimsuit', de: 'Badesachen' }, icon: 'swimsuit' },
		],
	},
];
