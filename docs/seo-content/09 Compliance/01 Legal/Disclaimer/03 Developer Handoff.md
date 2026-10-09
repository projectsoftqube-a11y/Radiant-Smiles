# Disclaimer: Developer Handoff

**URL:** `/disclaimer/` | **Status:** Final v1, 7 Oct 2026. Ready to build once every [CONFIRM] item is resolved and the practice's legal adviser has reviewed the page.

## 1. Head tags

```html
<title>Website Disclaimer | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="The Radiant Smiles @ Floral Vale website is for general information and education only. It does not give dental advice or create a patient relationship.">
<link rel="canonical" href="https://www.radiant-smiles.com/disclaimer/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Website Disclaimer | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="The Radiant Smiles @ Floral Vale website is for general information and education only. It does not give dental advice or create a patient relationship.">
<meta property="og:url" content="https://www.radiant-smiles.com/disclaimer/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Website Disclaimer". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Disclaimer.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the Contact Us section and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/hipaa-notice-of-privacy-practices/`, `/patient-information/terms/`, `/patient-information/terms/privacy/`, `/patient-information/terms/web-accessibility/`.
- **Indexable** (`index, follow`), included in sitemap.xml and linked from the footer on every page. Low priority; no tracking events beyond the site defaults.
- **Do not publish any `[CONFIRM: ...]` text.** This page has 3 bracketed item(s). Each must be filled in (or the sentence removed) by the practice and its legal adviser before launch. Fill the 'Last updated' / 'Effective' date at publication.
- **Page-specific:** Keeps the current `/disclaimer/` URL (no redirect). The privacy paragraph that sat on the old disclaimer page now lives only on the Privacy Policy; don't duplicate it here.
- **No marketing elements:** no offer banners, pop-ups or appointment CTAs in the body (the standard header and footer stay).
- **Plain styling:** body text, headings and lists only; keep the reading width comfortable and print-friendly.

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList (required)

Legal pages carry WebPage and BreadcrumbList only. The business is referenced by `@id` as publisher; no Dentist node, FAQPage, Review or Offer markup on this page.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/disclaimer/#webpage",
      "url": "https://www.radiant-smiles.com/disclaimer/",
      "name": "Website Disclaimer | Radiant Smiles @ Floral Vale",
      "description": "The Radiant Smiles @ Floral Vale website is for general information and education only. It does not give dental advice or create a patient relationship.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/disclaimer/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/disclaimer/#breadcrumb",
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
          "name": "Disclaimer",
          "item": "https://www.radiant-smiles.com/disclaimer/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
