# Dentist near Hopewell, NJ: Developer Handoff

**URL:** `/dentist-hopewell-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Hopewell, NJ | Radiant Smiles</title>
<meta name="description" content="Hopewell, NJ patients: implants and dentures across the toll-free Washington Crossing Bridge, with a free implant consult. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-hopewell-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Hopewell, NJ | Radiant Smiles">
<meta property="og:description" content="Hopewell, NJ patients: implants and dentures across the toll-free Washington Crossing Bridge, with a free implant consult. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-hopewell-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Hopewell, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Hopewell, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Hopewell, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Titusville and Washington Crossing, NJ** are a section (H2) of this page. Hopewell Borough is mentioned; no drive time is printed for it until checked in Google Maps.
- **Implant offer** ($500 off, regular $3,500 for implant, abutment and crown; free consultation and second opinion) must match `/special-offers/`.
- **Don't link** the conditional service+location pages from this page (including the Mercer County implant page).

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Titusville / Washington Crossing NJ | Washington Crossing Bridge / NJ-29 | 15-20 min | [ ] Checked in Google Maps on ____ |
| Hopewell Borough | not in fact sheet | no number printed; page says 'longer' | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-hopewell-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-hopewell-nj/",
      "name": "Dentist near Hopewell, NJ | Radiant Smiles",
      "description": "Hopewell, NJ patients: implants and dentures across the toll-free Washington Crossing Bridge, with a free implant consult. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-hopewell-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-hopewell-nj/#breadcrumb",
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
          "name": "Hopewell, NJ",
          "item": "https://www.radiant-smiles.com/dentist-hopewell-nj/"
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
          "name": "Hopewell Township, NJ",
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
          "@type": "City",
          "name": "Hopewell, NJ",
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
          "name": "Titusville, NJ",
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
          "name": "Washington Crossing, NJ",
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
      "@id": "https://www.radiant-smiles.com/dentist-hopewell-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-hopewell-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a toll on the Washington Crossing Bridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Washington Crossing Bridge between Washington Crossing, NJ and Washington Crossing, PA is toll-free in both directions. It carries cars and light vehicles up to 3 tons. From Titusville, the drive to our office is about 15 to 20 minutes, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the drive from Hopewell Borough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Longer than from Titusville. Hopewell Borough is farther from the river than Titusville, so allow extra time beyond the 15 to 20 minutes it takes from the Titusville side, depending on traffic. Check Google Maps on the day; we're happy to suggest a Saturday or later weekday slot."
          }
        },
        {
          "@type": "Question",
          "name": "What does a dental implant cost here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single implant, abutment and crown is regularly $3,500, and our current offer takes $500 off. The consultation and second opinion are free, so you can find out whether an implant suits you, and what your insurance may cover, before you decide. Call (215) 860-4600 to book."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a second opinion on an implant plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and it's free. Bring any X-rays or treatment plan you've been given, and the dentist will examine you, review your health history and explain the options, including implants, implant-retained dentures and conventional dentures. There's no pressure to decide at that visit."
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
