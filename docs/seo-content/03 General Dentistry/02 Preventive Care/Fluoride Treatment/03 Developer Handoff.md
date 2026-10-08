# Fluoride Treatment: Developer Handoff

**URL:** `/preventative-care/fluoride/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Fluoride Treatment in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Professional fluoride treatment in Yardley, PA to strengthen enamel for kids and adults prone to cavities or dry mouth. Takes minutes. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/fluoride/">
<meta property="og:type" content="website">
<meta property="og:title" content="Fluoride Treatment in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Professional fluoride treatment in Yardley, PA to strengthen enamel for kids and adults prone to cavities or dry mouth. Takes minutes. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/fluoride/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Fluoride Treatment in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Fluoride Treatment.
- **Don't add "varnish", "gel" or "foam"** to the copy or alt text until the practice confirms which form it uses.
- **No prices** for fluoride: none are published.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Child having a fluoride treatment at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (professional fluoride treatment), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/fluoride/",
      "name": "Fluoride Treatment in Yardley, PA | Radiant Smiles",
      "description": "Professional fluoride treatment in Yardley, PA to strengthen enamel for kids and adults prone to cavities or dry mouth. Takes minutes. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#procedure"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#breadcrumb",
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
          "name": "Fluoride Treatment",
          "item": "https://www.radiant-smiles.com/preventative-care/fluoride/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#procedure",
      "name": "Professional fluoride treatment",
      "description": "A professional fluoride treatment is a high-concentration fluoride applied directly to your teeth to strengthen the enamel and help it resist decay.",
      "url": "https://www.radiant-smiles.com/preventative-care/fluoride/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/fluoride/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is fluoride treatment necessary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for everyone. Fluoride treatment is most useful for people at higher risk of cavities: children with newly erupted permanent teeth, adults who get cavities often, and anyone with dry mouth or gum recession. Your dentist at Radiant Smiles @ Floral Vale will explain whether fluoride would help your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a fluoride treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional fluoride treatment takes just a few minutes. It's usually done right after your cleaning, as part of a regular checkup. The fluoride is applied directly to your teeth, with no drilling or numbing, and you'll be told how long to wait before eating or drinking."
          }
        },
        {
          "@type": "Question",
          "name": "Is professional fluoride safe for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when it's applied by the dental team. Professional fluoride is used in a small, measured amount, applied directly to the teeth and not swallowed. Let the dentist know if your child takes fluoride tablets or drops, so the total amount your child gets can be taken into account."
          }
        },
        {
          "@type": "Question",
          "name": "Can adults get fluoride treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adults who get cavities often, have receding gums or have dry mouth from a health condition or medication can all benefit from professional fluoride. It strengthens the enamel and exposed root surfaces, which helps them resist decay between your regular cleanings."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
