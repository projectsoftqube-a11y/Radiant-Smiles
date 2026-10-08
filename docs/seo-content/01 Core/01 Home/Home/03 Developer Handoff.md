# Home: Developer Handoff

**URL:** `/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dentist in Yardley, PA | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="Dentist in Yardley, PA, open Saturdays, with same-day emergency slots and an $89 new-patient visit for uninsured patients. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist in Yardley, PA | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="Family, cosmetic and restorative dentistry in Yardley, PA, open Saturdays, with same-day emergency slots. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dentist in Yardley, PA for Family, Cosmetic and Restorative Care". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). The final CTA heading is an H2.
- **Server-render all text** (Next.js SSG). The service lists, offers table, membership table, hours table, reviews, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images. AI crawlers and many search bots don't run JavaScript reliably.
- **Next.js metadata:** set title, description, canonical and openGraph in `generateMetadata` (or the `metadata` export) for the `/` route. Output the JSON-LD with a `<script type="application/ld+json">` rendered on the server.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the name, address and phone must appear as text exactly as `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the hours/location section and in the site footer. It must match the Google Business Profile character for character.
- **Phone links:** every "Call (215) 860-4600" button and every visible phone number links to `tel:+12158604600`. **No `sms:` link** until the practice confirms the number accepts texts.
- **Hours table:** Saturday is the key differentiator, so give the Saturday row visual emphasis (bold or a "Open Saturdays" badge). **Tuesday:** the current site prints "8:00 AM - 5:00 AM". The copy and schema use 8:00 am – 5:00 pm. Remove the `[CONFIRM: ...]` tag from the published table once the practice confirms, and check it against the Google Business Profile before launch. **Tuesday sign-off checklist** (all three change together if the confirmed hours differ): (1) the Tuesday row of the hours table; (2) the answer to the FAQ "Is the office open on Saturdays?" ("Monday and Tuesday 8 am to 5 pm"), both the visible text and the FAQPage `acceptedAnswer`; (3) `openingHoursSpecification` in the Dentist entity.
- **Map:** lazy-load a Google Maps embed of the office. Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`.
- **Internal links:** every link in `02 Content.md` must be a crawlable `<a href>`, not an onClick handler. All targets are in the live URL map. If a location page in "Serving Yardley, Morrisville…" is not live at launch, show the town name as plain text until it is (avoid 404s). **Never link** Newtown, Langhorne, Levittown or Fairless Hills (on hold).
- **Offers table:** prices exactly as written ($89; $500 off, regular $3,500; $1,000 off, regular $5,800; $100 off, regular $550). No expiry dates or fine print are published, so don't add any. No countdowns or "limited time" labels.
- **Reviews:** the Candice C. quote sits under the microscope/technology list (lead-in "What that looks like in practice:"); the other two sit in the reviews section. Show them as plain text with first name, last initial and month. Keep the quotes verbatim, typos included (they are the patients' own words). **Do not** add Review or AggregateRating markup, and don't show the "4.14 out of 5 / 50 reviews" widget figure until its source is confirmed. A live Google review widget is fine once the Google Business Profile is connected.
- **Emergency block:** keep the 911 safety line visible next to the emergency CTA.
- **Images:** descriptive alt text, for example "Dr. Jaspreet Gadria at Radiant Smiles @ Floral Vale in Yardley, PA". No stock photos of people presented as the team. Doctor headshots are needed (see the bio page handoffs).
- **Logo:** copy the current logo from radiant-smiles.com and host it at `/images/radiant-smiles-floral-vale-logo.png`. The schema points there, so the file must exist.
- **Redirects:** no old URLs 301 into `/`. Keep `/` as the canonical; make sure `/index.php`, `http://` and non-`www` versions 301 to `https://www.radiant-smiles.com/`.
- **Tracking:** fire separate events for call clicks (hero, emergency block, final CTA), the appointment request link, directions clicks and "See all special offers" clicks, so local conversions can be measured.

## 3. Structured data (JSON-LD)

Two script blocks on `/` only. This is the **only page that carries the full Dentist entity**. Every other page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: Dentist + Person (x2) + WebSite + WebPage (required)

