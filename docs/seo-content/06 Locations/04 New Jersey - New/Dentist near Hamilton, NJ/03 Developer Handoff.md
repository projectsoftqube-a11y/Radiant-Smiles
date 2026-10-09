# Dentist near Hamilton, NJ: Developer Handoff

**URL:** `/dentist-hamilton-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Hamilton, NJ | Radiant Smiles</title>
<meta name="description" content="Hamilton, NJ dentist open Saturdays 8 am-2 pm, 20-25 minutes away: family check-ups, dentures and same-day denture repairs. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-hamilton-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Hamilton, NJ | Radiant Smiles">
<meta property="og:description" content="Hamilton, NJ dentist open Saturdays 8 am-2 pm, 20-25 minutes away: family check-ups, dentures and same-day denture repairs. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-hamilton-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Hamilton, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Hamilton, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Hamilton, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Hamilton Square, Mercerville and Yardville** are sections of this page, not their own pages. Always write "Hamilton, NJ" (several Hamiltons exist).
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Hamilton | US-1 / I-295 | 20-25 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-hamilton-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-hamilton-nj/",
      "name": "Dentist near Hamilton, NJ | Radiant Smiles",
      "description": "Hamilton, NJ dentist open Saturdays 8 am-2 pm, 20-25 minutes away: family check-ups, dentures and same-day denture repairs. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-hamilton-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-hamilton-nj/#breadcrumb",
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
          "name": "Hamilton, NJ",
          "item": "https://www.radiant-smiles.com/dentist-hamilton-nj/"
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
          "name": "Hamilton Square, NJ",
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
          "name": "Mercerville, NJ",
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
          "name": "Yardville, NJ",
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
      "@id": "https://www.radiant-smiles.com/dentist-hamilton-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-hamilton-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which parts of Hamilton do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All of Hamilton Township, NJ. Radiant Smiles @ Floral Vale welcomes patients from Hamilton Square, Mercerville, Yardville, White Horse, Groveville and every other part of the township. Our office in Lower Makefield Township, PA is about 20 to 25 minutes away via US-1 or I-295, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on Saturdays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We're open Saturdays from 8 am to 2 pm, as well as Monday to Friday, with Wednesday and Thursday hours running until 6 pm. Saturday appointments can cover check-ups and cleanings for the whole family, denture visits and urgent problems. Call (215) 860-4600 to book."
          }
        },
        {
          "@type": "Question",
          "name": "Can you repair a broken denture the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. We offer same-day denture repairs, so a cracked or broken denture can usually be fixed without a long wait. Call us as soon as it happens and describe the damage. If the denture no longer fits well, the dentist may recommend a reline or rebase instead."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept Delta Dental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Delta Dental is one of the many PPO plans we accept, along with Horizon Blue Cross, UnitedHealthcare and others. Your benefits depend on your specific plan, so call (215) 860-4600 with your member details before your visit and we'll check what's covered."
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
