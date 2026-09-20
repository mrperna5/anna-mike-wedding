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
			// Exact pin for the "open in Google Maps" link — the street
			// address above geocodes imprecisely, so the map link uses these
			// coordinates instead while the address text stays human-readable.
			coordinates: '43.05783848553118,11.684370247538835',
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
			coordinates: undefined as string | undefined,
		},
	],
};

export const travel = {
	kicker: { en: 'Arrival', de: 'Anfahrt' } as L,
	title: { en: 'Getting there', de: 'Next Stop: Toskana' } as L,
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
		en: 'What matters most to us is that each of you finds a place that feels just right for you. \n' +
			'We got you a little preselection of accommodation in typical old tiny Tuscan towns but also options a little <i>dolce far niente</i> sounds more like you.\n' +
			'Our recommendations are only a small selection, so feel free to browse Booking.com, Airbnb or Agriturismo.it as well and find the place that suits you best.\n' +
			'<br><br>One little tip: our wedding falls during the holiday season and around a public holiday, so we’d recommend booking early. Some places are already filling up and only have a few rooms left for our weekend. So the sooner, the better - because we hope you’ll not only enjoy our wedding weekend with us, but also have the most wonderful time in Tuscany.',
		de: 'Uns ist wichtig, dass jede und jeder von euch etwas findet, das genau zu euren Vorstellungen passt\n' +
			'Wir haben euch eine kleine Vorauswahl zusammengestellt mit typischen kleinen italienischen Städtchen nahe der Villa Apparita, bis hin zu wunderschönen Orten mehr auf dem Land und in der Natur, falls euch eher nach <i>il dolce far niente</i> ist.\n' +
			'\n' +
			'<br><br>Ein kleiner Tipp noch am Ende: Da unsere Hochzeit in die Ferienzeit und rund um einen Feiertag fällt, kümmert euch am besten früh um eure Unterkunft. Einige Häuser sind bereits gut gebucht und haben für unser Wochenende nur noch einzelne Zimmer frei. Schnell sein, lohnt sich also, denn wir hoffen, dass ihr nicht nur unser Hochzeitswochenende mit uns genießt, sondern auch eine wunderschöne Zeit in der Toskana habt.',
	} as L,
	jump: { en: 'Jump to', de: 'Direkt zu' } as L,
};

