// Builds the combined confirmation + reminder email sent to a guest right
// after they submit the RSVP form. Sent via Resend (see ../api/rsvp.js).
//
// Self-contained on purpose: Cloudflare Pages Functions are bundled
// separately from the Astro site, so this does not import from `src/data`.
// The wedding facts below (dates, venue, schedule) are duplicated from
// `src/data/site.ts` and `src/data/schedule.ts` - if those change, update
// here too.
//
// Every guest-facing string ships in both English and German, same as the
// site itself (see CLAUDE.md's bilingual rule): the email stacks an EN
// block above a DE block rather than guessing which language the guest
// prefers.

const FACTS = {
	dateLong: { en: 'May 14 – 16, 2027', de: '14. – 16. Mai 2027' },
	location: { en: 'Pienza, Tuscany, Italy', de: 'Pienza, Toskana, Italien' },
	siteUrl: 'https://anna-mike-wedding.com',
};

const DAY_LABEL = {
	friday: { en: 'Friday - Get Together', de: 'Freitag - Get Together' },
	saturday: { en: 'Saturday - Wedding day', de: 'Samstag - Trauung & Hochzeitsfeier' },
	sunday: { en: 'Sunday - Sip, Swim & Recover', de: 'Sonntag - Sonne, Spritz & Pool' },
};

const SCHEDULE = [
	{
		day: { en: 'Friday, May 14', de: 'Freitag, 14. Mai' },
		title: { en: 'Get together', de: 'Get together' },
		time: { en: '6–10 pm', de: '18–22 Uhr' },
		place: { en: 'Biancacamicia, Pienza', de: 'Biancacamicia, Pienza' },
	},
	{
		day: { en: 'Saturday, May 15', de: 'Samstag, 15. Mai' },
		title: { en: 'Wedding day', de: 'Hochzeit' },
		time: { en: '4:30 pm – 1:30 am', de: '16:30 – 1:30 Uhr' },
		place: { en: 'Villa Apparita, Monticchiello', de: 'Villa Apparita, Monticchiello' },
	},
	{
		day: { en: 'Sunday, May 16', de: 'Sonntag, 16. Mai' },
		title: { en: 'Sip, swim & recover', de: 'Sonne, Spritz & Pool' },
		time: { en: '2–5 pm', de: '14–17 Uhr' },
		place: { en: 'Poolside at the villa', de: 'Pool, Villa Apparita' },
	},
];

