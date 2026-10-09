# Dentist near Washington Crossing, PA: Developer Handoff

**URL:** `/dentist-washington-crossing-pa/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Washington Crossing, PA | Radiant Smiles</title>
<meta name="description" content="Washington Crossing, PA dentist 15-20 minutes down River Road: crowns and onlays fitted under dental microscopes, plus root canals. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-washington-crossing-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Washington Crossing, PA | Radiant Smiles">
<meta property="og:description" content="Washington Crossing, PA dentist 15-20 minutes down River Road: crowns and onlays fitted under dental microscopes, plus root canals. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-washington-crossing-pa/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Washington Crossing, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Washington Crossing, PA.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Washington Crossing, PA`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Upper Makefield Township** is a section (H2) of this page, not its own page. The NJ side of Washington Crossing is on `/dentist-hopewell-nj/` (linked).
- **Review quote** (Candice Coverdale, 11 Sep 2026) is shown as plain text with name and date. No Review markup.
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Washington Crossing, PA | PA-32 (River Rd) and I-295 | 15-20 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/",
      "name": "Dentist near Washington Crossing, PA | Radiant Smiles",
      "description": "Washington Crossing, PA dentist 15-20 minutes down River Road: crowns and onlays fitted under dental microscopes, plus root canals. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/#breadcrumb",
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
          "name": "Washington Crossing, PA",
          "item": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/"
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
          "@type": "Place",
          "name": "Washington Crossing, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Upper Makefield Township, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
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
      "@id": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve all of Upper Makefield Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale welcomes patients from every part of Upper Makefield Township, including Washington Crossing, Buckmanville, Dolington, Jericho, Lizette, Lurgan and Woodhill. Our office at 117 Floral Vale Boulevard is about 15 to 20 minutes from Washington Crossing via River Road and I-295, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How many trips does a crown take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two. At the first visit, the dentist prepares the tooth and fits a temporary crown; at the second, the final crown is fitted, adjusted and cemented. From Washington Crossing that means two drives of about 15 to 20 minutes each, depending on traffic, and Saturday morning appointments are available."
          }
        },
        {
          "@type": "Question",
          "name": "I live on the New Jersey side of Washington Crossing. Which page is mine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Hopewell, NJ page. Washington Crossing, NJ and Titusville are part of Hopewell Township in Mercer County, on the other side of the toll-free Washington Crossing Bridge. That page covers the route from the New Jersey side, the drive time and the services patients there ask about."
          }
        },
        {
          "@type": "Question",
          "name": "Why do you use a dental microscope?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For precision. A high-power dental microscope, similar to the one an ophthalmologist uses, lets the dentist see the edges of a filling, crown or onlay at magnification. That helps us check the fit and finish of each restoration before it's cemented, rather than relying on the naked eye."
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
