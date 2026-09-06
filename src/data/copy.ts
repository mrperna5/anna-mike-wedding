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
	newTab: { en: 'opens in a new tab', de: 'öffnet in neuem Tab' } as L,
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

export const schedule = {
	// Sub-heading for the run of the weekend, which lives on the overview page.
	kicker: { en: 'Hour by hour', de: 'Stunde für Stunde' } as L,
	title: { en: 'The run of the weekend', de: 'Der Ablauf des Wochenendes' } as L,
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
	kicker: { en: 'Getting here', de: 'Anfahrt' } as L,
	title: { en: 'Getting there', de: 'Anreise' } as L,
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

export const accommodation = {
	kicker: { en: 'Where to stay', de: 'Wo übernachten' } as L,
	title: { en: 'Accommodation', de: 'Unterkunft' } as L,
	intro: {
		en: 'Twenty-seven places we’d happily send you to, in five pockets of the Val d’Orcia — a town, a village, the open countryside, a wishlist, and something a little indulgent. Everything here is within about twenty minutes of the villa.',
		de: 'Siebenundzwanzig Orte, die wir euch guten Gewissens empfehlen, in fünf Ecken des Val d’Orcia — eine Stadt, ein Dorf, das offene Land, eine Wunschliste und etwas zum Verwöhnen. Alles liegt rund zwanzig Autominuten von der Villa entfernt.',
	} as L,
	jump: { en: 'Jump to', de: 'Direkt zu' } as L,
	bookEarly: {
		en: 'Our wedding falls in the Italian holiday season and around a public holiday, so please sort your room sooner rather than later — several of these are already well booked and down to single rooms for our weekend. What matters to us is that everyone finds something that suits them, whether that’s the middle of a small town, the quiet of the countryside, or a pool and a good dinner. We hope you enjoy not just our weekend, but a beautiful stretch of time in Tuscany.',
		de: 'Da unsere Hochzeit in die Ferienzeit und rund um einen Feiertag fällt, kümmert euch am besten früh um eure Unterkunft — einige Häuser sind bereits gut gebucht und haben für unser Wochenende nur noch einzelne Zimmer frei. Uns ist wichtig, dass jede und jeder von euch etwas findet, das zu den eigenen Vorstellungen passt: mitten im Städtchen, in der Ruhe der Landschaft oder mit Pool und gutem Essen. Wir hoffen, dass ihr nicht nur unser Hochzeitswochenende mit uns genießt, sondern auch eine wunderschöne Zeit in der Toskana habt.',
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
	title: { en: 'Things to do', de: 'Unternehmungen' } as L,
	intro: {
		en: 'Make a holiday of it. A few field notes from our own trips around Pienza and the wider Val d’Orcia — the things we’d tell a friend to do, not a guidebook’s greatest hits. We’ll keep adding to this.',
		de: 'Macht einen Urlaub daraus. Ein paar Notizen von unseren eigenen Reisen rund um Pienza und durchs Val d’Orcia — das, was wir Freunden empfehlen würden, nicht die Klassiker aus dem Reiseführer. Wir ergänzen die Liste laufend.',
	} as L,
};

export const faqCopy = {
	kicker: { en: 'Good to know', de: 'Gut zu wissen' } as L,
	title: { en: 'Questions', de: 'Fragen' } as L,
};

export const registry = {
	kicker: { en: 'On the subject of gifts', de: 'Zum Thema Geschenke' } as L,
	title: { en: 'Registry', de: 'Geschenke' } as L,
	intro: {
		en: 'The honest answer is that you flying to Tuscany for us is the present. We’ve lived together for years and the cupboards are full — please don’t feel you owe us anything.',
		de: 'Die ehrliche Antwort: Dass ihr für uns in die Toskana fliegt, ist das Geschenk. Wir wohnen seit Jahren zusammen und die Schränke sind voll — ihr schuldet uns wirklich nichts.',
	} as L,
	outro: {
		en: 'If you’d rather hand us something on the day, a card finds us just as well.',
		de: 'Wenn ihr uns lieber am Tag selbst etwas gebt — eine Karte erreicht uns genauso gut.',
	} as L,
	options: [
		{
			label: { en: 'If you’d like to', de: 'Falls ihr möchtet' },
			title: { en: 'The honeymoon fund', de: 'Die Flitterwochen-Kasse' },
			body: {
				en: 'We’re saving for a long trip after the wedding. A contribution towards a night, a dinner, or a train ticket somewhere would mean a lot. Details to follow closer to the day.',
				de: 'Wir sparen auf eine längere Reise nach der Hochzeit. Ein Beitrag für eine Nacht, ein Abendessen oder eine Zugfahrt würde uns viel bedeuten. Die Details folgen näher am Termin.',
			},
		},
		{
			label: { en: 'Or', de: 'Oder' },
			title: { en: 'Something for the house', de: 'Etwas fürs Zuhause' },
			body: {
				en: 'For anyone who’d prefer something to wrap, we’ll put a short list of things we actually need here in good time — short being the point.',
				de: 'Wer lieber etwas einpackt: Wir stellen hier rechtzeitig eine kurze Liste mit Dingen ein, die wir wirklich brauchen — kurz ist dabei das Entscheidende.',
			},
		},
	],
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
