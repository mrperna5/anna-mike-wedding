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
			en: 'We can’t think of a better way to begin our wedding weekend than by welcoming you to Biancacamicia. raise a glass together, and kick off a weekend we’ve been dreaming about for so long and exactly the way we always imagined it: relaxed, full of anticipation, with great food, good wine, and all our favorite people in one place. ',
			de: 'Wir wollen mit euch ganz gemütlich in unser Hochzeitswochenende starten. Dafür braucht es eine einzigartige Location, toskanisches Fingerfood, guten Wein und vor allem euch! Wir freuen uns schon wahnsinnig darauf, euch im Biancacamicia zu begrüßen, gemeinsam anzustoßen und mit euch in ein Wochenende zu starten, auf das wir uns schon so lange freuen.',
		}
	},
	{
		n: '15',
		day: { en: 'May', de: 'Mai' },
		date: { en: 'Saturday', de: 'Samstag' },
		title: { en: 'Wedding Day', de: 'Trauung und Hochzeitsfeier' },
		time: {
			en: '4:30 pm-1:30 am',
			de: '16:30-1:30 Uhr',
		},
		place: { en: 'Villa Apparita, Monticchiello', de: 'Villa Apparita, Monticchiello' },
		blurb: {
			en: 'We can‘t wait to celebrate our love with you and share one of the most meaningful moments of our lives with the people we love most. Followed by delicious Tuscan food and drinks, we’ll dance the night away and create unforgettable memories together.',
			de: 'Wir können es kaum erwarten, in der wunderschönen Villa Apparita mit euch unsere Liebe zu feiern und einen ganz besonderen Tag zu erleben. Nach unserer freien Trauung heißt es dann: gemütlich anstoßen, essen, lachen, tanzen und einfach den Abend mit all unseren Lieblingsmenschen genießen. Genau so haben wir uns diesen Tag immer vorgestellt. Und genau auf diese Momente mit euch freuen wir uns am meisten.',
		},
	},
	{
		n: '16',
		day: { en: 'May', de: 'Mai' },
		date: { en: 'Sunday', de: 'Sonntag' },
		title: { en: 'Sip, Swim & Recover', de: 'Sonne, Spritz & Pool' },
		time: {
			en: '2-5 pm',
			de: '14-17 Uhr',
		},
		place: { en: 'Poolside at the villa', de: 'Pool - Villa Apparita' },
		blurb: {
			en: 'If you’re not continuing your travels just yet, come and relax with us by the pool, soak up Tuscan sun and enjoy a cozy afternoon together after the big day.',
			de: 'Noch keine Weiterreise geplant? Perfekt. Dann kommt mit an den Pool, genießt mit uns die toskanische Sonne & den Aperol und lasst uns den Tag ganz entspannt zusammen verbringen und dieses wunderschöne Wochenende gemeinsam ausklingen.',
		},
		dress: {
			en: 'Swimwear and something easy to throw over it',
			de: 'Badesachen und etwas Leichtes zum Überwerfen',
		},
	},
];
