# Why Choose Us: Developer Handoff

**URL:** `/patient-information/why-choose-us/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Why Choose Our Yardley Dentists | Radiant Smiles</title>
<meta name="description" content="Two Temple-trained Yardley dentists, dental microscopes, Saturday hours and clear prices before treatment. See why patients choose Radiant Smiles.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/why-choose-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="Why Choose Our Yardley Dentists | Radiant Smiles">
<meta property="og:description" content="Two Temple-trained Yardley dentists, dental microscopes, Saturday hours and clear prices before treatment. See why patients choose Radiant Smiles.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/why-choose-us/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Why Patients Choose Our Yardley Dentists". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Why Choose Us.
- **Reviews:** show the three quotes as plain text with first name, last initial and month ("Candice C.", "Avni D.", "Bob M.", the same format as Home and Patient Reviews), exactly as written (the typos are the reviewer's own; don't correct them). **No Review or AggregateRating markup.** Don't display the "4.14 out of 5" widget figure until the practice confirms its source.
- **Doctor photos:** if used, alt text "Dr. Urvishkumar Bhalala, DMD, Radiant Smiles @ Floral Vale, Yardley, PA" and "Dr. Jaspreet Gadria, DMD, Radiant Smiles @ Floral Vale, Yardley, PA".
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track the reviews link (`click_reviews`).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/why-choose-us/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/why-choose-us/",
      "name": "Why Choose Our Yardley Dentists | Radiant Smiles",
      "description": "Two Temple-trained Yardley dentists, dental microscopes, Saturday hours and clear prices before treatment. See why patients choose Radiant Smiles.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/why-choose-us/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/why-choose-us/#breadcrumb",
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
          "name": "Why Choose Us",
          "item": "https://www.radiant-smiles.com/patient-information/why-choose-us/"
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
      "@id": "https://www.radiant-smiles.com/patient-information/why-choose-us/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/why-choose-us/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Radiant Smiles @ Floral Vale different from other Yardley dentists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Radiant Smiles @ Floral Vale combines two Temple-trained dentists, dental microscopes for precise restorations and Saturday hours in one Yardley office. Prices are explained before any treatment, and patients without insurance can use an $89 new patient visit and a $150 yearly membership plan."
          }
        },
        {
          "@type": "Question",
          "name": "Who are the dentists at Radiant Smiles @ Floral Vale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, both graduated from Temple University's Kornberg School of Dentistry. Dr. Gadria earned her DMD with high honors and focuses on general, cosmetic and restorative dentistry. Both dentists see patients at the same Yardley office."
          }
        },
        {
          "@type": "Question",
          "name": "Do you refer patients to other providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when it's in your interest. Most general, cosmetic and restorative care is handled in our Yardley office. If you need treatment we don't provide, we refer you to a provider we have vetted, and we can send your digital X-rays and records so you don't start from scratch."
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

The schema is generated from the page copy. If the title, meta description, FAQs, reviews or doctor details change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
