# Scheduling: Developer Handoff

**URL:** `/patient-information/scheduling/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Schedule a Dentist Appointment in Yardley, PA</title>
<meta name="description" content="Book a dentist appointment in Yardley, PA online or call (215) 860-4600. Open Saturdays, with same-day emergency openings every business day.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/scheduling/">
<meta property="og:type" content="website">
<meta property="og:title" content="Schedule a Dentist Appointment in Yardley, PA">
<meta property="og:description" content="Book a dentist appointment in Yardley, PA online or call (215) 860-4600. Open Saturdays, with same-day emergency openings every business day.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/scheduling/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Schedule a Dentist Appointment in Yardley". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Scheduling.
- **Primary conversion page:** every "Request an Appointment" button on the site points here. Put the form in a section with `id="appointment-form"`; the final CTA's button scrolls to `#appointment-form`. On mobile the call button and the start of the form must be visible without scrolling far.
- **Form:** fields, labels, select options, helper note and button text exactly as in `02 Content.md`. Required fields: name and phone. Add spam protection that doesn't block people (honeypot plus server-side rate limit; avoid image CAPTCHAs). Submissions go to the practice's front-desk inbox [CONFIRM: destination address]. This form is not for health information: the helper note tells people not to include medical details, and the reason field is a select list rather than free text.
- **Form privacy line:** "See our Privacy Policy" links to `/patient-information/terms/privacy/`. Don't add a "we only use your details to…" promise: the published privacy policy allows promotional use and sharing with partners, so the two would conflict. A narrower promise can be added only if the practice updates its policy to match.
- **Thank-you state:** show the thank-you copy in place (no redirect to a generic page), with the patient-forms link. It must say the request is not yet a confirmed booking.
- **Office hours:** a real HTML `<table>`. **Do not launch with the Tuesday [CONFIRM] note visible:** the old site prints "8:00 AM - 5:00 AM". Confirm the Tuesday closing time with the practice, then remove the bracketed note. Hours must match the homepage, footer, Contact page and the Google Business Profile.
- **No cancellation policy section:** the current site doesn't publish one. Add it only when the practice supplies the wording.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track form starts (`form_start`) and successful submissions (`generate_lead`, marked as a GA4 key event). Never send form field values to analytics.

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/scheduling/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/scheduling/",
      "name": "Schedule a Dentist Appointment in Yardley, PA",
      "description": "Book a dentist appointment in Yardley, PA online or call (215) 860-4600. Open Saturdays, with same-day emergency openings every business day.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/scheduling/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/scheduling/#breadcrumb",
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
          "name": "Scheduling",
          "item": "https://www.radiant-smiles.com/patient-information/scheduling/"
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
      "@id": "https://www.radiant-smiles.com/patient-information/scheduling/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/scheduling/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a same-day dentist appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you're in pain or have a dental emergency, yes, in most cases. Radiant Smiles @ Floral Vale keeps openings every business day for urgent problems. Call (215) 860-4600 as early as you can and describe what's happening so the team can offer the first available time."
          }
        },
        {
          "@type": "Question",
          "name": "Is my appointment confirmed when I send the online form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not yet. The online form is a request. Our team contacts you to confirm the day and time that work for both of us. If you need to be seen today, call (215) 860-4600 instead so we can check today's openings with you."
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

The schema is generated from the page copy. If the title, meta description, FAQs, hours or form copy change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
