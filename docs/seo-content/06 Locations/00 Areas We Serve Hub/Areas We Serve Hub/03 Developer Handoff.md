# Areas We Serve: Developer Handoff

**URL:** `/areas-we-serve/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Areas We Serve | PA & NJ Dentist | Radiant Smiles</title>
<meta name="description" content="Radiant Smiles @ Floral Vale welcomes patients from Morrisville, Washington Crossing, Trenton, Ewing, Hamilton and other PA and NJ towns nearby.">
<link rel="canonical" href="https://www.radiant-smiles.com/areas-we-serve/">
<meta property="og:type" content="website">
<meta property="og:title" content="Areas We Serve | PA & NJ Dentist | Radiant Smiles">
<meta property="og:description" content="Radiant Smiles @ Floral Vale welcomes patients from Morrisville, Washington Crossing, Trenton, Ewing, Hamilton and other PA and NJ towns nearby.">
<meta property="og:url" content="https://www.radiant-smiles.com/areas-we-serve/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Areas We Serve on Both Sides of the Delaware". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `areas-we-serve`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Conditional links (go live only if the page is built):** `/emergency-dentist-trenton-nj/`, `/dental-implants-mercer-county-nj/` and `/invisalign-trenton-nj/` in "Care People Travel For". If a target is not live at launch, remove that link (keep the plain service link beside it) until the page is published. `/invisalign-trenton-nj/` also depends on the practice confirming it is a certified Invisalign provider.
- **Location cards:** render the 11 town cards as a crawlable list grouped under the two H2s (Pennsylvania, New Jersey). Every card links to its town page; add a matching `Areas We Serve` link back from each town page's final CTA.
- **Hours line:** print exactly as written (Monday to Saturday, Wed/Thu until 6 pm, Sat 8 am to 2 pm, closed Sunday). Don't print Tuesday hours until the practice confirms them (site shows "5:00 AM").
- **Bridge facts** (toll direction, weight/height limits) come from DRJTBC and Wikipedia, checked 7 Oct 2026. Don't add toll amounts.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Lower Makefield | local roads | within about 10 min (fact sheet 0-10) | [ ] Checked in Google Maps on ____ |
| Morrisville | US-1 / Pennsylvania Ave | 5-10 min | [ ] Checked in Google Maps on ____ |
| Washington Crossing, PA | PA-32 (River Rd) and I-295 | 15-20 min | [ ] Checked in Google Maps on ____ |
| New Hope | PA-32 / I-295 | 25-30 min | [ ] Checked in Google Maps on ____ |
| Trenton | US-1 toll bridge or Calhoun St Bridge | about 15 min | [ ] Checked in Google Maps on ____ |
| Ewing / West Trenton | I-295 (Scudder Falls Bridge) | 15-20 min | [ ] Checked in Google Maps on ____ |
| Hopewell / Titusville | Washington Crossing Bridge / NJ-29 | 15-20 min | [ ] Checked in Google Maps on ____ |
| Hamilton | US-1 / I-295 | 20-25 min | [ ] Checked in Google Maps on ____ |
| Lawrenceville | US-1 / I-295 | 20-25 min | [ ] Checked in Google Maps on ____ |
| Pennington | NJ-31 / I-295 | 20-25 min | [ ] Checked in Google Maps on ____ |
| Mercer County (range) | as above | 15-25 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: CollectionPage + ItemList + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for every area in the hub and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.radiant-smiles.com/areas-we-serve/#webpage",
      "url": "https://www.radiant-smiles.com/areas-we-serve/",
      "name": "Areas We Serve | PA & NJ Dentist | Radiant Smiles",
      "description": "Radiant Smiles @ Floral Vale welcomes patients from Morrisville, Washington Crossing, Trenton, Ewing, Hamilton and other PA and NJ towns nearby.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/areas-we-serve/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/areas-we-serve/#locations"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/areas-we-serve/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/areas-we-serve/#locations",
      "name": "Areas We Serve",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://www.radiant-smiles.com/dentist-morrisville-pa/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.radiant-smiles.com/dentist-washington-crossing-pa/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://www.radiant-smiles.com/dentist-new-hope-pa/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://www.radiant-smiles.com/dentist-trenton-nj/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "url": "https://www.radiant-smiles.com/dentist-ewing-nj/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://www.radiant-smiles.com/dentist-hopewell-nj/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "url": "https://www.radiant-smiles.com/dentist-hamilton-nj/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "url": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "url": "https://www.radiant-smiles.com/dentist-pennington-nj/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "url": "https://www.radiant-smiles.com/dentist-mercer-county-nj/"
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
          "name": "Lower Makefield Township, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City",
          "name": "Morrisville, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
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
        },
        {
          "@type": "City",
          "name": "New Hope, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City",
          "name": "Trenton, NJ",
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
          "@type": "AdministrativeArea",
          "name": "Hamilton Township, NJ",
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
          "name": "Lawrenceville, NJ",
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
          "name": "Pennington, NJ",
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
      "@id": "https://www.radiant-smiles.com/areas-we-serve/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/areas-we-serve/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which bridge should I use from New Jersey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on where you start. From Ewing, Pennington or Lawrenceville, I-295 over the Scudder Falls Bridge is usually most direct. From Trenton, use the US-1 toll bridge or the toll-free Calhoun Street Bridge. From Titusville and Washington Crossing, NJ, the Washington Crossing Bridge is toll-free. Google Maps will show the quickest option on the day."
          }
        },
        {
          "@type": "Question",
          "name": "Will I pay a toll coming from New Jersey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only on some bridges. The Scudder Falls (I-295) and Trenton-Morrisville (US-1) toll bridges charge in the Pennsylvania-bound direction, so you pay on the way to us and not on the way home. The Calhoun Street, Lower Trenton and Washington Crossing bridges are toll-free."
          }
        },
        {
          "@type": "Question",
          "name": "My town isn't listed. Can I still come to you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale welcomes new patients wherever they live; these pages simply cover the towns closest to our Lower Makefield Township office. Call (215) 860-4600 and our team will help you plan the trip and find an appointment time that suits you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use New Jersey dental insurance at a Pennsylvania dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. We accept many PPO plans, including Horizon Blue Cross and Delta Dental, whether you live in Pennsylvania or New Jersey. Benefits depend on your plan, so call before your visit and we'll check your coverage. Our accepted-plan list doesn't include NJ Medicaid or NJ FamilyCare."
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
