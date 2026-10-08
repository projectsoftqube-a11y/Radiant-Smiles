# Infection Control: Developer Handoff

**URL:** `/patient-information/care-and-comfort/infection-control/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Infection Control | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="Dental infection control at Radiant Smiles @ Floral Vale in Yardley, PA: autoclave sterilization, surface disinfection and single-use disposable materials.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Infection Control | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="Dental infection control at Radiant Smiles @ Floral Vale in Yardley, PA: autoclave sterilization, surface disinfection and single-use disposable materials.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Infection Control and Sterilization". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Care & Comfort › Infection Control.
- **Agency names:** spell out OSHA, EPA and CDC as written. Don't link to the agencies' guideline pages unless the practice confirms which documents its protocol follows.
- **No safety badges or certifications** (e.g. "OSAP member", "CDC-compliant certified") unless the practice supplies proof.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/",
      "name": "Dental Infection Control | Radiant Smiles @ Floral Vale",
      "description": "Dental infection control at Radiant Smiles @ Floral Vale in Yardley, PA: autoclave sterilization, surface disinfection and single-use disposable materials.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/#breadcrumb",
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
          "name": "Infection Control",
          "item": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/"
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
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are dental instruments sterilized between patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. At Radiant Smiles @ Floral Vale, all reusable equipment, including dental hand-pieces, is sterilized before every use in an autoclave, which kills bacteria and viruses with steam, heat and pressure. Disposable materials are used once and thrown away, so they never pass from one patient to the next."
          }
        },
        {
          "@type": "Question",
          "name": "Which infection control guidelines does the office follow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Radiant Smiles @ Floral Vale in Yardley follows infection control guidelines from OSHA, the EPA and the CDC. These cover how instruments are sterilized, how surfaces are disinfected and how the team uses gloves, face masks and disposable materials. You're welcome to ask about any of these steps at your visit."
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

The schema is generated from the page copy. If the title, meta description, FAQs change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
