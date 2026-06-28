// Field notes around Pienza and the Val d'Orcia. Personal, not a tourist list.

import type { L } from './i18n';

export type Note = {
	title: L;
	place: L;
	body: L;
};

export const thingsToDo: Note[] = [
	{
		title: { en: 'Eat the pecorino', de: 'Probiert den Pecorino' },
		place: { en: 'Pienza', de: 'Pienza' },
		body: {
			en: 'Pienza is the pecorino town. Buy more than you think you need from a tiny shop on the main street and eat it with the local honey.',
			de: 'Pienza ist die Stadt des Pecorino. Kauft in einem winzigen Laden an der Hauptstraße mehr, als ihr denkt, und esst ihn mit dem Honig der Region.',
		},
	},
	{
		title: { en: 'Drive the cypress road', de: 'Fahrt die Zypressenstraße' },
		place: { en: 'Val d’Orcia', de: 'Val d’Orcia' },
		body: {
			en: 'The winding road south of San Quirico is the one from every postcard. Go early, when the light is low and the coaches haven’t arrived.',
			de: 'Die kurvige Straße südlich von San Quirico kennt man von jeder Postkarte. Fahrt früh, wenn das Licht tief steht und die Reisebusse noch fehlen.',
		},
	},
	{
		title: { en: 'Taste the wine', de: 'Verkostet den Wein' },
		place: { en: 'Montepulciano', de: 'Montepulciano' },
		body: {
			en: 'Twenty minutes away, the hill town stacks cellars under its streets. Vino Nobile is the one to ask for.',
			de: 'Zwanzig Minuten entfernt reihen sich unter den Gassen des Bergstädtchens die Weinkeller. Fragt nach dem Vino Nobile.',
		},
	},
	{
		title: { en: 'Soak in the springs', de: 'Entspannt in den Thermen' },
		place: { en: 'Bagno Vignoni', de: 'Bagno Vignoni' },
		body: {
			en: 'A whole village built around a steaming thermal pool in its square. Worth the short drive for an unhurried afternoon.',
			de: 'Ein ganzes Dorf rund um ein dampfendes Thermalbecken auf dem Hauptplatz. Die kurze Fahrt lohnt sich für einen gemächlichen Nachmittag.',
		},
	},
];
