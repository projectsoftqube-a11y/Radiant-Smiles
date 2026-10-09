# Dentist near Morrisville, PA: Developer Handoff

**URL:** `/dentist-morrisville-pa/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Morrisville, PA | Radiant Smiles</title>
<meta name="description" content="Morrisville, PA dentist 5-10 minutes away: same-day emergency slots every business day, Saturday hours and family care. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-morrisville-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Morrisville, PA | Radiant Smiles">
<meta property="og:description" content="Morrisville, PA dentist 5-10 minutes away: same-day emergency slots every business day, Saturday hours and family care. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-morrisville-pa/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Morrisville, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Morrisville, PA.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Morrisville, PA`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **No ZIP code on this page.** Morrisville shares 19067 with the homepage's target; the ZIP appears only inside the NAP.
- **Emergency safety line** under "Same-Day Help" must stay visible (not in an accordion).
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Morrisville | US-1 / Pennsylvania Ave | 5-10 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-morrisville-pa/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-morrisville-pa/",
      "name": "Dentist near Morrisville, PA | Radiant Smiles",
      "description": "Morrisville, PA dentist 5-10 minutes away: same-day emergency slots every business day, Saturday hours and family care. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-morrisville-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-morrisville-pa/#breadcrumb",
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
          "name": "Morrisville, PA",
          "item": "https://www.radiant-smiles.com/dentist-morrisville-pa/"
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
          "name": "Morrisville, PA",
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
      "@id": "https://www.radiant-smiles.com/dentist-morrisville-pa/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-morrisville-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is your office in Morrisville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but it's close. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard in Lower Makefield Township, which borders Morrisville to the north, and our mailing address reads Yardley, PA. From most of the borough, the drive is about 5 to 10 minutes via US-1 or Pennsylvania Avenue, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Can I be seen the same day for a broken tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, yes. We hold same-day emergency appointments every business day and see patients on Saturday mornings from 8 am to 2 pm. A focused 30-minute exam lets the dentist find the problem and start treatment. Call (215) 860-4600 as early in the day as you can for the soonest slot."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if a tooth is knocked out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Act quickly. Keep the tooth moist, preferably in milk or your own saliva, and call us right away at (215) 860-4600 so we can get you in. From Morrisville the drive is about 5 to 10 minutes, depending on traffic, so you can usually reach us soon after you call."
          }
        },
        {
          "@type": "Question",
          "name": "Can you replace a lost filling quickly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Call and tell us what happened, and we'll look for the earliest appointment, including same-day emergency slots. A lost filling is usually replaced with a tooth-colored composite filling. If the tooth is too weak for a filling, the dentist may recommend a crown, which usually takes two visits."
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
