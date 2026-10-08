# Care & Comfort: Developer Handoff

**URL:** `/patient-information/care-and-comfort/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Comfortable Dentist in Yardley, PA | Care & Comfort</title>
<meta name="description" content="A comfortable dentist in Yardley, PA: bring headphones, ask about sedation options and hear every step explained before it starts. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/care-and-comfort/">
<meta property="og:type" content="website">
<meta property="og:title" content="Comfortable Dentist in Yardley, PA | Care & Comfort">
<meta property="og:description" content="A comfortable dentist in Yardley, PA: bring headphones, ask about sedation options and hear every step explained before it starts. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/care-and-comfort/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "A Comfortable Dentist in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Care & Comfort.
- **Parent page:** this URL is the parent of Advanced Technology, Infection Control and Home Care Instructions. Show those three as child links in the section navigation.
- **Sedation:** keep the wording as written ("ask about sedation options"). Don't list sedation types (nitrous oxide, IV sedation) until the practice confirms which are offered.
- **Technology list:** text only; equipment names match the Advanced Technology page.
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
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/",
      "name": "Comfortable Dentist in Yardley, PA | Care & Comfort",
      "description": "A comfortable dentist in Yardley, PA: bring headphones, ask about sedation options and hear every step explained before it starts. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/#breadcrumb",
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
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I listen to music during my dental treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale welcomes patients to bring headphones and listen to their own music during treatment. Music can help you relax and block out office sounds, especially during longer appointments such as crowns or root canals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer sedation for nervous patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask us. Radiant Smiles @ Floral Vale offers dental sedation options for anxious patients, and the dentist will talk through what's suitable for you and your treatment at your consultation. Telling us early that you feel nervous gives us time to plan your visit around it."
          }
        },
        {
          "@type": "Question",
          "name": "Will a digital impression make me gag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's much less likely. The iTero scanner takes a digital impression of your teeth with a small handheld scanner, so there's no tray of impression material, which is the part that can cause nausea or gagging. The scan also helps the dentist assess misaligned teeth and plan smile designs."
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

The schema is generated from the page copy. If the title, meta description, FAQs or technology list change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
