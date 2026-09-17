// UI + prose strings for the section components, all bilingual ({ en, de }).
// Section data (schedule, faq, …) lives in its own file; this holds the
// headings, labels, and paragraphs that aren't list data.

import type { L } from './i18n';

export const ui = {
	menu: { en: 'Menu', de: 'Menü' } as L,
	close: { en: 'Close', de: 'Schließen' } as L,
	backToTop: { en: 'Back to top', de: 'Nach oben' } as L,
	dressLabel: { en: 'Dress', de: 'Outfit' } as L,
	haveALook: { en: 'Have a look', de: 'Kleiner Einblick' } as L,
	newTab: { en: 'opens in a new tab', de: 'öffnet in neuem Tab' } as L,
	prev: { en: 'Previous', de: 'Zurück' } as L,
	next: { en: 'Next', de: 'Weiter' } as L,
	home: { en: 'Home', de: 'Startseite' } as L,
	indexKicker: { en: 'Everything you need', de: 'Alles Wichtige' } as L,
};

export const hero = {
	kicker: { en: 'It\'s finally happening', de: 'Endlich ist es soweit' } as L,
	sub: { en: 'We are celebrating our marriage', de: 'geben sich das Ja-Wort in' } as L,
	cta: { en: 'Our wedding weekend', de: 'Unser HochzeitsWochenende' } as L,
	caption: {
		en: 'Val d’Orcia, where the light goes gold',
		de: 'Val d’Orcia, wo das Licht golden wird',
	} as L,
	and: { en: 'and', de: 'und' } as L,
};

export const overview = {
	kicker: { en: 'Our weekend', de: 'Unser Wochenende' } as L,
	headEn: 'The weekend we\'ve been dreaming of',
	headDe: 'Eine Vision. Ein Gefühl. Ein Ort. <br> Unser Hochzeitswochenende.',
	p1: {
		en: 'When we first imagined our wedding it was never about a particular place, a specific style, or a certain venue.',
		de: 'Als wir uns das erste Mal unsere Hochzeit ausgemalt haben, hatten wir nie einen konkreten Ort, einen besonderen Stil oder eine bestimmte Location im Sinn.',
	} as L,
	p2: {
		en: 'From the very beginning, there was one thing we knew for certain: we wanted to celebrate this special day with the people who mean the most to us. In a beautiful place, enjoying plenty of time together with long conversations, lots of laughter, delicious food, a good glass of wine (or two, or three … maybe a few more 😇), and dancing until the morning comes. <br> Simply celebrating our love together with all of you.',
		de: 'Von Anfang an wussten wir nur eines ganz genau: Wir möchten diesen besonderen Tag mit den Menschen verbringen, die uns am wichtigsten sind. An einem wunderschönen Ort, mit ganz viel Zeit füreinander – für lange Gespräche, gemeinsames Lachen, gutes Essen genießen, ein schönes Glas Wein (oder zwei, drei … vielleicht auch ein paar mehr 😇), und Tanzen bis tief in die Nacht. <br> Einfach unsere Liebe feiern – gemeinsam mit euch.',
	} as L,
	p3: {
		en: 'And we couldn\'t be happier to say our dream is finally coming true.',
		de: 'Und wir können es immer noch kaum glauben und sind überglücklich heute sagen zu können, dass dieser Traum nun endlich Wirklichkeit wird.',
	} as L,
};

export const schedule = {
	// Sub-heading for the run of the weekend, which lives on the overview page.
	kicker: { en: 'Three days together', de: 'DREI TAGE. WIR & IHR ' } as L,
	title: { en: 'Our wedding weekend', de: 'Unser Hochzeitswochenende' } as L,
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
	// The two named properties, shown side by side below the facts. Proper
	// nouns and URLs aren't translated (same convention as `name`/`url` in
	// accommodation.ts) — plain strings, not `L`. The address IS bilingual,
	// since only the country name changes between languages (Italy/Italien).
	locations: [
		{
			name: 'Biancacamica',
			address: {
				en: 'Strada Provinciale del Monte Amiata, 53026 Pienza SI, Italy',
				de: 'Strada Provinciale del Monte Amiata, 53026 Pienza SI, Italien',
			} as L,
			website: 'https://www.biancacamicia.it',
			photo: '/images/venue-biancacamica.jpg',
			// Horizontal focal point for the cover-cropped photo (the table
			// and the gazebo arch sit left of center in the source image).
			photoFocus: '35%',
		},
		{
			name: 'Villa Apparita',
			address: {
				en: 'Podere Apparita, 40, Pienza SI, Italy',
				de: 'Podere Apparita, 40, Pienza SI, Italien',
			} as L,
			website: 'https://www.villaapparita.it',
			photo: '/images/venue-villa-apparita.jpg',
			// The house sits left of center in the source image.
			photoFocus: '25%',
		},
	],
};

