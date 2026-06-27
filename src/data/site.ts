// Single source of truth for couple + event facts and navigation.
// Edit copy here; components read from it.

export const site = {
	couple: { one: 'Anna', two: 'Mike' },
	dateLong: '14 – 16 May 2027',
	dateShort: '14–16 . 05 . 27',
	year: '2027',
	location: 'Pienza, Tuscany',
	region: "Val d'Orcia",
	// Placeholder — replace with the address you want guests to see.
	email: 'hello@annaandmike.com',
};

// Slim section index used by the nav. `id` must match each section's anchor.
export const nav: { id: string; label: string }[] = [
	{ id: 'overview', label: 'The weekend' },
	{ id: 'story', label: 'Our story' },
	{ id: 'schedule', label: 'Schedule' },
	{ id: 'venue', label: 'Venue' },
	{ id: 'travel', label: 'Travel' },
	{ id: 'stay', label: 'Stay' },
	{ id: 'dress', label: 'Dress code' },
	{ id: 'pienza', label: 'Pienza' },
	{ id: 'faq', label: 'FAQ' },
	{ id: 'rsvp', label: 'RSVP' },
];
