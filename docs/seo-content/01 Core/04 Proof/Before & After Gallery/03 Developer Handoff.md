# Before & After Gallery: Developer Handoff

**URL:** `/about-us/before-and-after-gallery/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the items marked as required are supplied.

## 1. Head tags

```html
<title>Before & After Gallery: Teeth Whitening | Yardley, PA</title>
<meta name="description" content="Teeth whitening before and after case from Radiant Smiles @ Floral Vale in Yardley, PA, plus what veneers, implants and smile makeovers involve.">
<link rel="canonical" href="https://www.radiant-smiles.com/about-us/before-and-after-gallery/">
<meta property="og:type" content="website">
<meta property="og:title" content="Before & After Gallery: Teeth Whitening | Yardley, PA">
<meta property="og:description" content="Teeth whitening before and after case from Radiant Smiles @ Floral Vale in Yardley, PA, plus what veneers, implants and smile makeovers involve.">
<meta property="og:url" content="https://www.radiant-smiles.com/about-us/before-and-after-gallery/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Before & After Gallery: Teeth Whitening and More". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › About Us › Before & After Gallery.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **Publishing rule (applies to every case, including the first):** publish a before-and-after case only when the practice confirms in writing that (1) the patient's written consent for website use is on file and (2) the photos show this practice's own patient, not stock images or another practice's results. These commitments are deliberately **not** stated in the visible copy until the practice approves them; once it does, the caption can add "Shown with the patient's written consent."
- **ONLY ONE CASE EXISTS TODAY: the teeth whitening case on the current gallery page.** Copy its before and after images from the current site, but publish it only once it meets the publishing rule above. **If it isn't cleared by launch,** publish the page with `<meta name="robots" content="noindex, follow">`, leave it out of the main navigation and `sitemap.xml`, and remove the Home page link "See a teeth whitening result in our before-and-after gallery" until the first case is cleared (the title and H1 name a whitening case, and a gallery with no photos is thin content).
- **Case card component:** before image, after image, treatment label, optional one-line note, and a small "Individual results vary." caption. Build it from a data file so the practice can add cases without a code change.
- **Groups:** Smile makeover, Teeth whitening, Porcelain veneers, Implants and restorations. A group with no cases hides its grid and keeps its text. Never show empty "coming soon" frames.
- **Images:** same crop, lighting and size for before and after; no retouching beyond cropping [CONFIRM with the practice]. Faces cropped to the smile unless the patient consented to a full-face photo. Alt text: "Before teeth whitening at Radiant Smiles @ Floral Vale, Yardley PA" / "After teeth whitening…".
- **Lazy-load** gallery images below the first case; serve WebP/AVIF with width and height set to avoid layout shift.
- **Treatment label:** the whitening case card says "Treatment: teeth whitening". Add the method (e.g. custom take-home trays) only once the practice confirms it.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: ImageGallery + BreadcrumbList (required)

`ImageGallery` (a CollectionPage subtype) about the `#dentist` entity. Add one `ImageObject` per published photo to `associatedMedia` once a case meets the publishing rule (template in 3c). No images are marked up now because none are cleared.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": "https://www.radiant-smiles.com/about-us/before-and-after-gallery/#webpage",
      "url": "https://www.radiant-smiles.com/about-us/before-and-after-gallery/",
      "name": "Before & After Gallery: Teeth Whitening | Yardley, PA",
      "description": "Teeth whitening before and after case from Radiant Smiles @ Floral Vale in Yardley, PA, plus what veneers, implants and smile makeovers involve.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/about-us/before-and-after-gallery/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/about-us/before-and-after-gallery/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.radiant-smiles.com/about-us/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Before & After Gallery",
          "item": "https://www.radiant-smiles.com/about-us/before-and-after-gallery/"
        }
      ]
    }
  ]
}
```

### 3c. When a case is published

Add one `ImageObject` per photo to the ImageGallery node as `"associatedMedia": [ ... ]`, for example:

```json
{
  "@type": "ImageObject",
  "contentUrl": "https://www.radiant-smiles.com/images/gallery/teeth-whitening-1-before.webp",
  "name": "Before teeth whitening",
  "caption": "Teeth whitening at Radiant Smiles @ Floral Vale. Individual results vary.",
  "description": "Before photo, teeth whitening case."
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
