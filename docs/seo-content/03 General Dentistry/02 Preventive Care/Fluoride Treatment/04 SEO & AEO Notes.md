# Fluoride Treatment: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| fluoride treatment yardley | Primary | pending | pending | Title, Meta, H1, H2 "Who Benefits From Fluoride Treatment in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| fluoride treatment near me | Near-me | pending | pending | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| is fluoride treatment necessary | Question | pending | pending | H2 "Is Fluoride Treatment Necessary?", H3 "Is fluoride treatment necessary?" | 2 exact or close-variant use(s). |
| fluoride treatment | National (context) | pending | pending | Title, Meta, H1, H2 "Who Benefits From Fluoride Treatment in Yardley", H2 "Is Fluoride Treatment Necessary?", H2 "Fluoride Treatment Cost and Insurance" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Children's dentist terms → `/preventative-care/child-dentistry/`
- Sealant terms → `/preventative-care/dental-sealants/`
- Toothpaste and brushing advice terms → `/preventative-care/oral-hygiene/`

## 2. Role of the page and local visibility

Owns "fluoride treatment yardley" and answers the main researcher question, "is fluoride treatment necessary?", honestly: not for everyone, and recommended by risk. It supports the children's dentistry and sealant pages and links to both. Local signals: Yardley in the title, H1 and opening; NAP in the final CTA.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A professional fluoride treatment is a high-concentration fluoride applied directly to your teeth to strengthen the enamel and help it resist decay."
- "Not for everyone. Fluoride treatment is most useful for people at higher risk of cavities: children with newly erupted permanent teeth, adults who get cavities often, and anyone with dry mouth or gum recession."
- "A professional fluoride treatment takes just a few minutes."

**Checkable facts on the page:** Takes a few minutes; high-concentration fluoride applied directly to the teeth; stronger than over-the-counter products; the five at-risk groups listed on the current site (new permanent teeth, frequent cavities, gum recession, health issues affecting saliva, dry mouth).

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), fluoride, remineralization, calcium and phosphate, xerostomia, dental sealants.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (42 to 51 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Mechanism ("acts like a magnet", remineralization, harder crystal) and the at-risk groups come from the current fluoride page. "Completely painless" replaced with "no drilling or numbing". The old oral-hygiene line that fluoride toothpaste isn't recommended under age six was not used (it's outdated); the page says "ask us how much toothpaste to use" instead. Safety section kept to how the office applies it, with no statistics. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 5 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: the efficacy comparison was replaced with the site's "much more concentrated than any over-the-counter product" plus "adds to" fluoride toothpaste; the recommend-only-if policy was softened to "the dentist will explain whether fluoride would help your teeth" in body, FAQ and schema. |
| Stats | words 818 | Flesch 66 | title 50 | meta 150 | H1 "Fluoride Treatment in Yardley, PA" |

## 5. Information still needed from the practice

1. **Form of fluoride** used (varnish, gel or foam) and the waiting time before eating or drinking afterwards.
2. **Fluoride tablets:** does the practice recommend or prescribe them? The current site mentions them.
3. **Price** for patients without insurance, if the practice wants it published.
4. **Fluoride policy:** is fluoride applied routinely at children's visits (as the child page says) and offered to adults by risk? Copy only says the dentist explains whether it would help.

## Sources

- Site extracts: /preventative-care/fluoride/, /preventative-care/child-dentistry/, /preventative-care/teeth-cleaning-and-check-ups/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
