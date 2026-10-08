# Home Care Instructions: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **after tooth extraction care** (primary) | pending | pending | Title, meta, H1 "Home Care Instructions: After Tooth Extraction Care and More", first sentence, H2 "After Tooth Extraction Care" | 5 exact uses. The extraction section comes first because it has the most search demand and the most specific instructions. |
| care after dental filling | pending | pending | H2 "Care After a Dental Filling" | Close variant ("a"). |
| care after root canal | pending | pending | H2 "Care After a Root Canal" | Close variant. |

**Kept off this page on purpose:** "tooth extraction yardley" and "root canal yardley" belong to the service pages (both linked). Wisdom-teeth recovery is not covered: the old wisdom-teeth page reads like template copy and is awaiting confirmation.

## 2. Role of the page

A practical resource patients use after treatment, and one the team can text or email as a link (the handoff adds section anchors and a print stylesheet). It carries over the old page's specific numbers exactly: gauze for 30–45 minutes, no rinsing, straws, smoking, alcohol or brushing at the site for 72 hours, limited exercise for 24 hours, swelling usually down after 48 hours, routine resumed after 24 hours, and the call-us triggers. Root canal aftercare (not on the old home-instructions page) comes from the old root canal pages: often two appointments, most patients drive home and resume normal activity, a final restoration within a few weeks.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Bite firmly on the gauze pad for 30 to 45 minutes after a tooth extraction so a blood clot can form in the socket."
- "Keep the toothbrush away from the extraction site for 72 hours."
- "Tooth-colored composite fillings are fully set when you leave the office."

Extractable structures: a 5-step numbered extraction list, a call-us checklist, bulleted lists per treatment.

FAQs: three, 43–49 words, each answering a common post-treatment search.

"Call us if…" guidance appears only where the old page supports it: the extraction triggers (heavy bleeding, severe pain, swelling lasting 2–3 days, medication reaction). Nothing was added for fillings, crowns or root canals.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | All instructions traced to the home-instructions extract, plus the tooth-extractions and root canal extracts. Changed on purpose: the old "Tylenol or Ibuprofen every 3-4 hours" (and aspirin for fillings) became "a mild over-the-counter pain reliever, such as ibuprofen or acetaminophen (Tylenol)... follow the directions on the label", because the copy rules forbid giving doses; aspirin was dropped. The contradiction between "resume normal routine after 24 hours" and "no brushing at the site for 72 hours" is resolved by saying the rest of the mouth after 24 hours, the site after 72. |
| Banned words / em dashes | None found (script check). |
| Internal links | 4 unique internal URLs, all in the live URL map. |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList and FAQPage exist in schema.org. No HowTo markup (Google no longer shows HowTo rich results, and these are clinical instructions, not a task). |
| Schema ↔ visible content | Name/description equal title/meta; 3 FAQs match word for word (script check). |
| Stats | words 903 (brief 600–900) · Flesch 74 · title 57 · meta 154 · H1 "Home Care Instructions: After Tooth Extraction Care and More" |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. "Crowns and bridges usually take two or three appointments" (home-instructions extract) conflicts with the crowns page and fact sheet ("two visits"); changed to "usually take at least two appointments", which fits both. Exact visit count moved to section 5. |

## 5. Information still needed from the practice

1. **[CONFIRM] Clinical sign-off** by one of the dentists, with a "Last reviewed" date and name to show under the H1.
2. **Medication wording:** approve the "follow the directions on the label" version, or supply the practice's preferred instructions.
3. **Temporary crown comes off:** what should patients do? (The old page only says it may happen; no instruction is given until confirmed.)
4. **Safety line:** may we add "If you have trouble breathing or swallowing, or swelling that spreads, call 911 or go to the emergency room"? (Not on the old page, so not added.)
5. **Root canal:** any specific aftercare the dentists give (eating, sensitivity, antibiotics)?
6. **Wisdom teeth / implant aftercare:** add sections only once the practice confirms these are done in-house.
7. **Crown and bridge visits [CONFIRM].** Two visits (crowns page, fact sheet) or "two or three" (old home-instructions page)? Copy says "at least two".

## Sources

- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/care-and-comfort/home-instructions/`, `/restorative-dentistry/tooth-extractions/`, `/restorative-dentistry/root-canal/`, `/restorative-dentistry/non-surgical-root-canal/`
- Fact sheet `/home/claude/rs/fact_sheet.md` (materials: tooth-colored composite fillings)
