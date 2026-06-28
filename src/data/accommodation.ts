// Curated places to stay. Placeholders — swap in real lodgings + links.

import type { L } from './i18n';

export type Stay = {
	name: L;
	kind: L;
	distance: L;
	note: L;
	priceBand: string;
	url?: string;
};

export const accommodation: Stay[] = [
	{
		name: {
			en: 'Agriturismo in the valley',
			de: 'Agriturismo im Tal',
		},
		kind: { en: 'Farmhouse rooms', de: 'Zimmer im Landhaus' },
		distance: { en: '10 min from the villa', de: '10 Min. von der Villa' },
		note: {
			en: 'Our pick for families and small groups — vineyards, a pool, and breakfast on the terrace.',
			de: 'Unser Tipp für Familien und kleine Gruppen — Weinberge, ein Pool und Frühstück auf der Terrasse.',
		},
		priceBand: '€€',
	},
	{
		name: { en: 'A hotel inside Pienza', de: 'Ein Hotel in Pienza' },
		kind: { en: 'Boutique hotel', de: 'Boutique-Hotel' },
		distance: {
			en: 'In town, walk to dinner',
			de: 'Im Ort, zu Fuß zum Dinner',
		},
		note: {
			en: 'For those who want to step out the door into the piazza. Book early — it is small.',
			de: 'Für alle, die direkt an der Piazza wohnen möchten. Früh buchen — es ist klein.',
		},
		priceBand: '€€€',
	},
	{
		name: {
			en: 'Villa share near Montepulciano',
			de: 'Villa zum Teilen bei Montepulciano',
		},
		kind: { en: 'Self-catering', de: 'Selbstverpflegung' },
		distance: { en: '20 min by car', de: '20 Min. mit dem Auto' },
		note: {
			en: 'Best value if a few of you go in together. You will want a car here.',
			de: 'Am günstigsten, wenn ihr euch zusammentut. Ein Auto ist hier nötig.',
		},
		priceBand: '€',
	},
];
