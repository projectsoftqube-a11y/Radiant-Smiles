# Family Dentistry: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| family dentist yardley pa | Primary | pending | pending | Title, Meta, H1, H2 "A Family Dentist in Yardley, PA for Every Age", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| family dentist near me | Near-me | 49,500 | 50 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| general dentist near me | Near-me | 12,100 | 56 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| family dentistry | Long-tail | pending | pending | H2 "Family Dentistry FAQs" | 3 exact or close-variant use(s). |
| family dentist accepting new patients | Long-tail | pending | pending | not used verbatim | Covered by "New patients are welcome" in the hero and the FAQ "Are you accepting new patients?". |
| what is general dentistry | Question | pending | pending | H2 "What Is General Dentistry?" | Exact question as an H2 with an answer-first paragraph. |
| general dentistry | National (context) | 12,100 | 59 | H2 "What Is General Dentistry?" | Answered in the H2 "What Is General Dentistry?" so the page covers the intent of the merged /general-dentistry/ URL. |
| family dentist | National (context) | 18,100 | 37 | Title, Meta, H1, H2 "A Family Dentist in Yardley, PA for Every Age", H2 "Meet Your Family Dentists", H3 "What is the difference between a family dentist and a general dentist?" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Preventive care hub terms (preventive dentistry yardley) → `/preventative-care/`
- Children's dentist and pediatric terms → `/preventative-care/child-dentistry/`
- Cleaning and checkup terms → `/preventative-care/teeth-cleaning-and-check-ups/`
- Restorative, cosmetic and emergency service terms → their own pages (linked, not targeted)
- Homepage head term (dentist yardley pa) → `/`

## 2. Role of the page and local visibility

Owns "family dentist yardley pa" (currently #14) and absorbs the old `/general-dentistry/` page with a 301, ending the split between two URLs competing for the same terms. The angle is one office for every age: toddlers to grandparents, with Saturday hours, the $75 additional-family-member membership price and both dentists' credentials as the proof. It links down to the preventive, children's, restorative, cosmetic and emergency pages so it works as the general-dentistry entry point. Near-me terms (family dentist near me 49.5K, general dentist near me 12.1K) are supported by Yardley in the title, H1 and NAP rather than forced phrases.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A family dentist looks after everyone in your household, from a toddler's first checkup to a grandparent's dentures, in one office."
- "Yes, new patients are welcome at Radiant Smiles @ Floral Vale in Yardley, PA."
- "A family dentist is a general dentist who sees patients of every age."

**Checkable facts on the page:** Both dentists' DMD degrees from Temple University's Kornberg School of Dentistry; Dr. Gadria's PDA and ADA memberships and languages; first child visit after the first birthday; $150/yr membership and $75 per additional family member; $89 new patient visit; Saturday 8 am to 2 pm; same-day emergency slots every business day.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Dr. Urvishkumar Bhalala, DMD, Dr. Jaspreet Gadria, DMD, Temple University Kornberg School of Dentistry, Pennsylvania Dental Association, American Dental Association, Yardley PA.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 5 real patient questions, each answered in its first sentence (40 to 46 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Services listed are those on the current family-dentistry and general-dentistry pages and the fact sheet. "Mercury-free" and "metal-free" kept to "tooth-colored fillings and crowns, with metal-free options". Implants written as "dental implants" without saying placed in-house. Family booking written as a request ("ask about booking them close together"), not a promise. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 14 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: "accepting new patients" softened to "New patients welcome" in the meta, hero, FAQ answer and schema ("of all ages" dropped); handoff section name corrected to "A Family Dentist in Yardley, PA for Every Age". |
| Stats | words 1029 | Flesch 63 | title 46 | meta 141 | H1 "Family Dentist in Yardley, PA" |

## 5. Information still needed from the practice

1. **Dr. Bhalala's degree:** the site says DMD; WebMD lists DDS.
2. **Implant placement:** are implants placed in-house or referred? (Copy only says the practice provides dental implants.)
3. **Invisalign:** is the practice a certified Invisalign provider? The page names Invisalign and Invisalign Teen because the current site does.
4. **Family scheduling:** can the office book several family members back to back? The copy only invites patients to ask.
5. **Membership plan:** confirm "$150 for the first person, $75 for each additional family member" is the right reading of the insurance page.
6. **New patients:** confirm the practice is accepting new patients. Copy says "New patients welcome" (supported by the new-patients page and the $89 New Patient Special). Once confirmed, the hero and FAQ can say "accepting new patients" again.

## Sources

- Site extracts: /family-dentistry/, /general-dentistry/, /about-us/dr-urvishkumar-bhalala/, /about-us/dr-jaspreet-gadria-dmd/, /patient-information/insurance-payment-options/, /special-offers/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
