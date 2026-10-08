# Oral Hygiene: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| oral hygiene yardley | Primary | pending | pending | Title, H1, H2 "Oral Hygiene in Yardley: Help Between Visits", first 100 words | 3 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| oral hygiene tips | Long-tail | pending | pending | Meta, first 100 words | 2 exact or close-variant use(s). |
| how to brush teeth properly | Long-tail | pending | pending | not used verbatim | Covered by close variants; not forced. |
| flossing | Long-tail | pending | pending | Title | H2 "How to Floss" plus the step list. |
| oral hygiene | National (context) | 5,400 | 100 | Title, Meta, H1, H2 "Oral Hygiene in Yardley: Help Between Visits", H2 "Oral Hygiene FAQs", first 100 words | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- "oral hygiene" national head term (5.4K, KD 100): unwinnable, used only naturally
- Cleaning and checkup terms → `/preventative-care/teeth-cleaning-and-check-ups/`
- Children's habits and snacks → `/preventative-care/child-dentistry/`
- Gum disease treatment terms → the Gum Health pages

## 2. Role of the page and local visibility

An informational support page. It earns links and AI citations for brushing and flossing questions and passes visitors to the cleaning page and the children's page. It targets the low-competition local phrase "oral hygiene yardley"; the national term is KD 100 and isn't a target.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "Good oral hygiene comes down to three daily habits: brush twice a day, floss once a day and limit sugary and acidic foods."
- "Brush twice a day and floss once a day."
- "It can be normal for the first week after you start flossing, while your gums get used to it."

**Checkable facts on the page:** 45-degree brush angle; strokes for each surface; about 18 inches of floss; C-shape technique; possible bleeding in the first week of flossing; ADA Seal of Acceptance for rinses (all from the current oral-hygiene page).

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), American Dental Association Seal of Acceptance, fluoride toothpaste, electric toothbrush, gum disease.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 3 real patient questions, each answered in its first sentence (44 to 57 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Technique steps from the current oral-hygiene page. Left out on purpose: "adults over 35 lose more teeth to gum disease", "three out of four adults", "reduce tooth decay as much as 40%" (unsourced), the Rotadent and Interplak brand names (dated), and "fluoride toothpaste not recommended under six" (outdated advice). |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 3 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: unsourced diet-versus-brushing comparison changed to "What you eat, and how often, matters too." |
| Stats | words 829 | Flesch 83 | title 53 | meta 146 | H1 "Oral Hygiene in Yardley: Tips From Your Dentist" |

## 5. Information still needed from the practice

1. **Product recommendations:** does the practice recommend particular electric toothbrushes or rinses? None are named.
2. **Last reviewed date:** can the practice keep a "Last reviewed" date on this health-information page?

## Sources

- Site extracts: /preventative-care/oral-hygiene/, /preventative-care/child-dentistry/, /preventative-care/teeth-cleaning-and-check-ups/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
