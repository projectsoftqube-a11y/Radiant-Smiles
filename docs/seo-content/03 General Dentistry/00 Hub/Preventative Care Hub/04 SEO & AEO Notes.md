# Preventive Care: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| preventive dentistry yardley | Primary | pending | pending | Title, Meta, H1, H2 "Preventive Dentistry in Yardley at a Glance", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| preventive dental care | Long-tail | pending | pending | body | 1 exact or close-variant use(s). |
| dental cleaning and exam | Long-tail | pending | pending | body | 1 exact or close-variant use(s). |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Teeth cleaning and checkup terms (dental cleaning yardley, teeth cleaning near me) → `/preventative-care/teeth-cleaning-and-check-ups/`
- Family and general dentist terms → `/family-dentistry/`
- Children's dentist terms → `/preventative-care/child-dentistry/`
- Emergency terms → `/emergency-dentistry/`
- Each service's own terms (sealants, fluoride, deep cleaning, night guard) → that service page

## 2. Role of the page and local visibility

The hub for the 9 preventive pages under `/preventative-care/`. It owns "preventive dentistry yardley" and passes authority to each child page through the at-a-glance table, the section links and the "Not sure what you need?" table, which also links across to Family Dentistry and Emergency Dentistry. It answers the two first questions a preventive-care visitor has (what's included, what it costs) with real prices: the $89 new patient visit and the $150 membership plan. Local signals: "Yardley" in the title, H1 and opening; NAP in the final CTA; Saturday hours in the hero.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "Preventive dentistry is the routine care that finds small problems early and keeps them small: checkups, cleanings, X-rays, fluoride, sealants and gum care."
- "Preventive dentistry is routine care that stops dental problems before they start or catches them early."
- "Twice a year is the routine we recommend for most patients."

**Checkable facts on the page:** $89 new patient visit (cleaning, X-rays, exam, uninsured); $150/yr membership plan with 2 cleanings, exams, X-rays and 15% off ($75 per additional family member); visit length about an hour; first child visit just after the first birthday; oral cancer screening at every checkup; Saturday 8 am to 2 pm; named PPO carriers; CareCredit.

**Entities:** Radiant Smiles @ Floral Vale (Dentist, `#dentist`), Dr. Urvishkumar Bhalala, Dr. Jaspreet Gadria, Yardley PA, and each preventive service as a named, linked page (ItemList).

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (43 to 49 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Every statement traced to the fact sheet or site extracts (preventative-care, teeth-cleaning-and-check-ups, dental-exam, perio maintenance and night-guard pages). Microscope wording kept to "so your dentist can see fine detail" (the site says microscopes are used for precise restorations). Gum disease risk factors are from the current periodontal maintenance page. Old-site statistics ("adults over 35", "three out of four adults") left out. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 17 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: the microscope sentence was removed from the Checkups section (the site ties microscopes to restorations only); the link to the cleaning page stays. |
| Stats | words 1145 | Flesch 68 | title 52 | meta 144 | H1 "Preventive Dentistry in Yardley, PA" |

## 5. Information still needed from the practice

1. **Tuesday hours** are not shown on this page, but the site-wide hours block needs the fix (current site prints "8:00 AM - 5:00 AM").
2. **$89 new patient visit:** any expiry date or conditions beyond "for uninsured patients"?
3. **Membership plan:** confirm $150 a year, $75 per additional family member, and what "(adults $65, children $60)" on the insurance page means.
4. **Dental microscopes and dental laser:** confirm both are in use in the office today.
5. **Insurance carriers named** (Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife, UnitedHealthcare): all are on the current insurance page; confirm the practice is happy to feature them.

## Sources

- Site extracts: /preventative-care/, /preventative-care/teeth-cleaning-and-check-ups/, /preventative-care/dental-exam/, /preventative-care/periodontal-maintenance/, /special-offers/, /patient-information/insurance-payment-options/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
