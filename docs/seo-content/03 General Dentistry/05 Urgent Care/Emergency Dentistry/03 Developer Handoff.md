# Emergency Dentistry: Developer Handoff

**URL:** `/emergency-dentistry/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Emergency Dentist in Yardley, PA | Same-Day Appointments</title>
<meta name="description" content="Toothache, broken or knocked-out tooth? Radiant Smiles @ Floral Vale keeps same-day emergency slots in Yardley, PA. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/emergency-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dentist in Yardley, PA | Same-Day Appointments">
<meta property="og:description" content="Toothache, broken or knocked-out tooth? Radiant Smiles @ Floral Vale keeps same-day emergency slots in Yardley, PA. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/emergency-dentistry/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Emergency Dentist in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Emergency Dentistry.
- **301 redirect into this page:** `/emergency-dentistry/emergency-dentist/` → `/emergency-dentistry/`. The old page's details (focused 30-minute exam, Saturday appointments, knocked-out tooth in milk or saliva, common emergencies) are all on this page now. Update internal links that pointed at the old URL.
- **Top opportunity:** "emergency dentist near me" is 135K/mo at KD 11. On mobile, the call button must be in the first screen, and a sticky "Call (215) 860-4600" bar is recommended on this page.
- **Emergency CTAs are call-only.** No appointment form in the hero or final CTA.
- **ER safety line** under the hero buttons stays visible (not collapsed) and in bold. The "When to Go to the ER Instead" section is general safety guidance; don't remove it.
- **Never add** "24/7", "open Sundays", "walk-ins welcome" or after-hours claims. The office is closed on Sundays.
- **Hours table:** hold the Tuesday row until the practice confirms "8:00 am to 5:00 pm" (the current site prints "5:00 AM"); remove the [CONFIRM] note before launch.
- **Old-site badge:** don't carry over the "5-Star Rated Emergency Dentist" badge (no source).
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist examining a patient's tooth during a same-day emergency visit at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Knocked-out tooth safety line:** step 3 ("Adult (permanent) teeth only ... Never put a baby tooth back in") and the matching FAQ sentence must stay visible and word for word. Don't shorten them to "put it back in the socket".
- **Mid-page call CTAs:** call buttons after the knocked-out tooth steps and after the abscess section (both `tel:+12158604600`).
- **Review quote:** the Avni D. quote above the final CTA is plain text. No `Review` or `AggregateRating` markup.
- **Tracking:** fire `click_call_emergency` for every call button and phone link on this page (hero, knocked-out tooth and abscess buttons, final CTA, sticky bar) and `click_directions` for the hours and directions link, so emergency calls can be measured separately from routine bookings.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + Service (emergency dental care) with `provider` → the practice and `areaServed` Yardley, plus BreadcrumbList. No `hoursAvailable` until Tuesday hours are confirmed. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/emergency-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/emergency-dentistry/",
      "name": "Emergency Dentist in Yardley, PA | Same-Day Appointments",
      "description": "Toothache, broken or knocked-out tooth? Radiant Smiles @ Floral Vale keeps same-day emergency slots in Yardley, PA. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/emergency-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/emergency-dentistry/#service"
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
      "@id": "https://www.radiant-smiles.com/emergency-dentistry/#breadcrumb",
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
          "name": "Emergency Dentistry",
          "item": "https://www.radiant-smiles.com/emergency-dentistry/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.radiant-smiles.com/emergency-dentistry/#service",
      "name": "Emergency dental care",
      "description": "As an emergency dentist in Yardley, we reserve same-day emergency appointments every business day and also see patients on Saturdays from 8 am to 2 pm.",
      "serviceType": "Emergency dentistry",
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Yardley",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Bucks County, Pennsylvania"
        }
      },
      "url": "https://www.radiant-smiles.com/emergency-dentistry/"
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
      "@id": "https://www.radiant-smiles.com/emergency-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/emergency-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What counts as a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental emergency is anything that causes severe pain, bleeding, swelling or damage to a tooth. Common examples are a bad toothache, a broken, cracked or knocked-out tooth, an abscess and a lost filling or crown. If you're unsure, call (215) 860-4600 and we'll tell you how soon you should be seen."
          }
        },
        {
          "@type": "Question",
          "name": "Can I be seen the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, yes. Radiant Smiles @ Floral Vale reserves same-day emergency appointments every business day and sees patients on Saturdays from 8 am to 2 pm. Call (215) 860-4600 as early as you can, so we can hold a slot for you and start with a focused 30-minute exam."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on weekends for emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're open on Saturdays from 8 am to 2 pm, and emergency appointments are available. The office is closed on Sundays. If you have trouble breathing or swallowing, heavy bleeding or a serious face or jaw injury, call 911 or go to the nearest emergency room."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do with a knocked-out tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pick the tooth up by the crown, not the root, and rinse it gently with water if it's dirty. Only an adult (permanent) tooth should go back in its socket; never put a baby tooth back in. Otherwise, keep the tooth moist in milk or saliva and call (215) 860-4600 right away. The sooner you're seen, the better."
          }
        },
        {
          "@type": "Question",
          "name": "Do you treat dental emergencies for patients without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You don't need insurance to be seen. The dentist explains your treatment and its cost before starting. Members of our in-office membership plan pay $65 for an emergency exam with an X-ray, and CareCredit financing is available, subject to credit approval."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see new patients for emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call (215) 860-4600 and we'll tell you how soon we can see you. Bring a list of your medications and your insurance card if you have one. After your emergency is treated, we can schedule a full checkup and cleaning."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the service description, FAQs, hours, prices change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