Notes on the graph:
- `openingHoursSpecification` mirrors the visible hours table (Tuesday 08:00–17:00 pending confirmation; Sunday left out because it is closed).
- `areaServed` lists Yardley plus the 11 live location pages only. On-hold towns are left out on purpose.
- `makesOffer` holds the 4 published offers and the membership plan. Discount offers carry no `price` because the site publishes only the discount and the regular price.
- `hasOfferCatalog` is built from the visible service lists: 5 groups, 32 services, every service URL in the live URL map. `/cosmetic-dentistry/invisalign/invisalign-cost/` is a cost guide, not a service, so it is linked in the copy but not listed in the catalog.
- Person nodes: `alumniOf` Temple University Kornberg School of Dentistry for both dentists. Dr. Gadria's memberships, languages and degree are from her bio. Dr. Bhalala's degree is shown as DMD (the practice site); WebMD lists DDS, so confirm before launch. Dr. Gadria also speaks "some Hindi"; it's left out of `knowsLanguage` to avoid overstating it.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.radiant-smiles.com/#dentist",
      "name": "Radiant Smiles @ Floral Vale",
      "url": "https://www.radiant-smiles.com/",
      "telephone": "+1-215-860-4600",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 Floral Vale Boulevard",
        "addressLocality": "Yardley",
        "addressRegion": "PA",
        "postalCode": "19067",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "logo": "https://www.radiant-smiles.com/images/radiant-smiles-floral-vale-logo.png",
      "image": "https://www.radiant-smiles.com/images/radiant-smiles-floral-vale-logo.png",
      "slogan": "Family, Cosmetic, & Restorative Dentistry",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "isAcceptingNewPatients": true,
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Check, Visa, MasterCard, Discover, American Express, CareCredit",
      "areaServed": [
        {
          "@type": "Place",
          "name": "Yardley, PA"
        },
        {
          "@type": "Place",
          "name": "Lower Makefield, PA"
        },
        {
          "@type": "Place",
          "name": "Morrisville, PA"
        },
        {
          "@type": "Place",
          "name": "Washington Crossing, PA"
        },
        {
          "@type": "Place",
          "name": "New Hope, PA"
        },
        {
          "@type": "Place",
          "name": "Trenton, NJ"
        },
        {
          "@type": "Place",
          "name": "Ewing, NJ"
        },
        {
          "@type": "Place",
          "name": "Hopewell, NJ"
        },
        {
          "@type": "Place",
          "name": "Pennington, NJ"
        },
        {
          "@type": "Place",
          "name": "Lawrenceville, NJ"
        },
        {
          "@type": "Place",
          "name": "Hamilton, NJ"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Mercer County, NJ"
        }
      ],
      "employee": [
        {
          "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person"
        },
        {
          "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "$89 New Patient Visit",
          "price": "89",
          "priceCurrency": "USD",
          "url": "https://www.radiant-smiles.com/special-offers/",
          "description": "Cleaning, X-rays and exam for new patients without dental insurance."
        },
        {
          "@type": "Offer",
          "name": "$500 off dental implants",
          "url": "https://www.radiant-smiles.com/special-offers/",
          "description": "$500 off an implant, abutment and crown (regular price $3,500). Includes a free consultation and second opinion.",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental implants",
            "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
          }
        },
        {
          "@type": "Offer",
          "name": "$1,000 off Invisalign",
          "url": "https://www.radiant-smiles.com/special-offers/",
          "description": "$1,000 off Invisalign (regular price $5,800). Includes a free consultation and second opinion.",
          "itemOffered": {
            "@type": "Service",
            "name": "Invisalign clear aligners",
            "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
          }
        },
        {
          "@type": "Offer",
          "name": "$100 off teeth whitening",
          "url": "https://www.radiant-smiles.com/special-offers/",
          "description": "$100 off teeth whitening (regular price $550).",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth whitening",
            "url": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/"
          }
        },
        {
          "@type": "Offer",
          "name": "In-office membership plan",
          "price": "150",
          "priceCurrency": "USD",
          "url": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/",
          "description": "$150 a year, plus $75 for each additional family member. Includes 2 cleanings a year, exams and X-rays. Extra cleanings or periodontal maintenance $75 each, emergency exam with X-ray $65 per visit, and 15% off all other dental treatment."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Preventive and Family Dentistry",
            "url": "https://www.radiant-smiles.com/preventative-care/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Family dentistry",
                  "url": "https://www.radiant-smiles.com/family-dentistry/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teeth cleaning and check-ups",
                  "url": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Children's dentistry",
                  "url": "https://www.radiant-smiles.com/preventative-care/child-dentistry/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fluoride treatment",
                  "url": "https://www.radiant-smiles.com/preventative-care/fluoride/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental sealants",
                  "url": "https://www.radiant-smiles.com/preventative-care/dental-sealants/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Oral hygiene instruction",
                  "url": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Oral cancer screening",
                  "url": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom night guards",
                  "url": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Emergency dentistry",
                  "url": "https://www.radiant-smiles.com/emergency-dentistry/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Gum Care",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep teeth cleaning (scaling and root planing)",
                  "url": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Periodontal maintenance",
                  "url": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gum disease laser therapy",
                  "url": "https://www.radiant-smiles.com/preventative-care/gum-disease-laser-therapy/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Arestin antibiotic treatment",
                  "url": "https://www.radiant-smiles.com/preventative-care/arestin/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Periodontal services",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Restorative Dentistry",
            "url": "https://www.radiant-smiles.com/restorative-dentistry/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental implants",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental crowns",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tooth-colored fillings",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental bridges",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Root canal therapy",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tooth extractions",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Wisdom teeth removal",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Dentures",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full dentures",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Partial dentures",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Immediate dentures",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Implant-retained dentures",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Denture relines and repairs",
                  "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Cosmetic Dentistry",
            "url": "https://www.radiant-smiles.com/cosmetic-dentistry/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Porcelain veneers",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teeth whitening",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental bonding",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Inlays and onlays",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Invisalign clear aligners",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Invisalign Teen",
                  "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person",
      "name": "Urvishkumar Bhalala",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DMD",
      "jobTitle": "Dentist",
      "url": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/",
      "worksFor": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Temple University Kornberg School of Dentistry"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person",
      "name": "Jaspreet Gadria",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DMD",
      "jobTitle": "Dentist",
      "url": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/",
      "worksFor": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Temple University Kornberg School of Dentistry"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Doctor of Dental Medicine (DMD), with high honors",
          "recognizedBy": {
            "@type": "CollegeOrUniversity",
            "name": "Temple University Kornberg School of Dentistry"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Bachelor of Dental Surgery (BDS), Amritsar, India"
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "American Dental Association"
        },
        {
          "@type": "Organization",
          "name": "Pennsylvania Dental Association"
        }
      ],
      "knowsLanguage": [
        "English",
        "Punjabi"
      ],
      "knowsAbout": [
        "General dentistry",
        "Cosmetic dentistry",
        "Restorative dentistry"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.radiant-smiles.com/#website",
      "url": "https://www.radiant-smiles.com/",
      "name": "Radiant Smiles @ Floral Vale",
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/#webpage",
      "url": "https://www.radiant-smiles.com/",
      "name": "Dentist in Yardley, PA | Radiant Smiles @ Floral Vale",
      "description": "Dentist in Yardley, PA, open Saturdays, with same-day emergency slots and an $89 new-patient visit for uninsured patients. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and harmless, and it keeps the Q&A machine-readable for other search and AI systems. Include it only if the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Radiant Smiles @ Floral Vale located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County. The office is a few minutes from Yardley Borough and Morrisville, and about 15 minutes from Trenton, NJ, depending on traffic. Call (215) 860-4600 if you need directions."
          }
        },
        {
          "@type": "Question",
          "name": "Is the office open on Saturdays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We're open Saturday from 8 am to 2 pm, which helps if you work during the week. Weekday hours are Monday and Tuesday 8 am to 5 pm, Wednesday and Thursday 9 am to 6 pm, and Friday 8 am to 2 pm. We're closed on Sunday."
          }
        },
        {
          "@type": "Question",
          "name": "Who are the dentists at Radiant Smiles @ Floral Vale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, treat patients at Radiant Smiles @ Floral Vale. Both graduated from Temple University's Kornberg School of Dentistry. Dr. Gadria earned her DMD with high honors and speaks English and Punjabi fluently, plus some Hindi."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept my dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept more than 40 dental plans, including many PPO plans such as Aetna, Cigna PPO, Delta Dental, Horizon Blue Cross, MetLife and UnitedHealthcare. Coverage depends on your specific plan, so call (215) 860-4600 with your insurance details to verify your plan before your visit."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You have two options. New patients without insurance can book an $89 visit that includes a cleaning, X-rays and an exam. Our in-office membership plan costs $150 a year, plus $75 for each additional family member, and covers 2 cleanings, exams and X-rays, with 15% off treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a same-day emergency appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, yes. We reserve emergency openings every business day and are open Saturday mornings. Call (215) 860-4600 as early as you can. Your visit starts with a focused 30-minute exam to find the problem and begin treatment. The office is closed on Sundays."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale is a family practice, and we see children as well as adults. We recommend your child's first dental visit around their first birthday. Children's care includes cleanings, exams, fluoride and sealants to help protect their teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer single dental implants and implant-retained dentures for missing teeth. Right now there's $500 off an implant, abutment and crown (regular price $3,500), and the offer includes a free consultation and second opinion. CareCredit financing can help spread the cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see patients from New Jersey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The office is about 15 minutes from Trenton by the Trenton-Morrisville Toll Bridge or the Calhoun Street Bridge, depending on traffic. We accept many PPO plans used in New Jersey, such as Horizon Blue Cross. Call (215) 860-4600 to verify your specific plan."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

The current website doesn't publish these, so they are left out rather than guessed. Add them when available:
- `"geo"`: coordinates from the Google Business Profile pin.
- `"hasMap"`: the Google Maps URL with the practice's place ID.
- `"sameAs"`: the Google Business Profile URL and any social profile URLs.
- `"foundingDate": "2009"`: only once the practice confirms "since 2009".
- `"image"`: a real exterior or reception photo (replace the logo).
- Dr. Bhalala `"image"` and Dr. Gadria `"image"`: once headshots exist.

### 3d. Keep in sync

The schema is generated from the page copy. If the hours, prices, offers, membership plan, FAQs, services or areas change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
