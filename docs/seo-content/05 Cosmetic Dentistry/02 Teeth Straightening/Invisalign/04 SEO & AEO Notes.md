# Invisalign: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **invisalign yardley pa** (primary) | 10 | n/a | Title tag, meta ("Invisalign clear aligners in Yardley, PA"), H1, first 100 words ("Invisalign in Yardley, PA starts with a free consultation…"), closing H2 "Start Invisalign in Yardley, PA" | Currently #14 (new entry). |
| invisalign near me | 110,000 | 45 | **Not written as a phrase** | Supported by NAP, Yardley in H1/title and a GBP service entry. |
| clear aligners near me | 18,100 | 4 | **Not written as a phrase**; "clear aligners" in H1 and body | KD 4. "Clear aligners" in the H1 helps the generic version. |
| invisalign for adults | pending | pending | H2 "Who Invisalign Is For": "Invisalign for adults lets you straighten your teeth…" + FAQ "Can adults get Invisalign?" | |
| invisalign vs braces | pending | pending | H2 "Invisalign vs Braces" (table) + FAQ "Is Invisalign better than braces?" | Table carries the content of the merged "advantages" page. |
| how long does invisalign take | pending | pending | H2 "How Long Does Invisalign Take?" + FAQ | "About one year" for adults (site). |
| invisalign / clear aligners | 450,000 / 40,500 | 63 / 58 | Natural mentions | National context. |

**Kept off this page on purpose:** "invisalign cost" and "invisalign payment plans" (→ `/invisalign/invisalign-cost/`, linked from the cost section), "invisalign teen" (→ teen page), "invisalign trenton nj" (→ conditional service+location page; not linked from here per the URL map rule).

## 2. Role of the page

- **Consolidates four URLs:** this page absorbs `/invisalign-information/`, `/advantages-of-invisalign/` and `/invisalign-videos/` (301s in the handoff). Their content is merged here: process, 3D planning, benefits vs braces, wear rules, sports.
- **Offer-led:** "$1,000 off the regular $5,800" plus "free consultation and second opinion" in the title, meta, hero, cost section and final CTA. The "second opinion" angle is a genuine differentiator for people who already have a quote.
- **Precision pillar:** detailed records (photos, X-rays and a scan or impressions) and Invisalign's 3D planning preview (supported by `cosmetic-dentistry__invisalign__advantages-of-invisalign.md`: "Advanced 3D imaging computer technology" previews treatment phases and final results).
- **Proof:** Avni D. patient quote (plain text, no Review markup) beside the mid-page consultation button (conversion review).
- **Three CTAs:** hero, after the cost section, final.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Invisalign straightens teeth with a series of clear, removable aligners made from BPA-free plastic instead of metal brackets and wires." (MedicalProcedure description)
- "For adults, Invisalign usually takes about one year."
- "You wear Invisalign aligners 20 to 22 hours a day."
- "Invisalign at our Yardley office is currently $1,000 off the regular price of $5,800, and the consultation and second opinion are free."

**Checkable facts:** 20-22 hours/day; new aligners about every 2 weeks; check-ups about every 6 weeks; about 1 year for adults; records from photos, X-rays and a scan or impressions; BPA-free plastic; offer and regular price; FSA; CareCredit terms.
**Entities:** Radiant Smiles @ Floral Vale, Yardley PA, Invisalign, Invisalign Teen, CareCredit.
**FAQ approach:** six questions (48-54 words), including "What records are taken for Invisalign?" (wording kept neutral on scan vs impressions until the practice confirms).

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact-check | Process, timings and benefits from the four Invisalign extracts; offer from `/special-offers/`. Left out: "more than one million patients" (unsourced and out of date), "same cost as traditional braces" and "insurance up to $3,500" (unconfirmed). Rewritten: "most common route…", "a popular choice…" and "the most common reason treatment runs longer" (unverifiable claims). |
| Claims rules | No "orthodontist", "specialist", "certified" or provider-tier wording. Invisalign named as on the current site. |
| Title / meta length | 55 / 138 characters |
| Primary keyword placement | Title, meta, H1, first 100 words, one H2: all present |
| Length | 1,228 words (brief: 1,200-1,500) |
| Readability | Flesch about 70 |
| Internal links | 5 unique (teen, cost, technology, special offers, scheduling), all in `url_map.md` |
| Schema validity | Both blocks parse; vocabulary and property check passed |
| Schema ↔ visible content | Title/meta exact; procedure description verbatim; 6 FAQs verbatim |
| Duplicate copy | CareCredit line differs from the teen page; no shared sentences |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. The iTero-for-Invisalign claim (hero, meta, scan section, FAQ, schema) is replaced with "photos, X-rays and a scan or impressions", the same wording on every Invisalign page; scanner use moved to section 5. |
| Conversion review (7 Oct 2026) | Applied: "virtually invisible" x3 replaced with "clear plastic, no brackets or wires"; check-up timing now "about every six weeks" only (site: "every six weeks or so"); Avni D. quote beside the mid-page CTA. Kept, supported by the site extract: "BPA-free plastic" (`cosmetic-dentistry__invisalign.md`, `__invisalign-information.md`) and the 3D planning preview (`__advantages-of-invisalign.md`). No derived net price. |

## 5. Information still needed from the practice

1. **[CONFIRM certified provider]** Is the practice a current Invisalign provider (and which dentist)? The page uses the trademark because the current site does; confirm before launch. Don't add provider badges or tiers until confirmed.
2. **[CONFIRM offer terms]** $1,000 off (regular $5,800) with free consultation and second opinion: expiry, eligibility, and whether the $5,800 covers retainers and refinements.
3. **[CONFIRM monthly payment options]** In-house payment plan, or CareCredit only?
4. **[CONFIRM videos page]** `/cosmetic-dentistry/invisalign/invisalign-videos/` was not in the crawl. Does it exist? Any videos the practice owns?
5. **[CONFIRM iTero for Invisalign]** Are Invisalign records taken with the iTero scanner instead of impressions? If yes, switch "a scan or impressions" to the scan wording on all six Invisalign pages (Invisalign, Cost, Teen, Trenton, LP, cosmetic hub) in one commit, and the FAQ may say no impression material is needed.
6. **[CONFIRM retainers]** What happens after treatment (retainers, cost)? A short section would answer a common question.

## Sources

- Site: `/cosmetic-dentistry/invisalign/`, `/invisalign-information/`, `/advantages-of-invisalign/`, `/special-offers/` (crawled 7 Oct 2026); fact sheet (technology: iTero)
