// UI + prose strings for the section components, all bilingual ({ en, de }).
// Section data (schedule, faq, …) lives in its own file; this holds the
// headings, labels, and paragraphs that aren't list data.

import type { L } from './i18n';

export const ui = {
	menu: { en: 'Menu', de: 'Menü' } as L,
	close: { en: 'Close', de: 'Schließen' } as L,
	backToTop: { en: 'Back to top', de: 'Nach oben' } as L,
	dressLabel: { en: 'Dress', de: 'Outfit' } as L,
	haveALook: { en: 'Have a look', de: 'Ansehen' } as L,
	prev: { en: 'Previous', de: 'Zurück' } as L,
	next: { en: 'Next', de: 'Weiter' } as L,
	home: { en: 'Home', de: 'Startseite' } as L,
	indexKicker: { en: 'Everything you need', de: 'Alles Wichtige' } as L,
};

export const hero = {
	kicker: { en: 'Together with their families', de: 'Gemeinsam mit ihren Familien' } as L,
	sub: { en: 'are to be married in', de: 'geben sich das Ja-Wort in' } as L,
	cta: { en: 'Explore the weekend', de: 'Das Wochenende entdecken' } as L,
	caption: {
		en: 'Val d’Orcia, where the light goes gold',
		de: 'Val d’Orcia, wo das Licht golden wird',
	} as L,
};

export const overview = {
	kicker: { en: 'The weekend', de: 'Das Wochenende' } as L,
	headEn: 'Three days among<br>the cypresses',
	headDe: 'Drei Tage zwischen<br>den Zypressen',
	p1: {
		en: 'We didn’t want a wedding that was over in an evening. So we’re asking the people we love to set aside a long weekend in the Val d’Orcia — to eat slowly, stay up late, and be together somewhere beautiful.',
		de: 'Wir wollten keine Hochzeit, die nach einem Abend vorbei ist. Darum bitten wir die Menschen, die wir lieben, sich ein langes Wochenende im Val d’Orcia frei zu halten — um in Ruhe zu essen, lange wach zu bleiben und an einem schönen Ort zusammen zu sein.',
	} as L,
	p2: {
		en: 'Pizza on Friday, vows on Saturday, and nowhere to be on Sunday. The rest of these pages are here to help you plan the trip.',
		de: 'Pizza am Freitag, das Ja-Wort am Samstag und nichts vor am Sonntag. Die übrigen Seiten helfen euch bei der Reiseplanung.',
	} as L,
};

export const story = {
	kicker: { en: 'Our story', de: 'Unsere Geschichte' } as L,
	title: { en: 'How we got here', de: 'Wie wir hierher kamen' } as L,
	lede: {
		en: 'Ten years, three cities, and one very persistent idea that we ought to do this somewhere with good wine.',
		de: 'Zehn Jahre, drei Städte und eine sehr hartnäckige Idee: dass wir das irgendwo mit gutem Wein tun sollten.',
	} as L,
	p: {
		en: 'We’re saving the long version for the toasts. The short one: we met young, took our time, and somewhere along the way Tuscany became the place we kept coming back to. It felt right to bring everyone here.',
		de: 'Die lange Version heben wir uns für die Reden auf. Die kurze: Wir haben uns jung kennengelernt, uns Zeit gelassen, und irgendwann wurde die Toskana der Ort, an den wir immer wieder zurückkehrten. Es fühlte sich richtig an, alle hierher zu holen.',
	} as L,
	caption: { en: 'Us, somewhere in Italy', de: 'Wir, irgendwo in Italien' } as L,
};

export const schedule = {
	kicker: { en: 'The weekend, hour by hour', de: 'Das Wochenende, Stunde für Stunde' } as L,
	title: { en: 'Schedule', de: 'Programm' } as L,
};

