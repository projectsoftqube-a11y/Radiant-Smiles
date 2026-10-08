# Before & After Gallery: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. **Only one real case exists (teeth whitening), and its consent status is unconfirmed.**

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **smile makeover before and after** (primary) | 480 | 7 | Hero only, used honestly: "Smile makeover before and after photos will be added as patients agree to share them." Also "smile makeovers" in the meta and H2 "What a Smile Makeover Involves" | **Deliberately demoted in the QA pass (7 Oct 2026).** No smile-makeover case exists, so the title, H1 and schema no longer promise one. Move the phrase back into the title, H1 and an H2 once the first real makeover case is published. |
| before and after gallery / before & after (page label) | pending | pending | Title "Before & After Gallery: Teeth Whitening \| Yardley, PA", H1 "Before & After Gallery: Teeth Whitening and More", hero | Describes what the page actually holds today. |
| teeth whitening before and after | pending | pending | Title, H1, meta, H2 "Teeth Whitening Before and After" | The one existing case sits here, so this is now the page's lead term. |
| veneers before and after | pending | pending | H2 "Veneers Before and After" | No cases yet; the grid stays hidden until one is consented. |
| dental before and after | 110 | 0 | Body: "your own dental before and after photos" | National context only. |

**Kept off this page on purpose:** service keywords (whitening, veneers, implants) belong to their service pages; this page only links to them. The brief's H1 ("Before & After Smile Gallery") is now "Before & After Gallery: Teeth Whitening and More", so it describes the one existing case.

## 2. Role of the page

Proof for the cosmetic and restorative pages. Searchers for before-and-after photos are researching cosmetic work, so the page explains what a smile makeover involves, shows cases grouped by treatment and links to the service pages. **It cannot honestly look like a full gallery today.** It's written so it reads complete with one case (or none): every group has explanatory text, and empty grids are hidden rather than shown as "coming soon". As consented cases arrive, the page grows without a rewrite.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "A smile makeover combines two or more treatments, planned together, to change how your smile looks."
- "Teeth whitening lightens the natural shade of your teeth."
- "Porcelain veneers are thin, custom-made shells bonded to the front of your teeth to change their color, shape or size."

**Checkable practice facts:** whitening trays made in 1–2 days, worn 3–4 hours a night for 1–2 weeks; $100 off whitening (regular $550); implant = implant, abutment and crown.

**Consent and honesty:** the visible copy makes no consent or "no stock photos" promise until the practice confirms it; those are the **publishing rule** in the developer handoff (written consent on file, this practice's own patient). Each case card says "Individual results vary". Images are marked up as `ImageObject` only once a case is cleared. If no case is cleared by launch, the page goes live `noindex` and out of the nav and sitemap.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 53 / 144 characters (after the QA pass) |
| Primary keyword | First 100 words (hero, honest future-tense use) only; "smile makeover(s)" also in the meta and one H2. Title/H1 deliberately use before-and-after / teeth whitening wording (see section 1). |
| Length | About 535 words before cases (brief: 300–500 + cases) |
| Readability | Flesch about 66 |
| Banned words / claims | None. No outcome promises; "results vary" on every case. No em dashes. |
| Links | All in the live URL map |
| Independent fact-check (7 Oct 2026) | 2 findings (2 errors, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Retitled away from smile-makeover cases that don't exist (title, H1, meta, ImageGallery name/description, og tags); removed "each case is shared with the patient's written consent", "real patients" and "we don't use stock images or other practices' results" from the copy, meta and schema; kept them as the publishing rule in the handoff. |
| Schema | ImageGallery + BreadcrumbList; parses and validates. The ImageObject example in 3c is a fragment to paste into the graph (no `@context` by design). |

## 5. Information still needed from the practice

1. **Written consent for the existing teeth whitening case, and confirmation it is this practice's own patient (not vendor stock) [CONFIRM: required before it is published].**
2. **Whitening method used in that case [CONFIRM]** (custom take-home trays or other).
3. **More consented cases**, ideally: one smile makeover (two or more treatments), porcelain veneers, a dental implant and front crowns (the Candice C. review describes front crowns; ask whether she'd consent to photos).
4. **Photo policy [CONFIRM].** The copy no longer states a consent or "no stock images" policy. If the practice approves the policy in writing ("We publish cases only with the patient's written consent; no stock images or other practices' results"), it can be added to the page and caption. Also confirm "no retouching beyond cropping".
6. **Smile makeover cases.** Are any smile-makeover (two or more treatments), veneer or implant cases available? Once one is published, move "smile makeover before and after" back into the title, H1 and an H2.
5. A consent form for before-and-after photos, if the practice doesn't have one.

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`): Offers, Services (cosmetic); current /about-us/before-and-after-gallery/ page (one whitening case, crawled 7 Oct 2026); teeth-whitening page extract (tray timings).
- Keyword data: Semrush (US database), via the Keyword Map & Sitemap workbook.
