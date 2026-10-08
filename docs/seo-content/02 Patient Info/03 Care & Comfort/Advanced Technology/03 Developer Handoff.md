# Advanced Technology: Developer Handoff

**URL:** `/patient-information/care-and-comfort/advanced-technology/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>CBCT Scan in Yardley, PA | Advanced Dental Technology</title>
<meta name="description" content="Need a CBCT scan in Yardley? Radiant Smiles @ Floral Vale uses 3D cone beam CT, iTero digital scans, digital X-rays and dental microscopes. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/">
<meta property="og:type" content="website">
<meta property="og:title" content="CBCT Scan in Yardley, PA | Advanced Dental Technology">
<meta property="og:description" content="Need a CBCT scan in Yardley? Radiant Smiles @ Floral Vale uses 3D cone beam CT, iTero digital scans, digital X-rays and dental microscopes. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Advanced Dental Technology and CBCT Scans in Yardley". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Care & Comfort › Advanced Technology.
- **Images:** real photos of this office's CBCT unit, iTero scanner, microscopes and lasers only (alt text e.g. "Cone beam CT scanner at Radiant Smiles @ Floral Vale in Yardley, PA"). No manufacturer stock shots presented as this office's equipment. Don't name equipment brands beyond iTero until confirmed.
- **Trademark:** iTero is a trademark of Align Technology. Use "iTero" with the ® symbol on first mention in the body if the practice follows Align's brand guidelines.
- **Equipment status [CONFIRM]:** every item on this page (microscopes, CBCT, iTero, digital X-rays, intraoral camera, electric hand-pieces, lasers) is named because the current site names it. If the practice says any item is not in-house, remove that section before launch.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`).
- **301 redirects into this page:** `/patient-information/technology/` → `/patient-information/care-and-comfort/advanced-technology/`. Server-side permanent redirects (Next.js `redirects()` with `permanent: true` or at the host), with and without trailing slash. Remove the old URLs from the sitemap and update any internal links that pointed to them.

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/",
      "name": "CBCT Scan in Yardley, PA | Advanced Dental Technology",
      "description": "Need a CBCT scan in Yardley? Radiant Smiles @ Floral Vale uses 3D cone beam CT, iTero digital scans, digital X-rays and dental microscopes. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.radiant-smiles.com/patient-information/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Care & Comfort",
          "item": "https://www.radiant-smiles.com/patient-information/care-and-comfort/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Advanced Technology",
          "item": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. The question and answer text below is copied word for word from the visible FAQs; include it only while they stay identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a CBCT scan at the dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CBCT (cone beam computed tomography) scan is a 3D X-ray of your teeth, jaw bone and nearby structures. At Radiant Smiles @ Floral Vale in Yardley, the dentist uses CBCT images to plan treatment such as dental implants and some extractions, when a flat X-ray doesn't show enough detail."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a CBCT scan for a dental implant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dentist will recommend a scan if your treatment needs one. A 3D image shows the height and width of the jaw bone and the position of nearby nerves, which helps when planning where an implant goes. Implant consultations at our Yardley office are free under our current offer."
          }
        },
        {
          "@type": "Question",
          "name": "What is an iTero scanner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An iTero scanner is an intraoral scanner that takes a 3D digital impression of your teeth with a small handheld wand. It replaces trays of impression material, which can cause gagging, and the digital model helps the dentist assess misaligned teeth and plan smile designs and clear aligner treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Are digital X-rays safer than film X-rays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital X-rays need less radiation than conventional film X-rays. The image also appears on screen right away, so the dentist can zoom in on detail and talk you through what it shows at the same visit, instead of waiting for film to develop."
          }
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Review or AggregateRating markup for the practice's own reviews (self-serving reviews aren't eligible and risk a manual action).
- No `priceRange`, `award` or `hasCredential` values: the current site doesn't publish them.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs or equipment list change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
