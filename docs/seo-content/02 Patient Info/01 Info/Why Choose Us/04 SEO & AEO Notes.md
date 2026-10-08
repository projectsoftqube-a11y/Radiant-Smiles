# Why Choose Us: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **best dentist yardley** (primary per brief) | pending | pending | **Not written.** Targeted as "Yardley dentists" in the title, meta, H1, first sentence and H2 "Two Yardley Dentists Under One Roof" | The copy rules ban "best" (an unprovable superlative, and a YMYL trust risk). Google reads "best X" queries as "help me compare X", so the page answers that intent with comparable facts: two Temple-trained dentists, microscopes, Saturday hours, prices before treatment, real reviews. |
| yardley dentists / yardley dentist | n/a | n/a | Title, meta, H1, H2, FAQ | Natural carrier for the primary's intent. |
| radiant smiles (brand) | n/a | n/a | Hero, FAQs, final CTA | Brand + place. |

**Kept off this page on purpose:** doctor-name searches belong to the two bio pages (linked from About); reviews searches belong to `/patient-reviews/`; technology terms (CBCT, iTero) to Advanced Technology.

## 2. Role of the page

A decision page for people comparing Yardley practices. It uses the fact sheet's three pillars in order (precision, access, affordability) plus comfort, and puts proof right next to each claim: the crowns review next to "precision", the office hours next to "access", real prices next to "affordability". It links to About, Patient Reviews, Advanced Technology, Care & Comfort and Insurance so a reader can verify each point.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Patients choose Radiant Smiles @ Floral Vale for personalized, gentle and comprehensive care from two Temple-trained Yardley dentists."
- "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, both graduated from Temple University's Kornberg School of Dentistry."
- "If you need treatment we don't provide, we refer you to a provider we have vetted."

Checkable facts: both doctors' degrees and school, Dr. Gadria's honors, memberships (PDA, ADA) and languages, microscopes, CBCT, iTero, hours (Wed/Thu to 6 pm, Sat 8–2), $89, $150 and 15%, named carriers, dated reviews with names.

Entities: both dentists, Temple University Kornberg School of Dentistry, Pennsylvania Dental Association, American Dental Association, iTero, CareCredit.

FAQs: three, 43–49 words each, starting with direct answers.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Doctor facts from the bio extracts and fact sheet (pronouns as used on the bio pages). "State-of-the-art" from the old page replaced with named equipment. Old "in-network with various insurance plans" replaced with "we accept many PPO plans". Removed an unsupported draft FAQ ("see the same dentist every visit"). Reviews quoted verbatim from the fact sheet; no star rating shown. |
| Banned words / em dashes | None found (script check). "Best" deliberately absent. |
| Internal links | 6 unique internal URLs, all in the live URL map. |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList and FAQPage exist in schema.org. No Review/AggregateRating markup. |
| Schema ↔ visible content | Name/description equal title/meta; 3 FAQs match word for word (script check). |
| Stats | words 677 (brief 500–700) · Flesch 56 · title 48 · meta 146 · H1 "Why Patients Choose Our Yardley Dentists" |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Dr. Bhalala: "worked at several practices, here and in India" → "worked at several practices before starting his own, and brings skills gained in the US and in India" (matches the bio extract). Reviewer names shortened to first name plus last initial (Candice C., Avni D., Bob M.) to match Home and Reviews; handoff rule updated. |

## 5. Information still needed from the practice

1. **Reviews:** permission to display the three named quotes, and the source of the "4.14 out of 5 from 50 reviews" widget (not used).
2. **Degree:** WebMD lists Dr. Bhalala as DDS; the site says DMD (copy uses DMD).
3. **Sedation:** which options are offered (copy says only "ask about sedation options").
4. **Technology in-house:** microscopes, CBCT, iTero (named because the current site names them).
5. **"Extended office hours on select days":** copy reads this as Wednesday and Thursday until 6 pm. Confirm.
6. **Appointment reminders:** by text, email or call? (Copy just says "reminders".)
7. **Tuesday hours** (affects "open six days").

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (dentists, technology, offers, reviews, pillars)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/why-choose-us/`, `/about-us/dr-urvishkumar-bhalala/`, `/about-us/dr-jaspreet-gadria-dmd/`, `/patient-reviews/`
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
