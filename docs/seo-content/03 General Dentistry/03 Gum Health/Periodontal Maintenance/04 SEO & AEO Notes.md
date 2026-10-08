# Periodontal Maintenance: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| periodontal maintenance yardley | Primary | pending | pending | Title, Meta, H1, H2 "Periodontal Maintenance in Yardley: Cost and Insurance", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| periodontal maintenance near me | Near-me | 110 | 3 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| perio maintenance | Long-tail | pending | pending | first 100 words | 2 exact or close-variant use(s). |
| periodontal maintenance | National (context) | 6,600 | 10 | Title, Meta, H1, H2 "What Periodontal Maintenance Is", H2 "Who Needs Periodontal Maintenance", H2 "How Often You'll Need Periodontal Maintenance" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Gum surgery and advanced periodontal treatment terms → `/restorative-dentistry/periodontal-services/`
- Deep cleaning terms → `/preventative-care/deep-teeth-cleaning/`
- Regular cleaning terms → `/preventative-care/teeth-cleaning-and-check-ups/`

## 2. Role of the page and local visibility

Owns "periodontal maintenance yardley" and the near-me variant (110, KD 3). Its differentiator is a real price: membership plan members pay $75 per periodontal maintenance visit. It completes the gum-health path (deep cleaning → maintenance) and links back to deep cleaning, Arestin and periodontal services.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "Periodontal maintenance is a deeper, ongoing cleaning for people who have been treated for gum disease."
- "Periodontal maintenance is an ongoing cleaning for people who have been treated for gum disease."
- "The dentist sets the interval based on your gum measurements and how your gums respond to treatment."

**Checkable facts on the page:** $75 per periodontal maintenance visit for membership plan members; $150/yr membership; gum disease risk factors and "plaque is the main cause" from the current page.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), periodontal maintenance (perio maintenance), scaling and root planing, Arestin, gum disease.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (45 to 48 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Definition and risk factors from the current periodontal maintenance page; $75 from the membership plan on the insurance page. The page gives no fixed interval (the current site gives none): it says the dentist sets it and that it's often shorter than six months. Removed "adults over 35 lose more teeth" and "three of four adults" (unsourced). |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 6 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: meta, WebPage description, FAQ and schema now say $75 per additional visit for members, matching the site's "Additional cleanings/periodontal maintenance: $75.00". |
| Stats | words 856 | Flesch 64 | title 55 | meta 145 | H1 "Periodontal Maintenance in Yardley, PA" |

## 5. Information still needed from the practice

1. **Interval:** what recall interval does the practice usually use (for example every 3 or 4 months)? Adding it would strengthen the page.
2. **Price for non-members:** is there a published fee for patients outside the membership plan?
3. **Perio maintenance pricing:** can periodontal maintenance use the 2 cleanings included in the $150 membership, or is every perio maintenance visit $75? Copy says $75 per additional visit.

## Sources

- Site extracts: /preventative-care/periodontal-maintenance/ (refetched), /patient-information/insurance-payment-options/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