export const venue = {
	kicker: { en: 'The venue', de: 'Die Location' } as L,
	title: { en: 'A villa in the hills', de: 'Eine Villa in den Hügeln' } as L,
	intro: {
		en: 'Everything happens in one place over the weekend — the ceremony on the lawn, dinner under the sky, and the pool the morning after. You won’t need to rush between locations.',
		de: 'Alles findet am selben Ort statt — die Trauung auf der Wiese, das Dinner unter freiem Himmel und der Pool am Morgen danach. Ihr müsst nicht zwischen Orten hetzen.',
	} as L,
	caption: { en: 'The villa, Val d’Orcia', de: 'Die Villa, Val d’Orcia' } as L,
	facts: [
		{
			label: { en: 'Where', de: 'Wo' },
			value: {
				en: 'A private villa near Pienza',
				de: 'Eine private Villa bei Pienza',
			},
		},
		{
			label: { en: 'Setting', de: 'Umgebung' },
			value: {
				en: 'Hills, vineyards, and a view across the Val d’Orcia',
				de: 'Hügel, Weinberge und ein Blick über das Val d’Orcia',
			},
		},
		{
			label: { en: 'Getting in', de: 'Ankunft' },
			value: {
				en: 'A short drive from town; parking on site',
				de: 'Kurze Fahrt vom Ort; Parkplätze vor Ort',
			},
		},
		{
			label: { en: 'Underfoot', de: 'Untergrund' },
			value: {
				en: 'Gravel, grass, and stone — choose shoes kindly',
				de: 'Kies, Gras und Stein — wählt die Schuhe mit Bedacht',
			},
		},
	],
};

export const travel = {
	kicker: { en: 'Getting there', de: 'Anreise' } as L,
	title: { en: 'Travel', de: 'Anreise' } as L,
	intro: {
		en: 'Pienza sits in southern Tuscany, between Siena and the Umbrian border. However you come, you’ll want wheels once you’re here.',
		de: 'Pienza liegt in der südlichen Toskana, zwischen Siena und der Grenze zu Umbrien. Wie ihr auch kommt — vor Ort braucht ihr ein Auto.',
	} as L,
	steps: [
		{
			label: { en: 'Fly', de: 'Fliegen' },
			title: { en: 'Florence or Rome', de: 'Florenz oder Rom' },
			body: {
				en: 'Florence (FLR) is closest — about 1h40 by car. Rome (FCO) is a larger hub roughly 2h30 away. Pisa and Perugia work too.',
				de: 'Florenz (FLR) ist am nächsten — etwa 1 Std. 40 mit dem Auto. Rom (FCO) ist ein größerer Hub, rund 2 Std. 30 entfernt. Pisa und Perugia gehen auch.',
			},
		},
		{
			label: { en: 'Drive', de: 'Fahren' },
			title: { en: 'Into the Val d’Orcia', de: 'Ins Val d’Orcia' },
			body: {
				en: 'Hire a car at the airport. The last stretch winds through the hills and is half the pleasure of arriving.',
				de: 'Mietet am Flughafen ein Auto. Das letzte Stück windet sich durch die Hügel und ist die halbe Freude an der Ankunft.',
			},
		},
		{
			label: { en: 'Rail', de: 'Bahn' },
			title: { en: 'Train to Chiusi', de: 'Zug nach Chiusi' },
			body: {
				en: 'Prefer the train? Chiusi-Chianciano Terme is the nearest station, then a 40-minute drive or taxi to Pienza.',
				de: 'Lieber mit dem Zug? Chiusi-Chianciano Terme ist der nächste Bahnhof, dann 40 Minuten mit Auto oder Taxi nach Pienza.',
			},
		},
	],
};

export const stay = {
	kicker: { en: 'Where to stay', de: 'Wo übernachten' } as L,
	title: { en: 'Accommodation', de: 'Unterkunft' } as L,
	intro: {
		en: 'A few places we’d happily send you to, at a range of prices. Rooms in this corner of Tuscany are limited in May, so book sooner rather than later — we’ll add more as we lock them in.',
		de: 'Ein paar Orte, die wir euch guten Gewissens empfehlen, in unterschiedlichen Preisklassen. Zimmer sind in diesem Teil der Toskana im Mai knapp — bucht lieber früher als später. Wir ergänzen die Liste laufend.',
	} as L,
};

export const dress = {
	kicker: { en: 'What to wear', de: 'Was anziehen' } as L,
	title: { en: 'Dress code', de: 'Dresscode' } as L,
	intro: {
		en: 'Three days, three moods. Lean into the palette if it helps — soft creams, olive, and the occasional terracotta — but mostly just come as the most comfortable version of yourself.',
		de: 'Drei Tage, drei Stimmungen. Orientiert euch ruhig an der Farbpalette — sanftes Creme, Oliv und ab und zu Terrakotta — kommt aber vor allem als die bequemste Version von euch selbst.',
	} as L,
};

