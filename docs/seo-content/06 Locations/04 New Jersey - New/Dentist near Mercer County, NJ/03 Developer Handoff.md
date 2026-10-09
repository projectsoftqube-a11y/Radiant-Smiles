# Dentist near Mercer County, NJ: Developer Handoff

**URL:** `/dentist-mercer-county-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Mercer County, NJ | Radiant Smiles</title>
<meta name="description" content="Mercer County, NJ families: family, implant and emergency care, most towns about 15-25 minutes across the river. Saturday hours. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-mercer-county-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Mercer County, NJ | Radiant Smiles">
<meta property="og:description" content="Mercer County, NJ families: family, implant and emergency care, most towns about 15-25 minutes across the river. Saturday hours. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-mercer-county-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "A Dentist for Mercer County, NJ Families". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Mercer County, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Mercer County, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **No town or ZIP terms in headings or body copy.** Town names appear only as link anchors in the "Town Pages" list. Bridges are named without town names (the US-1 toll bridge is called "the US-1 toll bridge").
- **Links all six NJ town pages** (Trenton, Ewing, Hopewell, Hamilton, Lawrenceville, Pennington). The brief says five; six exist, so all six are linked.
- **Conditional links (go live only if the page is built):** `/dental-implants-mercer-county-nj/`, `/emergency-dentist-trenton-nj/` and `/invisalign-trenton-nj/`. If a target is not live at launch, remove that link and keep the plain service link beside it.
- **Emergency safety line** must stay visible.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Mercer County towns linked on the page | US-1, I-295, Washington Crossing Bridge | 15-25 min (range across the NJ town rows) | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-mercer-county-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-mercer-county-nj/",
      "name": "Dentist near Mercer County, NJ | Radiant Smiles",
      "description": "Mercer County, NJ families: family, implant and emergency care, most towns about 15-25 minutes across the river. Saturday hours. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-mercer-county-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-mercer-county-nj/#breadcrumb",
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
          "name": "Areas We Serve",
          "item": "https://www.radiant-smiles.com/areas-we-serve/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mercer County, NJ",
          "item": "https://www.radiant-smiles.com/dentist-mercer-county-nj/"
        }
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://www.radiant-smiles.com/#dentist",
      "name": "Radiant Smiles @ Floral Vale",
      "url": "https://www.radiant-smiles.com/",
      "telephone": "+1-215-860-4600",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 Floral Vale Boulevard",
        "addressLocality": "Yardley",
        "addressRegion": "PA",
        "postalCode": "19067",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Mercer County, New Jersey",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable. Text matches the visible FAQ word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/dentist-mercer-county-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-mercer-county-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is your office from Mercer County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 15 to 25 minutes from most Mercer County towns with their own page, depending on traffic. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, just across the Delaware River in Pennsylvania, and every route is a single crossing, most often the Scudder Falls Bridge on I-295, the US-1 toll bridge or the toll-free Calhoun Street Bridge."
          }
        },
        {
          "@type": "Question",
          "name": "Does every part of Mercer County have its own page?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not every part. Six Mercer County towns have their own page on our site, linked above, with the route, local landmarks and answers to local questions. If your town isn't one of them, this page applies to you, and our team can help with directions when you call (215) 860-4600."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see dental emergencies from Mercer County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We keep same-day emergency appointments open every business day and see patients on Saturdays from 8 am to 2 pm. Call (215) 860-4600 as soon as you can. A focused 30-minute exam lets the dentist find the cause of the problem and begin treatment, and you'll know the plan and cost before anything further is done."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dental implants for Mercer County patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A single implant, abutment and crown is regularly $3,500, and our current offer takes $500 off, with a free consultation and second opinion. Treatment usually takes six to eight months from placement to final crown, and Saturday appointments can make the trips across the river easier to fit in."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- `"geo"` and `"hasMap"` on the Dentist node once the Google Business Profile pin and place ID are supplied (homepage first).
- `"sameAs"` links to the Google Business Profile and social profiles (homepage first).

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or areas change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
