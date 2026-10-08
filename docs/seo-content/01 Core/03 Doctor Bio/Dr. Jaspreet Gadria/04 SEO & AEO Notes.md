# Dr. Jaspreet Gadria: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dr jaspreet gadria** (primary) | pending | pending | Title, meta, H1, first sentence, H2 "About Dr. Jaspreet Gadria", FAQ 1 | Name search before a visit. |
| dr gadria dentist yardley | pending | pending | H3 "Dr. Gadria, Your Dentist in Yardley" | Close variant. |
| Punjabi-speaking dentist (unverified idea) | n/a | n/a | Hero, H3 paragraph, FAQ 2 | Not targeted as a keyword, but stating the languages plainly makes the page eligible for "dentist who speaks Punjabi" answers in AI tools. Check volume when Semrush is topped up. |

**Kept off this page on purpose:** service and town terms; the three service links go to the hubs only.

## 2. Role of the page

The strongest E-E-A-T page on the site: two dental degrees (BDS, DMD with high honors), ADA and PDA membership, a stated clinical focus and languages. It supports the practice entity in Google's and AI tools' view and answers "who will treat me?" for patients, including Punjabi- and Hindi-speaking families.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "Dr. Jaspreet Gadria, DMD, is a dentist at Radiant Smiles @ Floral Vale in Yardley, PA, focused on general, cosmetic and restorative dentistry."
- "Dr. Gadria speaks English and Punjabi fluently, and she speaks some Hindi."

**Entities:** Person (same `@id` as on the homepage) with `alumniOf` Temple University Kornberg School of Dentistry, `hasCredential` DMD (high honors) and BDS, `memberOf` ADA and PDA, `knowsLanguage` English and Punjabi, `knowsAbout` her three focus areas; the practice; Amritsar, India.

**FAQ approach:** 3 questions (training, languages, kind of dentistry), 40–46 words each, answer first. Specific procedures (whitening, veneers) are attributed to the practice, not claimed as her personal work.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 46 / 154 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 490 words (brief: 400–600) |
| Readability | Flesch about 51 (long proper nouns: Kornberg, Pennsylvania Dental Association) |
| Banned words / claims | None. No years of experience or specialty titles. No em dashes. |
| Links | All in the live URL map |
| Schema | ProfilePage + Person + BreadcrumbList + FAQPage; parses and validates; FAQ text verbatim; name/description equal title/meta |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Fixed: "If Punjabi or Hindi is easier…" → "If Punjabi is easier…" (she speaks only some Hindi). Handoff FAQ note corrected to "Google stopped showing FAQ rich results on 7 May 2026." |

## 5. Information still needed from the practice

1. **Headshot [CONFIRM: required].** No photo on the current site.
2. **Years practicing / graduation years [CONFIRM].** Not published, so not stated.
3. Name of the dental college in Amritsar (for the BDS credential's `recognizedBy`).
4. Pennsylvania licence, continuing education and any areas of special interest within general, cosmetic and restorative care.
5. Is she happy for the page to invite Punjabi- and Hindi-speaking patients to mention their language preference when booking?

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`), Dentists section; current bio page /about-us/dr-jaspreet-gadria-dmd/ (crawled 7 Oct 2026).
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
