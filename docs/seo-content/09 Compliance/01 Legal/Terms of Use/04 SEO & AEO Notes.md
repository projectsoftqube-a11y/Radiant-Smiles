# Terms of Use: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

No keyword target: this is a legal page. It should be indexable so patients (and ad-platform reviewers) can find it, but it carries no ranking goal.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| radiant smiles terms of use (navigational) | - | - | Title, H1 | Brand + page name only. |

**Kept off this page on purpose:** service keywords, offers as marketing, and calls to action other than the contact details.

## 2. Role of the page

New plain-language terms for the website, and the parent page for the privacy and accessibility statements.

## 3. AEO / GEO

Not a target for AI answers. The page still opens with a plain statement of what it covers, and the NAP matches the homepage, so assistants that read it get consistent business details.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 43 / 144 characters (limits 60 / 120-155) |
| H1 | One: "Website Terms of Use" |
| Word count (02 body, incl. lists and FAQs) | 548 |
| Readability | Flesch reading ease about 63 (script estimate) |
| Banned words and em dashes | None found |
| Legal wording | Accurate wording carried over from the current site extracts where it exists; boilerplate that is wrong for a US dental practice replaced with neutral wording; every commitment the practice must approve marked [CONFIRM]. No marketing language. |
| Internal links | 4 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: WebPage, BreadcrumbList. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; NAP identical. |

## 5. Information still needed from the practice

Every [CONFIRM] item on the page, in page order:

1. CONFIRM: date the terms are published
2. CONFIRM: offer terms, eligibility and expiry dates.
3. CONFIRM: ownership or licences for photos and patient-education content supplied by third parties.
4. CONFIRM with legal adviser: wording of the warranty disclaimer and limitation of liability.
5. CONFIRM with legal adviser: Pennsylvania as the governing law.

The whole page also needs review by the practice's legal adviser before launch.

## Sources

- Current site extracts: `disclaimer.md`, `patient-information__terms__privacy.md`, `patient-information__terms__web-accessibility.md` in `/home/claude/rs/site/`; `fact_sheet.md`.
