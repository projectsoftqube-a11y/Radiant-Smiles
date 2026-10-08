# Gum Disease Laser Therapy: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| laser gum treatment yardley | Primary | pending | pending | Title, Meta, H1, H2 "Ask About Laser Gum Treatment in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| laser gum treatment near me | Near-me | pending | pending | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| laser gum disease treatment | Long-tail | pending | pending | H2 "Benefits of Laser Gum Disease Treatment" | H2 "Benefits of Laser Gum Disease Treatment". |
| does laser gum treatment hurt | Question | pending | pending | H3 "Does laser gum treatment hurt?" | Exact question as the first FAQ. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Gum surgery and advanced periodontal treatment terms → `/restorative-dentistry/periodontal-services/`
- Deep cleaning terms → `/preventative-care/deep-teeth-cleaning/`
- Frenectomy (mentioned only as another laser use; not targeted)

## 2. Role of the page and local visibility

Owns "laser gum treatment yardley". It explains the procedure, the benefits listed on the current site (hedged with "often" and "many patients"), who is a candidate and recovery, and sends early-stage cases to deep cleaning. It is honest that not everyone needs a laser.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "Laser gum treatment uses a focused dental laser to remove infected gum tissue and clean the area around your teeth, without a scalpel or drill."
- "Laser gum treatment is usually comfortable, because the area is numbed first, and often a light anesthetic spray is all that's needed."
- "A deep cleaning removes tartar and bacteria from below the gumline and smooths the root surfaces."

**Checkable facts on the page:** Benefits from the current page (less bleeding and swelling, no drill noise or vibration, often only a light anesthetic spray, quicker recovery, laser light disinfects); pockets deeper than 3 mm; frenectomy as another laser use.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Dr. Urvishkumar Bhalala, Dr. Jaspreet Gadria, dental laser, gum disease, frenectomy, periodontal maintenance.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (44 to 51 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Benefits from the current laser page, each hedged. Not used: "much lower chance of gum disease returning" (no source), any laser brand, and osseous surgery and gum grafting (listed on the old page but not confirmed in-house). Removed an unsourced line about the laser sealing blood vessels. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. No laser brand named; no recurrence claim. |
| Internal links | 6 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: every comparison with traditional gum surgery removed (hero, benefits intro and bullets, Recovery section, FAQ, schema); the site's benefits are stated on their own (little bleeding, minimal swelling, quick recovery). Meta and WebPage description changed to "often with little bleeding or swelling". |
| Stats | words 781 | Flesch 67 | title 51 | meta 140 | H1 "Laser Gum Treatment in Yardley, PA" |

## 5. Information still needed from the practice

1. **Laser in-house:** confirm the dental laser is in use, and which procedures it's used for.
2. **Laser type or brand:** needed before naming it (not named on purpose).
3. **Osseous surgery and gum grafting:** the old page lists them as laser procedures. Are they done in-house? Left out until confirmed.
4. **Anesthesia:** is "often only a light anesthetic spray" accurate for this practice?

## Sources

- Site extracts: /preventative-care/gum-disease-laser-therapy/ (refetched), /restorative-dentistry/periodontal-services/treatment-methods/ (refetched)
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
