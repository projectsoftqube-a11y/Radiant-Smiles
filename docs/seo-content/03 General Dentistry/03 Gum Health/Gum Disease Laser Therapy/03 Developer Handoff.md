# Gum Disease Laser Therapy: Developer Handoff

**URL:** `/preventative-care/gum-disease-laser-therapy/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Laser Gum Treatment in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Laser gum treatment in Yardley, PA: a dental laser removes infected gum tissue, often with little bleeding or swelling. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/">
<meta property="og:type" content="website">
<meta property="og:title" content="Laser Gum Treatment in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Laser gum treatment in Yardley, PA: a dental laser removes infected gum tissue, often with little bleeding or swelling. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Laser Gum Treatment in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Gum Disease Laser Therapy.
- **Do not name a laser brand or model** anywhere (copy, alt text, schema, file names) until the practice confirms it.
- **Never describe the practice or dentists as periodontists or gum specialists.** Don't add claims about gum disease being less likely to return.
- **No prices:** none are published.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist using a dental laser to treat gum tissue at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (laser gum treatment), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/",
      "name": "Laser Gum Treatment in Yardley, PA | Radiant Smiles",
      "description": "Laser gum treatment in Yardley, PA: a dental laser removes infected gum tissue, often with little bleeding or swelling. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#breadcrumb",
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
          "name": "Preventive Care",
          "item": "https://www.radiant-smiles.com/preventative-care/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gum Disease Laser Therapy",
          "item": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#procedure",
      "name": "Laser gum treatment",
      "alternateName": "Gum disease laser therapy",
      "description": "Laser gum treatment uses a focused dental laser to remove infected gum tissue and clean the area around your teeth, without a scalpel or drill.",
      "url": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/"
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only while the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does laser gum treatment hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser gum treatment is usually comfortable, because the area is numbed first, and often a light anesthetic spray is all that's needed. There's no drill noise or vibration. Your gums may feel tender for a short time afterwards. If you're anxious, tell us before we start and ask about sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "How is laser gum treatment different from a deep cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A deep cleaning removes tartar and bacteria from below the gumline and smooths the root surfaces. Laser gum treatment uses a dental laser to remove infected gum tissue and help disinfect the area. The dentist at Radiant Smiles @ Floral Vale may recommend one or both, depending on your gums."
          }
        },
        {
          "@type": "Question",
          "name": "How long does recovery take after laser gum treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery is usually quick, and many patients get back to their usual routine soon after. Your gums may feel tender for a short time. Brush gently, follow your aftercare instructions and keep your follow-up visits so the dentist can check your healing."
          }
        },
        {
          "@type": "Question",
          "name": "Is laser gum treatment covered by insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coverage depends on your dental plan. Many plans cover some treatment for gum disease, but what they pay varies. Radiant Smiles @ Floral Vale accepts many PPO plans, so call (215) 860-4600 and we'll check your coverage and explain the cost before treatment starts."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
