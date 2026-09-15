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
	dress?: L;
};

export const schedule: Event[] = [
	{
		n: '14',
		day: { en: 'May', de: 'Mai' },
		date: { en: 'Friday', de: 'Freitag' },
		title: { en: 'Get together', de: 'Get together' },
		time: { en: '6-10 pm', de: '18-22 Uhr' },
		place: { en: 'Biancacamica, Pienza', de: 'Biancacamicia, Pienza' },
		blurb: {
			en: 'Join us as we kick-off our wedding weekend with a relaxed evening of Tuscan finger food, good wine, and even better company.',
			de: 'xxx.',
		}
	},
	{
		n: '15',
		day: { en: 'May', de: 'Mai' },
		date: { en: 'Saturday', de: 'Samstag' },
		title: { en: 'Wedding Day', de: 'Hochzeit' },
		time: {
			en: '4:30 pm-1:30 am',
			de: '16:30-1:30 Uhr',
		},
		place: { en: 'Villa Apparita, Monticchiello', de: 'Villa Apparita, Monticchiello' },
		blurb: {
			en: '\n' +
				'We can‘t wait to celebrate our love with you and share one of the most meaningful moments of our lives with the people we love most.  Followed by delicious Tuscan food and drinks, we’ll dance the night away and create unforgettable memories together.',
			de: 'xxx.',
		},
		dress: {
			en: 'Formal — black tie optional',
			de: 'xxx',
		},
	},
	{
		n: '16',
		day: { en: 'May', de: 'Mai' },
		date: { en: 'Sunday', de: 'Sonntag' },
		title: { en: 'Sip, Swim, & Recover', de: 'Sonne, Spritz, & Pool' },
		time: {
			en: '2-5 pm',
			de: '14-17 Uhr',
		},
		place: { en: 'Poolside at the villa', de: 'Pool - Villa Apparita' },
		blurb: {
			en: 'If you’re not continuing your travels just yet, come and relax with us by the pool, soak up Tuscan sun and enjoy a cozy afternoon together after the big day.',
			de: 'xxx.',
		},
		dress: {
			en: 'Swimwear and something easy to throw over it',
			de: 'Badesachen und etwas Leichtes zum Überwerfen',
		},
	},
];
