// The three-day weekend. Edit times/places/copy freely.

export type Event = {
	n: string;
	day: string;
	date: string;
	title: string;
	time: string;
	place: string;
	blurb: string;
	dress: string;
};

export const schedule: Event[] = [
	{
		n: '01',
		day: 'Friday',
		date: '14 May',
		title: 'Welcome pizza party',
		time: 'From 7:00 in the evening',
		place: 'A courtyard near Pienza',
		blurb:
			'Wood-fired pizza, Tuscan wine, and the whole weekend ahead of us. Come hungry — this is where everyone meets everyone.',
		dress: 'Relaxed — linen and good shoes for cobblestones',
	},
	{
		n: '02',
		day: 'Saturday',
		date: '15 May',
		title: 'Ceremony & celebration',
		time: 'Ceremony at 4:30, dinner and dancing to follow',
		place: 'The villa, Val d’Orcia',
		blurb:
			'We say our vows as the afternoon light comes off the hills, then eat and dance long into the Tuscan night.',
		dress: 'Formal — black tie optional',
	},
	{
		n: '03',
		day: 'Sunday',
		date: '16 May',
		title: 'Pool party & recovery',
		time: 'Late morning, drifting into the afternoon',
		place: 'Poolside at the villa',
		blurb:
			'No schedule, no speeches. Swim, nap in the shade, pick at leftovers, and say a slow goodbye before everyone scatters.',
		dress: 'Swimwear and something easy to throw over it',
	},
];
