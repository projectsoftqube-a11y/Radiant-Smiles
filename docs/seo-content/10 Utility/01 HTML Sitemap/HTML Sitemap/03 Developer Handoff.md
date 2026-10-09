# HTML Sitemap: Developer Handoff

**URL:** `/sitemap/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Sitemap | Radiant Smiles @ Floral Vale, Yardley PA</title>
<meta name="description" content="Every page on the Radiant Smiles @ Floral Vale website in one list: dental services, patient information, areas we serve, the blog and our policies.">
<link rel="canonical" href="https://www.radiant-smiles.com/sitemap/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Sitemap | Radiant Smiles @ Floral Vale, Yardley PA">
<meta property="og:description" content="Every page on the Radiant Smiles @ Floral Vale website in one list: dental services, patient information, areas we serve, the blog and our policies.">
<meta property="og:url" content="https://www.radiant-smiles.com/sitemap/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Sitemap". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Sitemap.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/`, `/about-us/`, `/about-us/before-and-after-gallery/`, `/about-us/dr-jaspreet-gadria-dmd/`, `/about-us/dr-urvishkumar-bhalala/`, `/about-us/meet-the-staff/`, `/areas-we-serve/`, `/blog/`, `/contact-us/`, `/cosmetic-dentistry/`, `/cosmetic-dentistry/dental-bonding/`, `/cosmetic-dentistry/dental-veneers-dentistry/`, `/cosmetic-dentistry/inlays-onlays/`, `/cosmetic-dentistry/invisalign/`, `/cosmetic-dentistry/invisalign/invisalign-cost/`, `/cosmetic-dentistry/invisalign/invisalign-teen/`, `/cosmetic-dentistry/teeth-whitening/`, `/dentist-ewing-nj/`, `/dentist-hamilton-nj/`, `/dentist-hopewell-nj/`, `/dentist-lawrenceville-nj/`, `/dentist-lower-makefield-pa/`, `/dentist-mercer-county-nj/`, `/dentist-morrisville-pa/`, `/dentist-new-hope-pa/`, `/dentist-pennington-nj/`, `/dentist-trenton-nj/`, `/dentist-washington-crossing-pa/`, `/disclaimer/`, `/emergency-dentistry/`, `/family-dentistry/`, `/hipaa-notice-of-privacy-practices/`, `/patient-information/`, `/patient-information/care-and-comfort/`, `/patient-information/care-and-comfort/advanced-technology/`, `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/care-and-comfort/infection-control/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/new-patients/`, `/patient-information/patient-education/`, `/patient-information/patient-registration/`, `/patient-information/scheduling/`, `/patient-information/terms/`, `/patient-information/terms/privacy/`, `/patient-information/terms/web-accessibility/`, `/patient-information/why-choose-us/`, `/patient-reviews/`, `/preventative-care/`, `/preventative-care/arestin/`, `/preventative-care/child-dentistry/`, `/preventative-care/deep-teeth-cleaning/`, `/preventative-care/dental-sealants/`, `/preventative-care/fluoride/`, `/preventative-care/gum-disease-laser-therapy/`, `/preventative-care/oral-cancer-screening/`, `/preventative-care/oral-hygiene/`, `/preventative-care/periodontal-maintenance/`, `/preventative-care/professional-night-guards/`, `/preventative-care/teeth-cleaning-and-check-ups/`, `/restorative-dentistry/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dental-crowns/`, `/restorative-dentistry/dental-fillings/`, `/restorative-dentistry/dental-implants/`, `/restorative-dentistry/dentures/`, `/restorative-dentistry/dentures/denture-relines/`, `/restorative-dentistry/dentures/immediate-dentures/`, `/restorative-dentistry/dentures/implant-retained-dentures/`, `/restorative-dentistry/dentures/partial-dentures/`, `/restorative-dentistry/periodontal-services/`, `/restorative-dentistry/root-canal/`, `/restorative-dentistry/tooth-extractions/`, `/restorative-dentistry/wisdom-teeth-removal/`, `/special-offers/`.
- **Indexable** (`index, follow`); linked from the footer as "Sitemap". This page is separate from `sitemap.xml`, which Next.js generates.
- **Generate the lists from the same route config as sitemap.xml**, filtered to indexable pages, so new pages appear automatically. Keep the group order, group headings and link text exactly as in `02 Content.md`.
- **Never list:** `/lp/` pages (noindex), the conditional pages (`/dental-implants-mercer-county-nj/`, `/emergency-dentist-trenton-nj/`, `/invisalign-trenton-nj/`) until each is built, the on-hold town pages (Newtown, Langhorne, Levittown, Fairless Hills), individual blog posts, or any old URL that 301s.
- **If a conditional page is built,** add it under 'Areas We Serve › New Jersey' with link text "Dental implants for Mercer County, NJ patients", "Emergency dentist near Trenton, NJ" or "Invisalign near Trenton, NJ".
- **Markup:** each group is an `<h2>` followed by a `<ul>` of plain `<a href>` links; Pennsylvania and New Jersey are `<h3>` sub-groups.

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList (required)

Utility page: WebPage and BreadcrumbList only, with the business referenced by `@id` as publisher. No ItemList needed.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/sitemap/#webpage",
      "url": "https://www.radiant-smiles.com/sitemap/",
      "name": "Sitemap | Radiant Smiles @ Floral Vale, Yardley PA",
      "description": "Every page on the Radiant Smiles @ Floral Vale website in one list: dental services, patient information, areas we serve, the blog and our policies.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/sitemap/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/sitemap/#breadcrumb",
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
          "name": "Sitemap",
          "item": "https://www.radiant-smiles.com/sitemap/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
