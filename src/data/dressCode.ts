// Dress code by event. The swatches are the only place the palette gets
// to be literal — keep them to the wedding colours.

export type DressDay = {
	day: string;
	event: string;
	code: string;
	note: string;
	swatches: { name: string; hex: string }[];
};

export const dressCode: DressDay[] = [
	{
		day: 'Friday',
		event: 'Welcome pizza party',
		code: 'Relaxed',
		note: 'Linen, loose tailoring, sandals you can walk cobblestones in. Nothing fussy.',
		swatches: [
			{ name: 'Cream', hex: '#f3ecdd' },
			{ name: 'Sand', hex: '#d9c9a8' },
			{ name: 'Olive', hex: '#7c7e66' },
		],
	},
	{
		day: 'Saturday',
		event: 'Ceremony & celebration',
		code: 'Formal · black tie optional',
		note: 'Long dresses and dark suits. The ground is grass and stone, so plan your heels accordingly.',
		swatches: [
			{ name: 'Ink', hex: '#26251f' },
			{ name: 'Deep olive', hex: '#4c5040' },
			{ name: 'Terracotta', hex: '#b26340' },
		],
	},
	{
		day: 'Sunday',
		event: 'Pool party & recovery',
		code: 'Swim & ease',
		note: 'Swimwear, a kaftan or shirt over the top, and sunglasses. That is the whole brief.',
		swatches: [
			{ name: 'White', hex: '#ffffff' },
			{ name: 'Cream', hex: '#f3ecdd' },
			{ name: 'Sage', hex: '#9ca086' },
		],
	},
];
