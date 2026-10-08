# Scheduling: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dentist appointment yardley** (primary) | pending | pending | Written as "dentist appointment in Yardley": title, meta, H1, first sentence, H2 "Request a Dentist Appointment in Yardley" | Natural phrasing. |
| same day dentist appointment | pending | pending | H2 "Same-Day Dentist Appointments for Emergencies", FAQ "Can I get a same-day dentist appointment?" | Hyphenated form is the correct spelling and matches the query. Hedged: "every attempt is made", "in most cases". |

**Kept off this page on purpose:** "emergency dentist yardley" and related terms → `/emergency-dentistry/` (one short section and a link here); "accepting new patients" → New Patients.

## 2. Role of the page

The site-wide conversion target: every "Request an Appointment" button points here. It is kept short (brief: 300–500 words) so the form is reached fast. The page sets honest expectations: the form is a request, not a confirmed booking, and urgent cases should call. The full hours table lives here, which supports "open Saturday" and evening searches. A cancellation policy section was in the brief, but the current site publishes no policy, so it is left out until the practice supplies one.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Same-day dentist appointments are available for emergencies."
- "Not yet. The online form is a request." (form FAQ)
- "We keep openings in the schedule every business day for toothaches, oral infections and cracked or broken teeth."

Extractable structures: the hours table, the form field list.

Checkable facts: full weekly hours, Saturday 8–2, Wednesday/Thursday to 6 pm, same-day emergency openings every business day, 30-minute limited emergency exam, appointment reminders.

FAQs: two, 43–47 words.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Hours from the fact sheet; scheduling policy wording ("as promptly as possible", "every attempt will be made to see you that day", "stay on schedule") from the old scheduling page; emergency facts from the fact sheet. No response-time promise for the form (not confirmed). |
| Banned words / em dashes | None found (script check). The old phrase "we try our best" was reworded. |
| Internal links | 4 unique internal URLs, all in the live URL map. |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList and FAQPage exist in schema.org. Hours are not repeated in schema here (they live in the homepage Dentist node). |
| Schema ↔ visible content | Name/description equal title/meta; 2 FAQs match word for word (script check). |
| Stats | words about 535 after the QA pass (was 531) incl. the form field spec (brief 300–500) · Flesch 65 · title 45 · meta 141 · H1 "Schedule a Dentist Appointment in Yardley" |
| Independent fact-check (7 Oct 2026) | 1 finding (1 error, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Form privacy line "We only use your details to arrange your appointment." (conflicts with the published privacy policy) → "See our Privacy Policy" linking `/patient-information/terms/privacy/`. Also aligned with the no-online-registration decision: thank-you and new-patient links now read "how to get your patient forms" / "get your patient forms". |

## 5. Information still needed from the practice

1. **Tuesday closing time.** The site prints "8:00 AM - 5:00 AM". The table shows 5:00 pm with a visible [CONFIRM] note that must be resolved before launch.
2. **Cancellation / missed-appointment policy** wording, if the practice wants one shown.
3. **Form destination** inbox and how quickly the team replies (a reply-time line can be added under the button once confirmed).
4. **Online booking:** does the practice use a booking system (e.g. one that shows live openings)? If yes, it can replace or sit beside the request form.
5. **Texting:** does (215) 860-4600 accept texts? (No `sms:` link until confirmed.)
6. **Reminder channel:** text, email or phone?
7. **Privacy [CONFIRM].** Are website form submissions used for marketing, as the current privacy policy allows? The form now links the Privacy Policy instead of promising limited use.

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (hours, emergency care)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/scheduling/`, `/emergency-dentistry/`, `/patient-information/why-choose-us/` (reminders)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