export const dress = {
	kicker: { en: 'The question of all questions', de: 'Die Frage aller Fragen' } as L,
	title: { en: 'Dress code', de: 'Dresscode' } as L,
	intro: {
		en: 'Three days, three different moods. Honestly we just want you to feel amazing and comfortable in anything you wear. Nicest thing you can wear is a smile 🧡',
		de: 'Drei Tage, drei verschiedene Vibes. Am wichtigsten ist uns einfach, dass ihr euch in eurem Outfit richtig gut und wohlfühlt. Und das Schönste, was ihr tragen könnt, ist ein Lächeln 🧡',
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
	kicker: { en: 'Just in case you were wondering ...', de: 'Falls ihr euch fragt ...' } as L,
	title: { en: 'Registry', de: 'Wünsche' } as L,
	intro: {
		en: 'For us, the greatest gift is already getting to spend this special weekend with you in Tuscany. We’re happy, healthy, living in our favorite city in a dream apartment, and honestly have pretty much everything we need. Even our kitchen is fully equipped – from a crêpe maker all the way to an espuma siphon ☺️.\n' +
			'If you’d still really like to give us a little something, tap one of the ideas below — each one comes with the account details for wherever you’re sending from. 🧡',
		de: 'Für uns ist es eigentlich schon das schönste Geschenk, dieses besondere Wochenende mit euch in der Toskana verbringen zu können. Wir sind gesund und glücklich, leben in unserer Lieblingsstadt in einer Traumwohnung und haben eigentlich alles, was wir brauchen. Auch unser Haushalt ist komplett ausgestattet – vom Crêpes-Maker bis hin zum Espuma-Siphon ☺️.\n' +
			'Wenn ihr uns trotzdem gerne eine kleine Freude machen möchtet, tippt unten auf eine der Ideen — jede zeigt euch die passenden Kontodaten, egal von wo ihr überweist. 🧡',
	} as L,
	outro: {
		en: 'If you’d rather hand us something on the day, a card finds us just as well.',
		de: 'Wenn ihr uns lieber am Tag selbst etwas gebt — eine Karte erreicht uns genauso gut.',
	} as L,
	// The call to action on every card.
	cta: { en: 'Contribute', de: 'Klingt gut' } as L,

	// The switch inside each popup, and the account details it reveals.
	// Same convention as `name`/`url` in accommodation.ts: the account
	// data itself (names, numbers, the payment reference) is proper nouns
	// and literal strings a guest types in, not prose — so it isn't
	// translated. Only the copy around it is.
	bank: {
		switchLegend: {
			en: 'Choose where you’re sending from',
			de: 'Wählt, von wo ihr überweist',
		} as L,
		reference: { en: 'Reference', de: 'Verwendungszweck' } as L,
		qrCaption: {
			en: 'Scan to fill this in automatically',
			de: 'Scannen, um es automatisch auszufüllen',
		} as L,
		eu: {
			label: { en: 'Sending from Europe', de: 'Überweisung aus Europa' } as L,
			holder: 'Michael Raul Perna',
			lines: {
				en: 'IBAN: BE67 9679 6922 6487<br>SWIFT/BIC: TRWIBEB1XXX',
				de: 'IBAN: BE67 9679 6922 6487<br>SWIFT/BIC: TRWIBEB1XXX',
			} as L,
			qr: '/images/registry-bank-eu-qr.svg',
		},
		us: {
			label: { en: 'Sending from the US', de: 'Überweisung aus den USA' } as L,
			holder: 'Michael Raul Perna',
			lines: {
				en: 'Account type: Checking<br>Routing number: 026073150 — for wire and ACH<br>Account number: 822000803798<br>SWIFT/BIC: CMFGUS33',
				de: 'Kontoart: Checking<br>Routing-Nummer: 026073150 — für Wire und ACH<br>Kontonummer: 822000803798<br>SWIFT/BIC: CMFGUS33',
			} as L,
			qr: '/images/registry-bank-us-qr.svg',
		},
	},

	// Each option is its own little popup: a title, the couple's reaction
	// once you tap it, and the payment reference to write in the transfer.
	// `reference` isn't translated — like the account data, it's a literal
	// string a guest copies in, not prose.
	items: [
		{
			id: 'honeymoon',
			title: { en: 'Honeymoon bonus', de: 'Hochzeitsreise-Bonus' } as L,
			reaction: {
				en: 'WE LOVE YOU! <br>We’ll send you pictures!',
				de: 'WIR LIEBEN EUCH! <br>Fotos gibt\'s natürlich als Beweis!',
			} as L,
			reference: 'Happy Mr. & Mrs. Perna',
		},
		{
			id: 'thermomix',
			title: {
				en: 'Anna’s long-awaited Thermomix dream finally comes true',
				de: 'Annas lang ersehnter Thermomix-Traum wird wahr',
			} as L,
			reaction: {
				en: 'GREAT CHOICE! <br>Happy wife, happy life.',
				de: 'GROSSARTIGE WAHL! <br>Happy wife, happy life.',
			} as L,
			reference: 'Happy Anna',
		},
		{
			id: 'camping',
			title: {
				en: 'Mike’s camping & fishing gear gets an upgrade',
				de: 'Mikes Camping und Angelausrüstung bekommt ein upgrade',
			} as L,
			reaction: {
				en: 'EXCELLENT CHOICE! <br>Anna has to go camping now.',
				de: 'AUSGEZEICHNETE WAHL! <br>Jetzt muss Anna wohl mit zum campen.',
			} as L,
			reference: 'Happy Mike',
		},
		{
			id: 'malm',
			title: {
				en: 'IKEA MALM was so yesterday - over-30s backs need comfort',
				de: 'IKEA MALM war gestern - Ü30 Rücken brauchen Komfort',
			} as L,
			reaction: {
				en: 'OUR BACKS WILL THANK YOU! <br>Sleep just got serious.',
				de: 'UNSERE RÜCKEN WERDEN ES EUCH DANKEN! <br>Schlafen wird jetzt ernst genommen.',
			} as L,
			reference: 'RIP MALM',
		},
		{
			id: 'legroom',
			title: {
				en: 'Anything for more legroom - flight upgrade for the honeymoon',
				de: 'Alles für mehr Beinfreiheit - Flugupgrade für die Flitterwochen',
			} as L,
			reaction: {
				en: 'OUR LEGS ARE ALREADY CELEBRATING! <br>One step closer to stretching out.',
				de: 'UNSERE BEINE FEIERN SCHON! <br>Mehr Platz über den Wolken.',
			} as L,
			reference: 'Legroom fund',
		},
		{
			id: 'surprise',
			title: {
				en: 'You know us best - free choice for your best idea',
				de: 'Ihr kennt uns am besten - überrascht uns einfach',
			} as L,
			reaction: {
				en: 'SURPRISE US! <br>We’re curious what you come up with.',
				de: 'ÜBERRASCHT UNS! <br>Wir sind gespannt, was euch einfällt.',
			} as L,
			reference: 'tbd by you',
		},
	],
};

export const rsvp = {
	kicker: { en: 'With much excitement', de: 'Mit ganz viel Vorfreude' } as L,
	join: { en: 'join', de: 'dabei' } as L,
	headPreEn: 'Will you',
	headPostEn: 'us?',
	headPreDe: 'Bist du',
	headPostDe: '?',
	sub: {
		en: 'We’d be so incredibly happy to have you with us in Tuscany. 🧡 Please let us know by December 20th if you’ll be able to spend this special weekend with us.',
		de: 'Wir würden uns riesig freuen, euch in der Toskana dabei zu haben. 🧡Gebt uns bitte bis zum 20.12. Bescheid, ob ihr dieses Wochenende mit uns verbringen könnt.',
	} as L,
};

export const rsvpForm = {
	name: {
		label: { en: 'Your name (Please fill out each name individually)', de: 'Name (bitte jeder einzeln ausfüllen)' } as L,
		placeholder: { en: 'First and last name', de: 'Vor- und Nachname' } as L,
	},
	email: {
		label: { en: 'Your email', de: 'Deine E-Mail-Adresse' } as L,
		placeholder: { en: 'you@example.com', de: 'dir@beispiel.de' } as L,
		hint: {
			en: 'So we can send a confirmation and the details',
			de: 'Damit wir dir eine Bestätigung mit allen Infos schicken können',
		} as L,
	},
	attending: {
		label: { en: 'Will you be there?', de: 'Bist du dabei?' } as L,
		yes: { en: 'Yes, of course', de: 'Aber natürlich' } as L,
		no: { en: 'Sadly, no', de: 'Leider nein' } as L,
	},
	days: {
		label: { en: 'Which days will we see you?', de: 'An welchen Tagen dürfen wir uns auf dich freuen?' } as L,
		hint: { en: 'Tick all that apply', de: 'Alles Zutreffende ankreuzen' } as L,
		options: [
			{ id: 'friday', label: { en: 'Friday - Get Together', de: 'Freitag - Get Together' } as L },
			{ id: 'saturday', label: { en: 'Saturday - Wedding day', de: 'Samstag - Trauung & Hochzeitfeier' } as L },
			{ id: 'sunday', label: { en: 'Sunday - Sip, Swim & Recover', de: 'Sonntag - Sonne, Spritz & Pool' } as L },
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
		label: { en: 'A song that’ll get you dancing', de: 'Ein Lied, das bei der Party auf keinen Fall fehlen darf' } as L,
		placeholder: { en: 'Artist — title', de: 'Künstler — Titel' } as L,
	},
	message: {
		label: { en: 'A note for us (optional)', de: 'Eine Nachricht an uns (optional)' } as L,
		placeholder: { en: 'Say hello…', de: 'Sagt Hallo…' } as L,
	},
	submit: { en: 'Send RSVP', de: 'Rückmeldung senden' } as L,
	success: {
		en: 'Thank you - your reply is in, and a confirmation is on its way to your inbox.',
		de: 'Danke - deine Antwort ist da, eine Bestätigung ist unterwegs in dein Postfach.',
	} as L,
	error: {
		en: 'Something went wrong sending that. Please try again, or email us.',
		de: 'Beim Senden ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib uns.',
	} as L,
	required: {
		en: 'Please add your name, a valid email.',
		de: 'Bitte trag deine Namen, eine gültige E-Mail-Adresse ein.',
	} as L,
	note: {
		en: 'We\'re already very excited to see you!',
		de: 'Wir freuen uns schon jetzt wahnsinnig auf dich!'
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
