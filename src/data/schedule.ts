// The three-day weekend. Each field is bilingual ({ en, de }).

import type { L } from './i18n';

export type Event = {
	n: string;
	day: L;
	date: L;
	title: L;
	time: L;
	place: L;
	blurb: L;
	dress: L;
};

export const schedule: Event[] = [
	{
		n: '01',
		day: { en: 'Friday', de: 'Freitag' },
		date: { en: '14 May', de: '14. Mai' },
		title: { en: 'Welcome pizza party', de: 'Willkommens-Pizzaparty' },
		time: { en: 'From 7:00 in the evening', de: 'Ab 19:00 Uhr abends' },
		place: { en: 'A courtyard near Pienza', de: 'Ein Innenhof bei Pienza' },
		blurb: {
			en: 'Wood-fired pizza, Tuscan wine, and the whole weekend ahead of us. Come hungry — this is where everyone meets everyone.',
			de: 'Pizza aus dem Holzofen, toskanischer Wein und das ganze Wochenende vor uns. Kommt hungrig — hier lernen sich alle kennen.',
		},
		dress: {
			en: 'Relaxed — linen and good shoes for cobblestones',
			de: 'Leger — Leinen und gute Schuhe fürs Kopfsteinpflaster',
		},
	},
	{
		n: '02',
		day: { en: 'Saturday', de: 'Samstag' },
		date: { en: '15 May', de: '15. Mai' },
		title: { en: 'Ceremony & celebration', de: 'Trauung & Feier' },
		time: {
			en: 'Ceremony at 4:30, dinner and dancing to follow',
			de: 'Trauung um 16:30 Uhr, anschließend Dinner und Tanz',
		},
		place: { en: 'The villa, Val d’Orcia', de: 'Die Villa, Val d’Orcia' },
		blurb: {
			en: 'We say our vows as the afternoon light comes off the hills, then eat and dance long into the Tuscan night.',
			de: 'Wir geben uns das Ja-Wort im Licht des späten Nachmittags und feiern dann bis tief in die toskanische Nacht.',
		},
		dress: {
			en: 'Formal — black tie optional',
			de: 'Festlich — Black Tie optional',
		},
	},
	{
		n: '03',
		day: { en: 'Sunday', de: 'Sonntag' },
		date: { en: '16 May', de: '16. Mai' },
		title: { en: 'Pool party & recovery', de: 'Poolparty & Erholung' },
		time: {
			en: 'Late morning, drifting into the afternoon',
			de: 'Später Vormittag, gemütlich in den Nachmittag hinein',
		},
		place: { en: 'Poolside at the villa', de: 'Am Pool der Villa' },
		blurb: {
			en: 'No schedule, no speeches. Swim, nap in the shade, pick at leftovers, and say a slow goodbye before everyone scatters.',
			de: 'Kein Programm, keine Reden. Schwimmen, im Schatten dösen, Reste naschen und sich in Ruhe verabschieden, bevor alle weiterziehen.',
		},
		dress: {
			en: 'Swimwear and something easy to throw over it',
			de: 'Badesachen und etwas Leichtes zum Überwerfen',
		},
	},
];
