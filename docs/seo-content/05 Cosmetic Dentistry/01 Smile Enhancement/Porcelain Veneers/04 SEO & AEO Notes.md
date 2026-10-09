# Porcelain Veneers: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **porcelain veneers yardley pa** (primary) | 10 | n/a | Title tag, meta description, H1, first sentence block, closing H2 "Plan Your Porcelain Veneers in Yardley, PA" | Not ranking today. This page now also absorbs `/porcelain-veneers/` (301), consolidating both URLs' signals. |
| veneers yardley pa | pending | pending | H2 "Getting Veneers in Yardley, PA: Step by Step" | One heading use. |
| veneers near me / porcelain veneers near me / dental veneers near me | 49,500 / 33,100 / 4,400 | 5 / 5 / 4 | **Not written as phrases** | Very low KD: the top cosmetic opportunity. Near-me ranking comes from proximity, GBP (add "Veneers" as a GBP service linking to this URL) and NAP; the page supports it with the Yardley H1, NAP and the `#dentist` entity. |
| cosmetic dentist for veneers | 9,900 | 21 | "Are Veneers Right for You?": "When you see a cosmetic dentist for veneers, the first job is checking…" | Used once, naturally. |
| how much are porcelain veneers | 2,400 | 18 | H2 "Porcelain Veneer Cost and Financing" + FAQ "How much are porcelain veneers?" | No price is published, so the answer explains what drives cost and the payment options. |
| how long do porcelain veneers last | 1,300 | 8 | H2 "How Long Do Porcelain Veneers Last?" + FAQ | "Well over a decade with proper care" (site wording). |
| how to care for porcelain veneers | 2,400 | 9 | H2 "Caring for Porcelain Veneers" + FAQ "How do I care for porcelain veneers?" | Care list consistent with ADA MouthHealthy guidance. |
| porcelain veneers / veneers | 27,100 / 301,000 | 40 / 64 | Natural mentions only | National context. |

**Kept off this page on purpose:** "dental bonding" (→ `/cosmetic-dentistry/dental-bonding/`; this page only compares), "teeth whitening" (→ whitening page), "cosmetic dentist yardley pa" (→ hub).

## 2. Role of the page

- **Owns veneers for Yardley** and replaces two old URLs: `/cosmetic-dentistry/dental-veneers-dentistry/` (kept) and `/cosmetic-dentistry/dental-veneers-dentistry/porcelain-veneers/` (301 here). One strong page instead of two thin ones.
- **Decision support.** The porcelain-vs-bonding table and the "Are Veneers Right for You?" checklist answer the two questions people ask before booking: is it worth it, and is there a cheaper option. Being honest that veneers are permanent builds trust (and matches ADA guidance).
- **Proof:** microscope-checked fit and finish (precision pillar), the Candice C. patient quote (plain text, no Review markup) beside it, and a link to the before-and-after gallery.
- **Conversion:** problem-first hero (conversion review, 7 Oct 2026); "Request a Veneer Consultation" in the hero, after "Are Veneers Right for You?" and in the final CTA; CareCredit and membership options in the cost section.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Porcelain veneers are thin shells of ceramic bonded to the front of your teeth to change their color, shape or size." (hero, second sentence; also the MedicalProcedure description)
- "With proper care, porcelain veneers can brighten your smile for well over a decade."
- "Placing porcelain veneers usually means removing a thin layer of enamel, so the treatment can't be reversed." (ADA MouthHealthy)
- "Veneers are usually placed on the top front six to eight teeth, the ones that show when you smile."

**Checkable facts:** 6-8 top front teeth; "well over a decade"; resists coffee, tea and cigarette stains; enamel check before treatment; single veneers can be replaced individually; bonding comparison (3-5 years).
**Entities:** Radiant Smiles @ Floral Vale, Dr. Jaspreet Gadria, Dr. Urvishkumar Bhalala, Yardley PA, porcelain veneers, dental bonding, CareCredit.
**NAP:** practice name and Yardley, PA in the first two sentences; full NAP in the final CTA.
**FAQ approach:** six questions mapped to the question keywords plus two decision questions (permanence, how many), 49-58 words each.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact-check | Veneer facts from `_refetched.md` (both veneer URLs). Added general clinical information only where ADA states it (enamel removal, multiple visits because porcelain veneers are lab-made, care habits), worded as general information. No price, no visit count, no temporaries promised. |
| Claims rules | No "best", "painless", "guaranteed", "specialist"; no "virtually undetectable" (old-site superlative dropped). |
| Title / meta length | 49 / 139 characters |
| Primary keyword placement | Title, meta, H1, first 100 words, one H2: all present |
| Length | 1,401 words (brief: 1,300-1,600) |
| Readability | Flesch about 73 |
| Internal links | 6 unique (bonding, whitening, night guards, gallery, CareCredit, scheduling), all in `url_map.md` |
| Schema validity | Both blocks parse; vocabulary and property check passed (MedicalWebPage, MedicalProcedure, BreadcrumbList, FAQPage) |
| Schema ↔ visible content | Title/meta exact; procedure description verbatim from the hero definition sentence; no `procedureType` (enamel is removed, so not non-invasive); 6 FAQs verbatim |
| Duplicate copy | None shared with the other 7 cosmetic pages |
| Independent fact-check (7 Oct 2026) | 2 findings (1 error, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Error: `procedureType: NoninvasiveProcedure` removed from the MedicalProcedure node. Warning: "check every edge" softened to "the fit and finish are checked under a high-power dental microscope" (fact sheet: microscopes used for fit and finish of restorations). |
| Conversion review (7 Oct 2026) | Applied: problem-first hero, shade/length/shape matching line, Candice C. quote by the microscope claim, mid-page consultation CTA, gallery link text no longer implies veneer photos, cost section states cost is given after consultation and before treatment, 15% membership discount and CareCredit terms. No derived net prices. |

## 5. Information still needed from the practice

1. **[CONFIRM veneer process]** Number of visits, whether temporary veneers are placed, and whether records are taken with the iTero scanner or impressions. The page says "more than one visit" and "precise records" until confirmed.
2. **[CONFIRM composite veneers]** The old site mentions resin-composite veneers too. Offered? If yes, add one short paragraph.
3. **[CONFIRM per-veneer price]** (conversion review ask) Any per-veneer price or range the practice is happy to publish? None is used now.
4. **[CONFIRM membership discount]** Does the 15% membership discount apply to veneers?
5. **[CONFIRM gallery]** Are there consented veneer before-and-after photos of this practice's patients for the gallery and this page?
6. **[CONFIRM sedation]** Not mentioned on this page; confirm options if the practice wants a comfort line.

## Sources

- Site: `/cosmetic-dentistry/dental-veneers-dentistry/` and `/porcelain-veneers/` (re-fetched 7 Oct 2026, `_refetched.md`); fact sheet
- [ADA MouthHealthy: Veneers](https://www.mouthhealthy.org/all-topics-a-z/veneers)
- [ADA MouthHealthy: Teeth Whitening](https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening) (veneers don't whiten)
