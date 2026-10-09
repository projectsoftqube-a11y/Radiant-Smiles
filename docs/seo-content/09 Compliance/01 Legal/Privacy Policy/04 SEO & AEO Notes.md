# Privacy Policy: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

No keyword target: this is a legal page. It should be indexable so patients (and ad-platform reviewers) can find it, but it carries no ranking goal.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| radiant smiles privacy policy (navigational) | - | - | Title, H1 | Brand + page name only. |

**Kept off this page on purpose:** service keywords, offers as marketing, and calls to action other than the contact details.

## 2. Role of the page

Explains what the website collects through forms, log files and cookies, separately from the HIPAA Notice of Privacy Practices. Required beside every form and for ad platforms' landing-page policies.

## 3. AEO / GEO

Not a target for AI answers. The page still opens with a plain statement of what it covers, and the NAP matches the homepage, so assistants that read it get consistent business details.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 45 / 153 characters (limits 60 / 120-155) |
| H1 | One: "Website Privacy Policy" |
| Word count (02 body, incl. lists and FAQs) | 818 |
| Readability | Flesch reading ease about 62 (script estimate) |
| Banned words and em dashes | None found |
| Legal wording | Accurate wording carried over from the current site extracts where it exists; boilerplate that is wrong for a US dental practice replaced with neutral wording; every commitment the practice must approve marked [CONFIRM]. No marketing language. |
| Internal links | 2 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: WebPage, BreadcrumbList. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; NAP identical. |

## 5. Information still needed from the practice

Every [CONFIRM] item on the page, in page order:

1. CONFIRM: date this policy takes effect; the current page says "Effective 2025"
2. CONFIRM: the current policy also lists job title, demographic information (such as postcode, preferences and interests) and survey information. Keep these only if the new site's forms actually collect them.
3. CONFIRM: the current policy also lists promotional emails, market research and customizing the website. Keep these only if the practice does them, and only with the consent HIPAA and other laws require.
4. CONFIRM: the current policy says information may be shared with third-party partners for marketing. For a dental practice, this is restricted under HIPAA; we recommend removing it unless the practice's legal adviser approves specific wording.
5. CONFIRM before publishing: "We will never sell your information." The current policy states this; publish the sentence only once the practice confirms it remains true for the new website and its tools.
6. CONFIRM: forms are sent over HTTPS and delivered securely; name the form processor or practice-management system, if any.
7. CONFIRM: list the tools the new site uses, for example Google Analytics, Google Tag Manager, Google Ads or Meta conversion tracking, Microsoft Clarity or call tracking, and confirm that information typed into forms is not sent to these tools.
8. CONFIRM: how the practice uses phone numbers from calls to (215) 860-4600. If it sends appointment reminders or other texts, describe the consent it collects and how to opt out, for example by replying STOP.
9. CONFIRM: how requests are handled, response time, and whether any state privacy laws apply to the practice.
10. CONFIRM: the Children's Privacy paragraph is standard wording that is not on the current site; approve or remove it.

The whole page also needs review by the practice's legal adviser before launch.

## Sources

- Current site extracts: `disclaimer.md`, `patient-information__terms__privacy.md`, `patient-information__terms__web-accessibility.md` in `/home/claude/rs/site/`; `fact_sheet.md`.
