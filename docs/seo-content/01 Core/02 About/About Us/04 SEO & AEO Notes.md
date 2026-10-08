# About Us: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **about radiant smiles yardley** (primary) | pending | pending | Title ("About Radiant Smiles @ Floral Vale \| Yardley, PA Dentist"), meta, H1 ("About Radiant Smiles @ Floral Vale in Yardley, PA"), hero ("about Radiant Smiles in Yardley"), H2 "About Radiant Smiles in Yardley at a Glance" | Branded, navigational. The page's job is to answer "who are they?" in one screen. |
| best dentist yardley | pending | pending | **Not used** | "Best" is an unprovable superlative and is banned for this project. Reviews, credentials and facts carry the "is this a good dentist?" question instead. |

**Kept off this page on purpose:** "dentist yardley pa" (homepage), "dental office yardley pa" (contact page), doctor-name searches (bio pages), technology terms (`/patient-information/care-and-comfort/advanced-technology/`).

## 2. Role of the page

The About page is the trust hub between the homepage and the people pages. It links to both dentist bios, Meet the Staff, the technology page and Contact, so authority flows to the E-E-A-T pages that AI tools and Google look at for a medical business. It deliberately repeats only the core facts (address, dentists, Saturday hours, payment) in a skimmable list rather than re-telling the homepage.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dental practice at 117 Floral Vale Boulevard in Yardley, PA, serving patients since 2009."
- "Two dentists, Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria, lead the care, with a team of hygienists and dental assistants."
- "Both of our dentists trained at Temple University's Kornberg School of Dentistry."

**Entities covered:** the practice, both dentists (school, degree), Temple University Kornberg School of Dentistry, Lower Makefield Township / Bucks County, dental microscopes, cone beam CT, iTero, languages (English, Punjabi, Hindi).

**Extractable structure:** the "At a Glance" list (where, who, when, languages, paying, urgent care) is built to be lifted whole.

**Schema:** AboutPage about `#dentist`, mentioning both Person `@id`s, so the entity graph connects practice → people.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 56 / 150 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 600 words (brief: 500–700) |
| Readability | Flesch about 58 |
| Banned words / claims | None. "Specialist" avoided (referrals described as "a provider we've vetted"). No em dashes. |
| Links | All in the live URL map |
| Schema | Parses; all types and properties valid against schema.org (schema-dts vocabulary); WebPage name/description equal title/meta |
| Uniqueness | Cross-page sentence check against the other Core pages: no duplicated sentences (the $89 line was reworded) |
| Independent fact-check (7 Oct 2026) | 2 findings (1 error, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Fixed: the made-up "what patients often notice first" sentence → "The short version about Radiant Smiles in Yardley: you hear what we found and what it costs before any treatment starts." (keeps the primary keyword in the hero; source: why-choose-us "transparent pricing"); metal-free line → "Tooth-colored, metal-free options are available for crowns, bridges and fillings." |

## 5. Information still needed from the practice

1. "Since 2009" [CONFIRM].
2. Current team: are Dr. Bhalala and Dr. Gadria the only dentists? (WebMD/AEDIT list others.)
3. Technology in-house [CONFIRM]: microscopes, cone beam CT, iTero.
4. Sedation options offered [CONFIRM].
5. Office and team photos (exterior, reception, treatment room).
6. Optional trust facts: founding story, community involvement, accessibility and parking.

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`): about-us, why-choose-us, doctor bios, contact page (crawled 7 Oct 2026).
- [Google: Creating helpful, reliable, people-first content (E-E-A-T)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
