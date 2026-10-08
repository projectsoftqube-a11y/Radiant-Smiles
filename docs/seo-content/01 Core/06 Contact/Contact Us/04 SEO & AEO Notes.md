# Contact Us: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dental office yardley pa** (primary) | pending | pending | Title, meta, H1 "Contact Our Dental Office in Yardley, PA", first sentence, closing H2 "Call Our Dental Office in Yardley, PA" | "Dental office" is distinct from the homepage's "dentist", so the two pages don't compete. |
| dentist near me open late | 140 | 27 | Meta ("until 6 pm Wed and Thu") and the hours section ("Need a visit after work? We're open until 6 pm on Wednesday and Thursday…") | Not written as a phrase. The practice closes at 6 pm at the latest, so the page states the real times rather than claiming "open late". Saturday is the stronger hook. |
| dentist floral vale yardley | pending | pending | H3 "Finding Our Floral Vale Dentist Office in Yardley" | Close variant. |

**Kept off this page on purpose:** "dentist yardley pa" (homepage), town terms (location pages).

## 2. How this page supports local visibility

1. **NAP in plain text** at the top, identical to the footer, homepage and Google Business Profile.
2. **Hours table** that must match the GBP (fix Tuesday first). Mismatched hours are a common reason Google or AI tools show wrong opening times.
3. **Directions with real routes** from Yardley Borough, Morrisville, Trenton, Ewing and Washington Crossing (fact-sheet drive table, Google Maps estimates, "depending on traffic"). These are the same towns the location pages target, so the contact page reinforces the service area.
4. **Map embed + directions button**, both trackable as local conversions.
5. **Short Dentist node** in the schema (same `@id` as the homepage) with NAP, hours and a ContactPoint, so the contact page alone also states the business facts machine-readably.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a dental office in Yardley, PA, at 117 Floral Vale Boulevard."
- "We're open until 6 pm on Wednesday and Thursday, and from 8 am to 2 pm on Saturday."
- "The office is on Floral Vale Boulevard in Lower Makefield Township, Bucks County, with a Yardley address."

**Entities:** the practice, NAP, Lower Makefield Township, Bucks County, US-1, the Trenton-Morrisville Toll Bridge, the Calhoun Street Bridge, I-295 and the Scudder Falls Bridge, PA-32 (River Road).

**Form copy** includes the "Please don't include medical details" note and a thank-you state that redirects urgent cases to the phone. No reply time is promised.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 57 / 135 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 510 words including the form spec and two tables (brief: 200–400). Visible prose is about 300 words. |
| Readability | Flesch about 62 |
| Banned words / claims | None. No "open late", 24/7 or Sunday claims. No reply-time promise. No em dashes. |
| Links | All in the live URL map |
| Independent fact-check (7 Oct 2026) | 3 findings (2 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Fixed: form privacy line now links the Privacy Policy instead of promising limited use; ContactPoint `availableLanguage` reduced to English. Drive times kept (fact-sheet Google Maps estimates, "depending on traffic"); a dated Google Maps check is now required in the handoff and listed in section 5. |
| Schema | ContactPage + Dentist (short, same `@id`) + ContactPoint + BreadcrumbList; parses and validates; hours equal the visible table |

## 5. Information still needed from the practice

1. **Tuesday hours [CONFIRM].** Site prints "8:00 AM - 5:00 AM"; copy and schema use 8:00 am – 5:00 pm.
2. **Parking and wheelchair access details [CONFIRM].** Nothing is published; the page invites patients to call.
3. **Form processor [CONFIRM].** Which HIPAA-appropriate form tool will receive requests, and who replies?
4. **Response time.** If the practice commits to one (e.g. "within one business day"), add it under the form.
5. **Drive times.** Re-check each route in Google Maps before launch and record the check date in the handoff (fact-check WARN, 7 Oct 2026).
8. **Privacy [CONFIRM].** Are website form submissions used for marketing, as the current privacy policy allows? The form now just links the Privacy Policy; a narrower promise can be added only if the policy is updated to match.
9. **Punjabi by phone [CONFIRM].** Can the front desk take calls in Punjabi, or only Dr. Gadria in the chair? If the desk can, add "Punjabi" to `availableLanguage`.
6. Google Business Profile place ID for the map embed and schema `hasMap`.
7. Does the phone accept texts? If yes, add a text option.

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`): Practice and NAP, Office hours, Drive times; current /contact-us/ page (crawled 7 Oct 2026).
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
