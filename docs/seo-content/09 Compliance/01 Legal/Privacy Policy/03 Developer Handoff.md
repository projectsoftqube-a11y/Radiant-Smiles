# Privacy Policy: Developer Handoff

**URL:** `/patient-information/terms/privacy/` | **Status:** Final v1, 7 Oct 2026. Ready to build once every [CONFIRM] item is resolved and the practice's legal adviser has reviewed the page.

## 1. Head tags

```html
<title>Privacy Policy | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="How the Radiant Smiles @ Floral Vale website collects, uses and protects information you submit through forms, cookies and log files, and how to opt out.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/terms/privacy/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Privacy Policy | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="How the Radiant Smiles @ Floral Vale website collects, uses and protects information you submit through forms, cookies and log files, and how to opt out.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/terms/privacy/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Website Privacy Policy". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Terms of Use › Privacy Policy.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the Contact Us section and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/contact-us/`, `/hipaa-notice-of-privacy-practices/`.
- **Indexable** (`index, follow`), included in sitemap.xml and linked from the footer on every page. Low priority; no tracking events beyond the site defaults.
- **Do not publish any `[CONFIRM: ...]` text.** This page has 10 bracketed item(s). Each must be filled in (or the sentence removed) by the practice and its legal adviser before launch. Fill the 'Last updated' / 'Effective' date at publication.
- **Page-specific:** Keeps the current URL (no redirect). Link it beside every form on the site (appointment, contact, registration and all `/lp/` forms) and in the footer. The UK Data Protection Act 1998 references on the current page are removed. The 'Log Files, Cookies and Analytics' section must list the tools actually installed; fill it in with the tracking setup.
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
      "@id": "https://www.radiant-smiles.com/patient-information/terms/privacy/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/terms/privacy/",
      "name": "Privacy Policy | Radiant Smiles @ Floral Vale",
      "description": "How the Radiant Smiles @ Floral Vale website collects, uses and protects information you submit through forms, cookies and log files, and how to opt out.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/terms/privacy/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/terms/privacy/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.radiant-smiles.com/patient-information/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Terms of Use",
          "item": "https://www.radiant-smiles.com/patient-information/terms/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Privacy Policy",
          "item": "https://www.radiant-smiles.com/patient-information/terms/privacy/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
