# HIPAA Notice of Privacy Practices: Developer Handoff

**URL:** `/hipaa-notice-of-privacy-practices/` | **Status:** Final v1, 7 Oct 2026. Build now; **do not publish until the practice's compliance adviser has approved the text and every [CONFIRM] item is filled in.**

## 1. Head tags

```html
<title>HIPAA Notice of Privacy Practices | Radiant Smiles</title>
<meta name="description" content="How Radiant Smiles @ Floral Vale in Yardley, PA may use and share your health information, your privacy rights, and how to file a complaint.">
<link rel="canonical" href="https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="HIPAA Notice of Privacy Practices | Radiant Smiles">
<meta property="og:description" content="How Radiant Smiles @ Floral Vale may use and share your health information and the privacy rights you have.">
<meta property="og:url" content="https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/">
<!-- og:image: site default (logo or office photo, 1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "HIPAA Notice of Privacy Practices". Keep heading levels exactly as in `02 Content.md` (H2 for each required section, H3 for each right under "Your Rights").
- **Header statement must stay at the top**, in bold, directly under the H1, before any other text. HIPAA requires this statement as the notice's header; do not move it, shorten it or put it in an image.
- **Effective date** sits directly under the opening paragraph and must match the date printed on the PDF.
- **Server-render all text** (Next.js SSG). The full notice must be in the initial HTML. Do not put sections inside collapsed accordions or tabs: the notice must be readable in full without interaction.
- **Plain document layout:** no promotional banners, offer pop-ups, chat widgets over the text, or "book now" blocks inside the notice body. The only CTA is the call button in the final section.
- **Printable PDF (required):** host the approved PDF at `/downloads/radiant-smiles-notice-of-privacy-practices.pdf` and link it with the "Download a printable copy (PDF)" button in the hero. The PDF text must match the page text word for word, including the effective date. Also add a print stylesheet (`@media print`) that hides the header, footer and nav so the page prints cleanly.
- **Prominent posting:** HIPAA requires the notice to be posted prominently on the website. Link it in the **site footer on every page** with the anchor text "Notice of Privacy Practices", and from the Website Privacy Policy, New Patients and Patient Registration pages.
- **NAP:** in the privacy officer block and the final section, exactly as text: `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`.
- **Links:**
  - Phone: `tel:+12158604600`.
  - Website Privacy Policy: `/patient-information/terms/privacy/`.
  - OCR complaint page: `https://www.hhs.gov/hipaa/filing-a-complaint/index.html`, opening in a new tab with `rel="noopener"`.
  - Every link is a crawlable `<a href>`.
- **Privacy officer email:** if the practice supplies one, render it as a plain `mailto:` link. Do not add a contact form on this page: complaints and records requests may contain health information.
- **Versioning:** when the notice changes, replace the page text and PDF together, update the effective date, and keep the previous PDF on file internally (HIPAA requires records to be kept for six years). Do not keep old versions publicly linked.
- **Tracking:** fire one event for PDF downloads and one for call clicks. Do not attach any marketing or advertising pixels (Meta, Google Ads remarketing) to this page.
- **Redirects:** none. The current site has no notice page.

## 3. Structured data (JSON-LD)

One script block on `/hipaa-notice-of-privacy-practices/` only. WebPage + BreadcrumbList; the business is referenced by `@id` only (the full Dentist entity lives on the Home page).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/#webpage",
      "url": "https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/",
      "name": "HIPAA Notice of Privacy Practices | Radiant Smiles",
      "description": "How Radiant Smiles @ Floral Vale in Yardley, PA may use and share your health information, your privacy rights, and how to file a complaint.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.radiant-smiles.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "HIPAA Notice of Privacy Practices",
          "item": "https://www.radiant-smiles.com/hipaa-notice-of-privacy-practices/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

- `name` must equal the `<title>` and `description` must equal the meta description, character for character.
- If the title or meta changes, update the JSON-LD in the same commit.
- Do not add FAQPage, Article or Review markup to this page.
- When the effective date is confirmed, you may add `"dateModified": "<YYYY-MM-DD>"` to the WebPage node; it must match the effective date shown on the page.
