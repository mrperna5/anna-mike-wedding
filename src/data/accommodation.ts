// Curated places to stay. These are placeholders — swap in the lodgings
// you actually want to recommend, with real links.

export type Stay = {
	name: string;
	kind: string;
	distance: string;
	note: string;
	priceBand: string;
	url?: string;
};

export const accommodation: Stay[] = [
	{
		name: 'Agriturismo in the valley',
		kind: 'Farmhouse rooms',
		distance: '10 min from the villa',
		note: 'Our pick for families and small groups — vineyards, a pool, and breakfast on the terrace.',
		priceBand: '€€',
	},
	{
		name: 'A hotel inside Pienza',
		kind: 'Boutique hotel',
		distance: 'In town, walk to dinner',
		note: 'For those who want to step out the door into the piazza. Book early — it is small.',
		priceBand: '€€€',
	},
	{
		name: 'Villa share near Montepulciano',
		kind: 'Self-catering',
		distance: '20 min by car',
		note: 'Best value if a few of you go in together. You will want a car here.',
		priceBand: '€',
	},
];