export const todo = {
	kicker: { en: 'If you’re staying on', de: 'Wenn ihr länger bleibt' } as L,
	title: { en: 'Around Pienza', de: 'Rund um Pienza' } as L,
	intro: {
		en: 'Make a holiday of it. A few field notes from our own trips — the things we’d tell a friend to do, not a guidebook’s greatest hits.',
		de: 'Macht einen Urlaub daraus. Ein paar Notizen von unseren eigenen Reisen — das, was wir Freunden empfehlen würden, nicht die Klassiker aus dem Reiseführer.',
	} as L,
};

export const faqCopy = {
	kicker: { en: 'Good to know', de: 'Gut zu wissen' } as L,
	title: { en: 'Questions', de: 'Fragen' } as L,
};

export const rsvp = {
	kicker: { en: 'With love', de: 'In Liebe' } as L,
	join: { en: 'join', de: 'dabei' } as L,
	headPreEn: 'Will you',
	headPostEn: 'us?',
	headPreDe: 'Bist du',
	headPostDe: '?',
	sub: {
		en: 'Let us know whether you can make it — you can change your answer any time before the wedding.',
		de: 'Sagt uns, ob ihr dabei sein könnt — ihr könnt eure Antwort bis zur Hochzeit jederzeit ändern.',
	} as L,
};

export const rsvpForm = {
	name: {
		label: { en: 'Your name(s)', de: 'Euer Name / eure Namen' } as L,
		placeholder: { en: 'First and last name', de: 'Vor- und Nachname' } as L,
	},
	attending: {
		label: { en: 'Will you be there?', de: 'Seid ihr dabei?' } as L,
		yes: { en: 'Joyfully, yes', de: 'Mit Freude, ja' } as L,
		no: { en: 'Sadly, no', de: 'Leider nein' } as L,
	},
	days: {
		label: { en: 'Which days will we see you?', de: 'An welchen Tagen sehen wir euch?' } as L,
		hint: { en: 'Tick all that apply', de: 'Alles Zutreffende ankreuzen' } as L,
		options: [
			{ id: 'friday', label: { en: 'Friday — welcome pizza', de: 'Freitag — Willkommens-Pizza' } as L },
			{ id: 'saturday', label: { en: 'Saturday — ceremony & celebration', de: 'Samstag — Trauung & Feier' } as L },
			{ id: 'sunday', label: { en: 'Sunday — pool party', de: 'Sonntag — Poolparty' } as L },
		],
	},
	dietary: {
		label: {
			en: 'Anything we should know? (allergies, dietary needs)',
			de: 'Sollten wir etwas wissen? (Allergien, Ernährung)',
		} as L,
		placeholder: { en: 'e.g. vegetarian, nut allergy', de: 'z. B. vegetarisch, Nussallergie' } as L,
	},
	song: {
		label: { en: 'A song that’ll get you dancing', de: 'Ein Lied, das euch tanzen lässt' } as L,
		placeholder: { en: 'Artist — title', de: 'Künstler — Titel' } as L,
	},
	message: {
		label: { en: 'A note for us (optional)', de: 'Eine Nachricht an uns (optional)' } as L,
		placeholder: { en: 'Say hello…', de: 'Sagt Hallo…' } as L,
	},
	submit: { en: 'Send RSVP', de: 'Zusage senden' } as L,
	success: {
		en: 'Thank you — your reply is in. Send it again any time to update it.',
		de: 'Danke — eure Antwort ist da. Sendet sie jederzeit erneut, um sie zu ändern.',
	} as L,
	error: {
		en: 'Something went wrong sending that. Please try again, or email us.',
		de: 'Beim Senden ist etwas schiefgelaufen. Bitte versucht es erneut oder schreibt uns.',
	} as L,
	required: {
		en: 'Please add your name and let us know yes or no.',
		de: 'Bitte tragt euren Namen ein und sagt uns ja oder nein.',
	} as L,
};

export const contact = {
	kicker: { en: 'Questions', de: 'Fragen' } as L,
	title: { en: 'Ask us anything', de: 'Fragt uns alles' } as L,
	p: {
		en: 'Planning a trip from afar can throw up a hundred small questions — flights, rooms, what to pack, who else is coming. Don’t sit on them. We’d genuinely rather hear from you than have you guess.',
		de: 'Eine Reise aus der Ferne zu planen wirft hundert kleine Fragen auf — Flüge, Zimmer, was einpacken, wer noch kommt. Behaltet sie nicht für euch. Wir hören wirklich lieber von euch, als dass ihr rätselt.',
	} as L,
};
