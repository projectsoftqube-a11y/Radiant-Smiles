# Dentist near Ewing, NJ: Developer Handoff

**URL:** `/dentist-ewing-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Ewing, NJ | Radiant Smiles</title>
<meta name="description" content="Ewing, NJ dentist 15-20 minutes over the Scudder Falls Bridge: gum care, cleanings and visits until 6 pm Wed and Thu. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-ewing-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Ewing, NJ | Radiant Smiles">
<meta property="og:description" content="Ewing, NJ dentist 15-20 minutes over the Scudder Falls Bridge: gum care, cleanings and visits until 6 pm Wed and Thu. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-ewing-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Ewing, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Ewing, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Ewing, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **West Trenton** is a section (H2) of this page, not its own page.
- **Hours shown:** Wednesday and Thursday 9 am to 6 pm, Saturday 8 am to 2 pm. Keep in sync with the homepage hours.
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Ewing / West Trenton | I-295 (Scudder Falls Bridge) | 15-20 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-ewing-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-ewing-nj/",
      "name": "Dentist near Ewing, NJ | Radiant Smiles",
      "description": "Ewing, NJ dentist 15-20 minutes over the Scudder Falls Bridge: gum care, cleanings and visits until 6 pm Wed and Thu. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-ewing-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-ewing-nj/#breadcrumb",
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
          "name": "Ewing, NJ",
          "item": "https://www.radiant-smiles.com/dentist-ewing-nj/"
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
          "name": "Ewing Township, NJ",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Mercer County, New Jersey",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        },
        {
          "@type": "Place",
          "name": "West Trenton, NJ",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Mercer County, New Jersey",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
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
      "@id": "https://www.radiant-smiles.com/dentist-ewing-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-ewing-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a toll on the Scudder Falls Bridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but only one way. The Scudder Falls Bridge on I-295 charges an electronic toll in the Pennsylvania-bound direction, paid by E-ZPass or Toll-by-Plate, with no cash booths. Driving home from our office to Ewing is toll-free. The full trip takes about 15 to 20 minutes, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see patients from West Trenton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. West Trenton is part of Ewing Township, and Radiant Smiles @ Floral Vale welcomes new patients from the area. From West Trenton, Bear Tavern Road leads to I-295 and the Scudder Falls Bridge, and our office is about 15 to 20 minutes away, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book an appointment after work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, on Wednesdays and Thursdays. The office is open from 9 am to 6 pm on those days, which leaves time to drive from Ewing after a standard workday. We're also open Saturdays from 8 am to 2 pm. Call (215) 860-4600 to find a late slot."
          }
        },
        {
          "@type": "Question",
          "name": "What happens at a deep cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A deep cleaning treats gum disease below the gum line. After an exam and any X-rays, the dentist may numb the area, removes tartar with an ultrasonic scaler, then smooths the root surfaces so the gums can heal. In deeper pockets, an antibiotic such as Arestin may be placed."
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
