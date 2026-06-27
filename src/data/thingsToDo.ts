// Field notes around Pienza and the Val d'Orcia. Personal recommendations,
// not a tourist list. Swap in your own favourites.

export type Note = {
	title: string;
	place: string;
	body: string;
};

export const thingsToDo: Note[] = [
	{
		title: 'Eat the pecorino',
		place: 'Pienza',
		body: 'Pienza is the pecorino town. Buy more than you think you need from a tiny shop on the main street and eat it with the local honey.',
	},
	{
		title: 'Drive the cypress road',
		place: 'Val d’Orcia',
		body: 'The winding road south of San Quirico is the one from every postcard. Go early, when the light is low and the coaches haven’t arrived.',
	},
	{
		title: 'Taste the wine',
		place: 'Montepulciano',
		body: 'Twenty minutes away, the hill town stacks cellars under its streets. Vino Nobile is the one to ask for.',
	},
	{
		title: 'Soak in the springs',
		place: 'Bagno Vignoni',
		body: 'A whole village built around a steaming thermal pool in its square. Worth the short drive for an unhurried afternoon.',
	},
];
