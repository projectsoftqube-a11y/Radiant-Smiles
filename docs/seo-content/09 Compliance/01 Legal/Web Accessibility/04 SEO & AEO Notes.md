# Web Accessibility: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

No keyword target: this is a legal page. It should be indexable so patients (and ad-platform reviewers) can find it, but it carries no ranking goal.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| radiant smiles web accessibility (navigational) | - | - | Title, H1 | Brand + page name only. |

**Kept off this page on purpose:** service keywords, offers as marketing, and calls to action other than the contact details.

## 2. Role of the page

States the practice's commitment and gives a phone route for help. Linked from the footer on every page.

## 3. AEO / GEO

Not a target for AI answers. The page still opens with a plain statement of what it covers, and the NAP matches the homepage, so assistants that read it get consistent business details.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 48 / 149 characters (limits 60 / 120-155) |
| H1 | One: "Web Accessibility Statement" |
| Word count (02 body, incl. lists and FAQs) | 375 |
| Readability | Flesch reading ease about 72 (script estimate) |
| Banned words and em dashes | None found |
| Legal wording | Accurate wording carried over from the current site extracts where it exists; boilerplate that is wrong for a US dental practice replaced with neutral wording; every commitment the practice must approve marked [CONFIRM]. No marketing language. |
| Internal links | 2 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: WebPage, BreadcrumbList. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; NAP identical. |

## 5. Information still needed from the practice

Every [CONFIRM] item on the page, in page order:

1. CONFIRM: date of the most recent accessibility review
2. CONFIRM: the standard the new site targets (for example, WCAG 2.2 Level AA), who tests it and how often it is reviewed. Do not state that the site conforms to a standard until it has been tested.
3. CONFIRM: "Most videos on this website have closed captions" is true for the new site.
4. CONFIRM: a public email address for accessibility feedback, if the practice wants one listed.
5. CONFIRM: details of step-free access, accessible parking and restrooms, if the practice wants them listed.

The whole page also needs review by the practice's legal adviser before launch.

## Sources

- Current site extracts: `disclaimer.md`, `patient-information__terms__privacy.md`, `patient-information__terms__web-accessibility.md` in `/home/claude/rs/site/`; `fact_sheet.md`.
