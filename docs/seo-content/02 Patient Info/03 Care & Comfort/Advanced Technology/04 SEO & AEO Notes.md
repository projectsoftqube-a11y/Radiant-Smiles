# Advanced Technology: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **cbct scan yardley** (primary) | pending | pending | Title "CBCT Scan in Yardley, PA", meta, H1 (plural "CBCT Scans in Yardley"), first sentence, H2 "3D Cone Beam CT: Your CBCT Scan in Yardley" | Natural phrasing ("in Yardley"). |
| cbct scan near me | 210 | 8 | Not written as a phrase | Matched by local signals. |
| dental cone beam ct near me | 40 | 0 | "Cone beam CT" in H2, body and quick facts | Close variant. |
| cbct scan dental | 1,900 | 27 | FAQ "What is a CBCT scan at the dentist?" | National context; close variant. |
| 3d dental x ray | pending | pending | First sentence of the CBCT section: "A CBCT scan is a 3D dental X-ray..." | Exact phrase (hyphenated "X-ray"). |
| itero scanner dentist | pending | pending | H2 "iTero Digital Impressions...", FAQ "What is an iTero scanner?" | Close variant. |
| intraoral scanner | pending | pending | H2, body, FAQ (4 uses) | |

**Kept off this page on purpose:** implant, Invisalign and gum-therapy keywords (linked to their service pages); comfort terms → Care & Comfort.

## 2. Role of the page

Owns the technology topic and absorbs `/patient-information/technology/` by 301; both old extracts are combined (CBCT, iTero/intraoral scanner, digital X-rays, laser dentistry and microscopes from the technology page; microscopes, electric hand-pieces, digital imaging, lasers and intraoral camera from the advanced-technology page). It supports the precision pillar and feeds the implant, Invisalign and laser therapy pages with descriptive internal links.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "A CBCT scan is a 3D dental X-ray that shows your teeth, jaw bone and surrounding structures from every angle."
- "An intraoral scanner takes a 3D digital impression of your teeth with a small handheld wand."
- "Digital X-rays use a sensor in place of traditional film and send the image straight to a computer screen."

Checkable facts: each named device, microscope comparison ("similar to the one an ophthalmologist uses"), laser uses (gum care, frenectomy, soft tissue), the free implant consultation.

FAQs: four, 43–50 words, mixing general definitions (good for AI answers) with practice-specific lines.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Every device is in the fact sheet's technology list. Left out on purpose: the old claim that CBCT gives "less radiation than standard x-rays" (not accurate as a general statement, and unsourced); the digital X-ray figures "about 1/6 the radiation" and "about 50 percent less exposure time" (unsourced vendor-style stats; copy says "less radiation than conventional film"); laser use for root canals and apicoectomies (endodontic surgery, not confirmed in-house); "without anesthesia or sutures" (softened to "often only a light anesthetic spray"). A draft line saying scans are always taken in-house was removed pending confirmation. |
| Banned words / em dashes | None found (script check); no "state-of-the-art" or "cutting-edge". |
| Internal links | 4 unique internal URLs, all in the live URL map. `/patient-information/technology/` is not linked (301s here). |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList and FAQPage exist in schema.org. |
| Schema ↔ visible content | Name/description equal title/meta; 4 FAQs match word for word (script check). |
| Stats | words 732 (brief 600–900) · Flesch 52 · title 53 · meta 155 · H1 "Advanced Dental Technology and CBCT Scans in Yardley" |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Intraoral camera: "lets you see what the dentist sees" removed (not in the technology extract; chairside use moved to section 5). CBCT FAQ softened to "…dental implants and some extractions, when a flat X-ray doesn't show enough detail" (visible text and FAQPage). |

## 5. Information still needed from the practice

1. **[CONFIRM] In-house equipment:** CBCT, iTero, dental microscopes, digital X-rays, intraoral camera, electric hand-pieces and dental lasers. Remove any section that isn't current.
2. **CBCT use:** are CBCT scans taken at the office for implant planning (or referred to an imaging center)?
3. **Equipment makes** (CBCT unit, laser) if the practice wants them named, plus real photos.
4. **Radiation figures:** if the practice wants to keep "1/6 the radiation", supply the manufacturer's documentation to cite.
5. **Laser procedures done in-house:** frenectomy, gum therapy; confirm osseous surgery and gum grafting before any page names them.
6. **Intraoral camera chairside [CONFIRM].** Do the dentists show patients their images on screen? If yes, "lets you see what the dentist sees" can be added back.

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (technology list and CONFIRM note)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/technology/` (301 source), `/patient-information/care-and-comfort/advanced-technology/`, `/preventative-care/gum-disease-laser-therapy/` (via `_refetched.md`), `/special-offers/`
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
