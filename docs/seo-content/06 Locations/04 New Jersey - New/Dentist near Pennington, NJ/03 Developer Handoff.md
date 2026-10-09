# Dentist near Pennington, NJ: Developer Handoff

**URL:** `/dentist-pennington-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Pennington, NJ | Radiant Smiles</title>
<meta name="description" content="Pennington, NJ patients: calm, careful dentistry 20-25 minutes away, with headphones, digital scans and low-dose digital X-rays. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-pennington-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Pennington, NJ | Radiant Smiles">
<meta property="og:description" content="Pennington, NJ patients: calm, careful dentistry 20-25 minutes away, with headphones, digital scans and low-dose digital X-rays. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-pennington-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Pennington, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Pennington, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Pennington, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Short page by design** (small borough). Don't pad it with generic copy.
- **Technology claims** (iTero, digital X-rays, intraoral camera, sedation options) depend on [CONFIRM all current and in-house]. Remove any item the practice doesn't confirm.
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Pennington | I-295 / NJ-31 | 20-25 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-pennington-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-pennington-nj/",
      "name": "Dentist near Pennington, NJ | Radiant Smiles",
      "description": "Pennington, NJ patients: calm, careful dentistry 20-25 minutes away, with headphones, digital scans and low-dose digital X-rays. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-pennington-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-pennington-nj/#breadcrumb",
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
          "name": "Pennington, NJ",
          "item": "https://www.radiant-smiles.com/dentist-pennington-nj/"
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
          "name": "Pennington, NJ",
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
      "@id": "https://www.radiant-smiles.com/dentist-pennington-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-pennington-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which way do I drive from Pennington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NJ-31 south to I-295 at exit 72, then I-295 over the Scudder Falls Bridge into Pennsylvania. Scotch Road is another way onto I-295, at exit 73. The trip to our office takes about 20 to 25 minutes, depending on traffic, with a toll only in the Pennsylvania-bound direction."
          }
        },
        {
          "@type": "Question",
          "name": "I'm nervous about the dentist. What helps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Knowing what's coming helps most people. We explain each step before we start, you can listen to music on headphones throughout, and you can ask about the sedation options we offer. Tell us when you book that you're anxious, so the team knows before you arrive and can talk you through each step."
          }
        },
        {
          "@type": "Question",
          "name": "Do you take impressions with putty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, no. For crowns and clear aligners we use an iTero intraoral scanner, a small wand that records a digital 3D model of your teeth, so there's no tray of impression material in your mouth. If a putty impression is ever needed for a particular case, the dentist will tell you beforehand."
          }
        },
        {
          "@type": "Question",
          "name": "How much radiation do your X-rays use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Very little. Our digital X-rays use about one-sixth the radiation of conventional film X-rays, and the exposure time is roughly half as long. The images go straight to a computer screen, so the dentist can show you what they see and explain it before any treatment is planned."
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
