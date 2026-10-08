# Arestin: Developer Handoff

**URL:** `/preventative-care/arestin/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Arestin in Yardley, PA | Antibiotic Gum Treatment</title>
<meta name="description" content="Arestin in Yardley, PA: an antibiotic placed directly into infected gum pockets after a deep cleaning to help treat gum disease. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/arestin/">
<meta property="og:type" content="website">
<meta property="og:title" content="Arestin in Yardley, PA | Antibiotic Gum Treatment">
<meta property="og:description" content="Arestin in Yardley, PA: an antibiotic placed directly into infected gum pockets after a deep cleaning to help treat gum disease. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/arestin/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Arestin in Yardley, PA: Antibiotic Gum Treatment". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Arestin.
- **Trademark:** show "Arestin®" with the ® on first mention in the hero; plain "Arestin" afterwards.
- **External link:** link "Memorial Sloan Kettering Cancer Center's patient information" to https://www.mskcc.org/cancer-care/patient-education/medications/adult/minocycline-hydrochloride-periodontal-microspheres (`rel="noopener"`).
- **No doses, no study citations, no "significantly better results" claims.** Never describe the practice as periodontists.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist placing Arestin into a gum pocket after a deep cleaning at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalTherapy (Arestin) with a Drug node (non-proprietary name minocycline hydrochloride), plus BreadcrumbList. No doses anywhere. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/arestin/",
      "name": "Arestin in Yardley, PA | Antibiotic Gum Treatment",
      "description": "Arestin in Yardley, PA: an antibiotic placed directly into infected gum pockets after a deep cleaning to help treat gum disease. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#therapy"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#breadcrumb",
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
          "name": "Arestin",
          "item": "https://www.radiant-smiles.com/preventative-care/arestin/"
        }
      ]
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#therapy",
      "name": "Arestin (minocycline hydrochloride microspheres)",
      "description": "Arestin® is an antibiotic made of tiny minocycline microspheres that the dentist places directly into infected gum pockets after a deep cleaning.",
      "url": "https://www.radiant-smiles.com/preventative-care/arestin/",
      "drug": {
        "@type": "Drug",
        "name": "Arestin",
        "nonProprietaryName": "minocycline hydrochloride"
      }
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
      "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/arestin/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Arestin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arestin is an antibiotic made of minocycline hydrochloride microspheres. After a deep cleaning, the dentist at Radiant Smiles @ Floral Vale places it directly into infected gum pockets, where it helps kill the bacteria that cause gum disease. It works on the infected area itself instead of being swallowed as a pill."
          }
        },
        {
          "@type": "Question",
          "name": "Does Arestin treatment hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arestin is placed at the end of a deep cleaning, when the area may already be numbed with local anesthetic. The medicine is placed directly into the gum pocket, so there's no pill to swallow. If you're anxious about your deep cleaning, ask about sedation options before you start."
          }
        },
        {
          "@type": "Question",
          "name": "What should I avoid after Arestin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Avoid chewing hard, crunchy or sticky foods, such as carrots, taffy and gum, with the treated teeth for 1 week, and don't touch the treated area. Follow the dentist's instructions on when to brush and floss near the treated teeth, so the medicine can stay in place and work."
          }
        },
        {
          "@type": "Question",
          "name": "Is Arestin covered by insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your dental plan. Some plans cover Arestin and others don't, and your cost depends on how many pockets are treated. Radiant Smiles @ Floral Vale accepts many PPO plans, so call (215) 860-4600 and we'll check your coverage before treatment."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
