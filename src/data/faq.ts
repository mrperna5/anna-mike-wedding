// Quiet, useful answers. Warm and plain in both languages.

import type { L } from './i18n';

/** A phone-book entry rendered under an answer — names and streets are
 *  proper nouns, so only the note is translated. */
export type Place = { name: string; address: string; phone: string; note?: L };

export type Qa = { q: L; a: L; places?: Place[] };

export const faq: Qa[] = [
	{
		q: { en: 'Can I bring a plus-one?', de: 'Darf ich eine Begleitung mitbringen?' },
		a: {
			en: 'Your invitation names everyone we’ve saved a seat for. If you’re unsure, just ask us — it’s the easiest thing in the world to sort out.',
			de: 'Auf eurer Einladung steht, für wen wir einen Platz reserviert haben. Wenn ihr unsicher seid, fragt uns einfach — das ist im Handumdrehen geklärt.',
		},
	},
	{
		q: { en: 'Are children welcome?', de: 'Sind Kinder willkommen?' },
		a: {
			en: 'The little ones we know and love are very welcome. Friday and Sunday are made for them; Saturday evening is a touch later and grander, so we’ll help you find a sitter if you’d like one.',
			de: 'Die Kleinen, die wir kennen und lieben, sind herzlich willkommen. Freitag und Sonntag sind wie für sie gemacht; der Samstagabend wird etwas später und festlicher — gern helfen wir euch, einen Babysitter zu finden.',
		},
	},
	{
		q: { en: 'Do I need a car?', de: 'Brauche ich ein Auto?' },
		a: {
			en: 'It helps. The villa sits in the countryside and taxis are scarce out here. We’ll share lifts and shuttle details closer to the time.',
			de: 'Es hilft. Die Villa liegt auf dem Land und Taxis sind hier rar. Fahrgemeinschaften und Shuttle-Infos teilen wir näher am Termin.',
		},
	},
	{
		q: { en: 'What will the weather be like?', de: 'Wie wird das Wetter?' },
		a: {
			en: 'Mid-May in Tuscany is usually warm days and cool evenings. Bring something for your shoulders after dark and shoes that handle stone and grass.',
			de: 'Mitte Mai sind die Tage in der Toskana meist warm und die Abende kühl. Nehmt etwas für die Schultern für später mit und Schuhe für Stein und Gras.',
		},
	},
	{
		q: {
			en: 'Is there anywhere to get my hair done?',
			de: 'Gibt es hier Friseure?',
		},
		a: {
			en: 'A handful of small salons in Pienza and one in Monticchiello. They’re village salons rather than bridal studios, so ring ahead — May is busy in the Val d’Orcia, and the phone is the way to reach them.',
			de: 'Ein paar kleine Salons in Pienza und einer in Monticchiello. Es sind Dorfsalons, keine Braut-Studios — ruft also frühzeitig an. Im Mai ist im Val d’Orcia viel los, und erreichbar sind sie am besten telefonisch.',
		},
		places: [
			{
				name: 'Caselli Livia Hair Salon',
				address: 'Via San Gregorio 23, Pienza',
				phone: '+39 0578 749057',
			},
			{
				name: 'Unisex Catia',
				address: 'Via della Madonnina 40, Pienza',
				phone: '+39 339 888 9547',
			},
			{
				name: 'Parrucchiera Garosi Carla',
				address: 'Corso il Rossellino 44, Pienza',
				phone: '+39 0578 748052',
			},
			{
				name: 'Gocce di Bellezza',
				address: 'Via Marconi 20, Pienza',
				phone: '+39 335 157 5096',
				note: {
					en: 'A beauty salon rather than a hairdresser — the one to try for make-up.',
					de: 'Ein Kosmetikstudio, kein Friseur — die Adresse für Make-up.',
				},
			},
			{
				name: 'Parrucchiera per Signora Paola',
				address: 'Via Pietro Lorenzetti 1, Monticchiello',
				phone: '+39 0578 755148',
			},
		],
	},
	{
		q: { en: 'When should I RSVP by?', de: 'Bis wann soll ich zusagen?' },
		a: {
			en: 'We’ll open RSVPs here in good time, with a date to reply by. For now, save the weekend and book your bed.',
			de: 'Wir öffnen die Zusagen hier rechtzeitig, mit einer Frist zum Antworten. Haltet euch fürs Erste das Wochenende frei und bucht eure Unterkunft.',
		},
	},
];
