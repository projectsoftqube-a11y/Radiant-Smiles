# Dentist near New Hope, PA: Developer Handoff

**URL:** `/dentist-new-hope-pa/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near New Hope, PA | Radiant Smiles</title>
<meta name="description" content="New Hope, PA patients: whitening, veneers and bonding about 25-30 minutes away, planned to keep trips few. Saturday hours. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-new-hope-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near New Hope, PA | Radiant Smiles">
<meta property="og:description" content="New Hope, PA patients: whitening, veneers and bonding about 25-30 minutes away, planned to keep trips few. Saturday hours. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-new-hope-pa/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near New Hope, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › New Hope, PA.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `New Hope, PA`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Offer prices** (teeth whitening $100 off, regular $550) must match `/special-offers/`. Remove or update together if the offer ends.
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| New Hope | PA-32 (River Rd) / I-295 | 25-30 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-new-hope-pa/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-new-hope-pa/",
      "name": "Dentist near New Hope, PA | Radiant Smiles",
      "description": "New Hope, PA patients: whitening, veneers and bonding about 25-30 minutes away, planned to keep trips few. Saturday hours. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-new-hope-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-new-hope-pa/#breadcrumb",
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
          "name": "New Hope, PA",
          "item": "https://www.radiant-smiles.com/dentist-new-hope-pa/"
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
          "@type": "City",
          "name": "New Hope, PA",
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
      "@id": "https://www.radiant-smiles.com/dentist-new-hope-pa/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-new-hope-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a 25 to 30 minute drive practical for cosmetic work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most cosmetic treatments, yes. Take-home whitening usually takes a couple of short visits, an impression and then collecting your trays; bonding is often done in one visit; and a veneer consultation sets out each step and how many visits to expect. Saturday and Wednesday or Thursday afternoon times help you fit the drive in."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does take-home whitening need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually just a couple. We take an impression at your first visit, and the custom trays are ready in a day or two. You then wear them at home for about 3 to 4 hours a night for one to two weeks. We check the result at your next appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Which route should I take from New Hope?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PA-32 south along River Road, then I-295, which takes about 25 to 30 minutes depending on traffic. The route stays in Pennsylvania, so there's no bridge or toll. For an early Saturday appointment, check Google Maps before you leave in case River Road is busy."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a cosmetic consultation on a Saturday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We're open Saturdays from 8 am to 2 pm, and a consultation about whitening, bonding or veneers can be booked then. Call (215) 860-4600 and mention which treatment you're interested in, so we can plan enough time for the conversation and any X-rays a new patient needs."
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
