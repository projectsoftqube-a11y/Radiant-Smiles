# Children's Dentistry: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| childrens dentist yardley | Primary | pending | pending | Title, Meta, H1, H2 "Cleanings and Checkups With Our Children's Dentist in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| kids dentist near me | Near-me | 27,100 | 46 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| childrens dentist near me | Near-me | 18,100 | 50 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| pediatric dentist near me | Near-me | 90,500 | 42 | not used verbatim (on purpose) | Not targeted on purpose (implies a specialist). The FAQ "Is a children's dentist the same as a pediatric dentist?" answers the comparison honestly. |
| first dental visit for kids | Long-tail | pending | pending | not used verbatim | Covered by the H2 "Your Child's First Visit". |
| when should a child first see a dentist | Question | pending | pending | H3 "When should a child first see a dentist?" | Exact question as the first FAQ. |
| pediatric dentist | National (context) | 135,000 | 55 | H3 "Is a children's dentist the same as a pediatric dentist?" | Used once in the comparison FAQ only. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- "pediatric dentist" terms (90.5K near me, 135K national): not targeted, because the practice has no pediatric specialist. Used once as a comparison in an FAQ.
- Family dentist terms → `/family-dentistry/`
- Fluoride and sealant terms → their own pages (linked)

## 2. Role of the page and local visibility

Owns "childrens dentist yardley" and is the page for parents searching "kids dentist near me" (27.1K) and "childrens dentist near me" (18.1K). It answers the first question parents ask (when to start: just after the first birthday), explains the first visit, and handles the specialist question honestly, which protects the practice from implying a pediatric specialty. The family angle (same office for parents and kids, $75 per additional family member) is the differentiator.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A children's dentist checks and cleans your child's teeth, teaches healthy habits, and catches small problems before they hurt."
- "A child should first see a dentist just after their first birthday."
- "Not exactly. A pediatric dentist has completed extra specialty training in treating children."

**Checkable facts on the page:** First visit just after the first birthday; baby teeth from 6 to 8 months, all 20 by about two and a half, permanent teeth from ages 5 to 6; first-visit steps; Saturday 8 am to 2 pm; $75 per additional family member on the membership plan.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Dr. Bhalala, Dr. Gadria, fluoride treatment, dental sealants, family dentistry.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 5 real patient questions, each answered in its first sentence (42 to 53 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | First-visit steps, tooth-eruption ages and home tips from the current child-dentistry page. "Acid reactions last approximately 20 minutes" left out (unsourced figure). "You can stay with your child" removed (office policy not confirmed). Specialist wording checked: no implied pediatric specialty. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. "Pediatric dentist" appears only in the comparison FAQ. |
| Internal links | 6 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: hero family-membership bullet now shows the $150 first-member price with the $75 additional-member rate; diet-versus-brushing comparison changed to "matters too". |
| Stats | words 999 | Flesch 76 | title 52 | meta 142 | H1 "Children's Dentist in Yardley, PA" |

## 5. Information still needed from the practice

1. **Age range:** up to what age does the practice see children?
2. **Office preview:** can families visit before the first appointment? The current site suggests it.
3. **Parents in the room:** can parents stay with young children during treatment? Worth stating if yes.
4. **Children's pricing note** "(adults $65, children $60)" on the insurance page: is there a separate child price?

## Sources

- Site extracts: /preventative-care/child-dentistry/, /family-dentistry/, /patient-information/insurance-payment-options/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
