# Teeth Cleaning & Checkups: Developer Handoff

**URL:** `/preventative-care/teeth-cleaning-and-check-ups/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Cleaning in Yardley, PA | Checkups & X-Rays</title>
<meta name="description" content="Dental cleaning, exams and digital X-rays in Yardley, PA. No insurance? Your first visit is $89, with cleaning, X-rays and exam. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Cleaning in Yardley, PA | Checkups & X-Rays">
<meta property="og:description" content="Dental cleaning, exams and digital X-rays in Yardley, PA. No insurance? Your first visit is $89, with cleaning, X-rays and exam. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Cleaning in Yardley, PA: Checkups, Exams and X-Rays". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Teeth Cleaning & Checkups.
- **301 redirect into this page:** `/preventative-care/dental-exam/` → `/preventative-care/teeth-cleaning-and-check-ups/`. The old exam page's content (what the exam includes, twice-yearly visits, insurance covering two visits) is now in "What Happens at a Checkup" and the cost section. Update internal links that pointed at the old URL.
- **High-priority page:** "teeth cleaning near me" is 60.5K/mo at KD 6. Keep the $89 bullet and both buttons in the first screen on mobile.
- **Cost table:** keep the prices as text in the table, never as an image. The $89 offer links to `/special-offers/`.
- **Offer wording:** always "$89 ... for a cleaning, X-rays and exam" with "new patient" and "without insurance" nearby. Don't shorten it to "$89 cleaning".
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Hygienist polishing a patient's teeth during a dental cleaning at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`) and clicks on the special-offers link (`click_offer`), so conversions from this page can be measured.
- **Review quote:** the Avni D. quote after "What Happens at a Checkup" is plain text. No `Review` or `AggregateRating` markup.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (dental cleaning and checkup), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/",
      "name": "Dental Cleaning in Yardley, PA | Checkups & X-Rays",
      "description": "Dental cleaning, exams and digital X-rays in Yardley, PA. No insurance? Your first visit is $89, with cleaning, X-rays and exam. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#procedure"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#breadcrumb",
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
          "name": "Teeth Cleaning & Checkups",
          "item": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#procedure",
      "name": "Dental cleaning and checkup",
      "alternateName": "Dental exam and cleaning",
      "description": "A dental cleaning in Yardley at Radiant Smiles @ Floral Vale includes an exam of your teeth and gums, an oral cancer screening, digital X-rays when you're due, and a professional cleaning that removes the plaque and tartar brushing misses.",
      "url": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should you get your teeth cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most people should have their teeth cleaned twice a year. That routine removes tartar before it irritates the gums and lets the dentist catch decay early. If you have gum disease or get cavities often, your dentist may recommend cleanings more often than every six months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a dental cleaning take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regular dental cleaning and checkup at Radiant Smiles @ Floral Vale takes about an hour. A new patient visit usually takes a little longer, because it includes a full history, X-rays and a complete exam of your teeth and gums before your cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental X-rays safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dental X-rays use a very low dose of radiation, and digital X-rays use a fraction of the radiation of older film X-rays. The dentist only takes them when they're needed, based on your history and risk, and the images appear on screen in seconds so you can see them too."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a teeth cleaning without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New patients without insurance pay $89 for a cleaning, X-rays and an exam at Radiant Smiles @ Floral Vale. After that, our in-office membership plan is $150 a year and covers 2 cleanings, exams and X-rays, plus 15% off any dental treatment you need."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover dental cleanings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most dental insurance plans cover cleanings, and many cover two visits a year. Exactly what's covered depends on your plan. We accept many PPO plans, so call (215) 860-4600 with your insurance details and we'll check your coverage before your appointment."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs, prices change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