function escapeHtml(value) {
	return String(value ?? '').replace(/[&<>"']/g, (c) => (
		{ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
	));
}

/**
 * @param {{ name: string, attending: 'yes' | 'no', days: string[], dietary?: string, song?: string, message?: string }} rsvp
 * @returns {{ subject: string, html: string, text: string }}
 */
export function buildRsvpEmail(rsvp) {
	const { name, attending, days = [], dietary = '', song = '', message = '' } = rsvp;
	const yes = attending === 'yes';
	const safeName = escapeHtml(name);
	const pickedDayLabels = days
		.filter((d) => DAY_LABEL[d])
		.map((d) => DAY_LABEL[d]);

	const subject = yes
		? "You're in! / Du bist dabei! - Anna & Mike"
		: 'Thanks for letting us know / Danke für deine Antwort - Anna & Mike';

	const notes = [
		dietary && { en: `Dietary note: ${dietary}`, de: `Ernährung: ${dietary}` },
		song && { en: `Song request: ${song}`, de: `Songwunsch: ${song}` },
		message && { en: `Your message: "${message}"`, de: `Deine Nachricht: „${message}“` },
	].filter(Boolean);

	const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0; padding:0; background:#f8f4ed;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f4ed;">
<tr><td align="center" style="padding:2.5rem 1.25rem;">
<table role="presentation" width="100%" style="max-width:34rem; background:#f8f4ed;" cellpadding="0" cellspacing="0">

<tr><td style="text-align:center; padding-bottom:1.75rem;">
  <span style="font-family:Georgia,'Times New Roman',serif; font-size:1.6rem; color:#26251f;">Anna</span>
  <span style="font-family:Georgia,'Times New Roman',serif; font-style:italic; font-size:1.55rem; color:#b26340; padding:0 0.35em;">and</span>
  <span style="font-family:Georgia,'Times New Roman',serif; font-size:1.6rem; color:#26251f;">Mike</span>
</td></tr>

<tr><td style="border-top:1px solid #cfc7b5; padding-top:1.75rem;">

  <!-- English -->
  <p style="margin:0 0 0.35rem; font-family:Helvetica,Arial,sans-serif; font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; color:#7c7e66;">${yes ? 'RSVP received' : 'RSVP received'}</p>
  <h1 style="margin:0 0 1rem; font-family:Georgia,'Times New Roman',serif; font-weight:400; font-size:1.35rem; color:#26251f;">${yes ? `We can't wait, ${safeName}.` : `We'll miss you, ${safeName}.`}</h1>
  <p style="margin:0 0 1rem; font-family:Helvetica,Arial,sans-serif; font-size:0.98rem; line-height:1.65; color:#46453c;">
    ${yes
			? `Your RSVP is in - we've got you down for ${escapeHtml(formatDayList(pickedDayLabels, 'en')) || 'the weekend'}. Here's a reminder of where and when, so you can pencil it in.`
			: `Thank you for letting us know. We're sad you can't make it, but we're glad you told us - and we'll be raising a glass to you from Tuscany.`}
  </p>
  ${yes ? scheduleHtmlEn() : ''}
  <p style="margin:1.25rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.9rem; line-height:1.6; color:#46453c;">
    ${FACTS.dateLong.en} · ${FACTS.location.en}
  </p>
  ${notes.length ? `<p style="margin:1rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.9rem; line-height:1.6; color:#46453c;">${notes.map((n) => escapeHtml(n.en)).join('<br/>')}</p>` : ''}
  <p style="margin:1.25rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.85rem; line-height:1.6; color:#7c7e66;">
    Plans changed? Just fill in the RSVP again at <a href="${FACTS.siteUrl}/rsvp" style="color:#7c7e66;">${FACTS.siteUrl.replace('https://', '')}/rsvp</a> - it updates your answer.
  </p>

</td></tr>

<tr><td style="border-top:1px solid #cfc7b5; padding-top:1.75rem; margin-top:1.75rem;">

  <!-- German -->
  <p style="margin:0 0 0.35rem; font-family:Helvetica,Arial,sans-serif; font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; color:#7c7e66;">${yes ? 'Zusage erhalten' : 'Antwort erhalten'}</p>
  <h1 style="margin:0 0 1rem; font-family:Georgia,'Times New Roman',serif; font-weight:400; font-size:1.35rem; color:#26251f;">${yes ? `Wir freuen uns riesig, ${safeName}.` : `Wir werden dich vermissen, ${safeName}.`}</h1>
  <p style="margin:0 0 1rem; font-family:Helvetica,Arial,sans-serif; font-size:0.98rem; line-height:1.65; color:#46453c;">
    ${yes
			? `Deine Rückmeldung ist da - wir haben dich für ${escapeHtml(formatDayList(pickedDayLabels, 'de')) || 'das Wochenende'} eingetragen. Hier noch einmal alle Termine zur Erinnerung.`
			: `Danke, dass du uns Bescheid gibts. Schade, dass du nicht dabei sein kannst - wir stoßen trotzdem auf dich an.`}
  </p>
  ${yes ? scheduleHtmlDe() : ''}
  <p style="margin:1.25rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.9rem; line-height:1.6; color:#46453c;">
    ${FACTS.dateLong.de} · ${FACTS.location.de}
  </p>
  ${notes.length ? `<p style="margin:1rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.9rem; line-height:1.6; color:#46453c;">${notes.map((n) => escapeHtml(n.de)).join('<br/>')}</p>` : ''}
  <p style="margin:1.25rem 0 0; font-family:Helvetica,Arial,sans-serif; font-size:0.85rem; line-height:1.6; color:#7c7e66;">
    Etwas geändert? Einfach die Zusage unter <a href="${FACTS.siteUrl}/rsvp" style="color:#7c7e66;">${FACTS.siteUrl.replace('https://', '')}/rsvp</a> erneut ausfüllen - das aktualisiert deine Antwort.
  </p>

</td></tr>

<tr><td style="padding-top:2rem; text-align:center;">
  <p style="margin:0; font-family:Helvetica,Arial,sans-serif; font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase; color:#7c7e66;">Anna &amp; Mike · ${FACTS.dateLong.en}</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

	const text = buildText({ name, yes, pickedDayLabels, notes });

	return { subject, html, text };
}

function formatDayList(labels, lang) {
	return labels.map((l) => l[lang]).join(', ');
}

function scheduleRowsHtml(lang) {
	return SCHEDULE.map(
		(s) => `<tr>
      <td style="padding:0.5rem 0; font-family:Helvetica,Arial,sans-serif; font-size:0.88rem; color:#26251f; border-bottom:1px solid #efe9dd;"><strong>${escapeHtml(s.day[lang])}</strong><br/><span style="color:#46453c;">${escapeHtml(s.title[lang])}</span></td>
      <td style="padding:0.5rem 0; font-family:Helvetica,Arial,sans-serif; font-size:0.85rem; color:#46453c; text-align:right; border-bottom:1px solid #efe9dd;">${escapeHtml(s.time[lang])}<br/><span>${escapeHtml(s.place[lang])}</span></td>
    </tr>`,
	).join('');
}

function scheduleHtmlEn() {
	return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0.5rem 0 0;">${scheduleRowsHtml('en')}</table>`;
}

function scheduleHtmlDe() {
	return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0.5rem 0 0;">${scheduleRowsHtml('de')}</table>`;
}

function buildText({ name, yes, pickedDayLabels, notes }) {
	const lines = [];
	lines.push('ANNA and MIKE');
	lines.push('');
	lines.push(yes ? `We can't wait, ${name}.` : `We'll miss you, ${name}.`);
	lines.push(
		yes
			? `Your RSVP is in - we've got you down for ${formatDayList(pickedDayLabels, 'en') || 'the weekend'}.`
			: `Thank you for letting us know. We're sad you can't make it.`,
	);
	if (yes) {
		lines.push('');
		for (const s of SCHEDULE) lines.push(`${s.day.en} - ${s.title.en}, ${s.time.en}, ${s.place.en}`);
	}
	lines.push('');
	lines.push(`${FACTS.dateLong.en} · ${FACTS.location.en}`);
	if (notes.length) {
		lines.push('');
		for (const n of notes) lines.push(n.en);
	}
	lines.push('');
	lines.push(`Plans changed? Update your RSVP any time: ${FACTS.siteUrl}/rsvp`);
	lines.push('');
	lines.push('---');
	lines.push('');
	lines.push(yes ? `Wir freuen uns riesig, ${name}.` : `Wir werden dich vermissen, ${name}.`);
	lines.push(
		yes
			? `Deine Rückmeldung ist da - wir haben dich für ${formatDayList(pickedDayLabels, 'de') || 'das Wochenende'} eingetragen.`
			: `Danke, dass du uns Bescheid gibst. Schade, dass du nicht dabei sein kannst.`,
	);
	if (yes) {
		lines.push('');
		for (const s of SCHEDULE) lines.push(`${s.day.de} - ${s.title.de}, ${s.time.de}, ${s.place.de}`);
	}
	lines.push('');
	lines.push(`${FACTS.dateLong.de} · ${FACTS.location.de}`);
	if (notes.length) {
		lines.push('');
		for (const n of notes) lines.push(n.de);
	}
	lines.push('');
	lines.push(`Etwas geändert? Rückmeldung aktualisieren: ${FACTS.siteUrl}/rsvp`);
	return lines.join('\n');
}