export const travel = {
	kicker: { en: 'Arrival', de: 'Anfahrt' } as L,
	title: { en: 'Getting there', de: 'Anreise' } as L,
	month: { en: 'May', de: 'Mai' } as L,
	intro: {
		en: 'We definitely found our favorite place in Tuscany and can\'t believe we are actually getting married here. Pienza and Monticchiello sit in southern Tuscany, between Siena and the Umbrian border. Once you\'re here, having a car is the easiest way to explore the rolling hills, cypress alleys, quaint villages, and everything that makes this part of Tuscany so special.',
		de: 'Wir haben definitiv unseren absoluten Lieblingsort in der Toskana gefunden und können selbst noch kaum glauben, dass wir genau hier heiraten werden.\n' +
			'Pienza und Monticchiello liegen im Süden der Toskana, zwischen Siena und der Grenze zu Umbrien. Wir würden euch empfehlen, dass ihr mit dem Auto kommt, oder euch einen Mietwagen nehmt. So könnt ihr am besten die wunderschöne Gegend erkunden: klassische toskanische Zypressen Alleen, Hügel rauf und runter fahren, dazwischen kurze Stopps in kleinen Dörfern mit unzähligen verwinkelten Gassen und Läden an jeder Ecke und all die kleinen besonderen Orte, die diese Ecke der Toskana so unglaublich schön machen.',
	} as L,
	steps: [
		{
			label: { en: 'Fly', de: 'Fliegen' },
			title: { en: 'Florence, Pisa, Bologna or Rome', de: 'Florenz, Pisa, Bologna oder Rom' },
			body: {
				en: 'Florence (FLR) is closest at about 1h40 by car. Rome (FCO) is a larger hub, roughly 2h30 away, while Pisa (PSA) and Bologna (BLQ) are also great options.',
				de: 'Am nächsten liegt Florenz (FLR) – von dort seid ihr mit dem Auto in etwa 1 Stunde 40 Minuten bei uns. Rom (FCO) ist als großer internationaler Flughafen ebenfalls eine super Option und liegt ungefähr 2 Stunden 30 Minuten entfernt. Auch Pisa (PSA) und Bologna (BLQ) wäre eine gute Alternative. Danach nehmt ihr euch am besten einen Mietwagen und erkundet bereits bei der Anfahrt die wunderschöne toskanische Landschaft.',
			},
		},
		{
			label: { en: 'Drive', de: 'Fahren' },
			title: { en: 'Val d’Orcia Roadtrip', de: 'Toskana Roadtrip' },
			body: {
				en: 'Pick up a car at the airport and enjoy the drive into the Val d’Orcia. The last stretch winds through the Tuscan hills, and we promise it already is a great start into the wedding weekend. One little tip (or lets be honest from personal experience): at the Italian toll booths, better don’t take the lane that looks like “we have an annual pass, so we don’t have to pay.” This will get expensive 😉.',
				de: 'Wenn ihr aus Deutschland mit dem Auto anreist, beginnt das Hochzeitswochenende eigentlich schon unterwegs. Für alle, die die Fahrt ganz entspannt angehen möchten, bietet sich ein Zwischenstopp am Gardasee perfekt an und am nächsten Morgen weiter Richtung Toskana.\n' +
					'Sobald ihr die Alpen hinter euch lasst und euch dem Val d’Orcia nähert, werden die Straßen kleiner und hügeliger und die Aussicht immer schöner. Hier kommt ganz automatisch Urlaubs- und Hochzeitsstimmung auf. Noch ein Tipp am Rande aka aus eigener Erfahrung: bei den italienischen Passkontrollen auf der Autobahn bitte nicht die „wir haben ein Jahresticket und müssen nicht zahlen“ Spur nehmen. Wird teuer 😉',
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
