import type { ImageKey } from "@/content/images";
import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs } from "./common";

/**
 * Why Choose Us. Verbatim from 02 Patient Info/01 Info/Why Choose Us/02 Content.md
 * Reviews as plain text, exactly as written (no Review / AggregateRating markup).
 */

export const whyMeta: PageMeta = {
  path: "/patient-information/why-choose-us/",
  title: "Why Choose Our Yardley Dentists | Radiant Smiles",
  description:
    "Two Temple-trained Yardley dentists, dental microscopes, Saturday hours and clear prices before treatment. See why patients choose Radiant Smiles.",
};

export const whyCrumbs = piCrumbs("Why Choose Us", whyMeta.path);

export const whyHero: PageHeroContent = {
  h1: "Why Patients Choose Our Yardley Dentists",
  intro:
    "Patients choose Radiant Smiles @ Floral Vale for personalized, gentle and comprehensive care from two Temple-trained Yardley dentists. You get precise work under dental microscopes, Saturday appointments, and a clear price before any treatment begins.",
  buttons: ["appointment", "call"],
};

export const whyDentists = {
  title: "Two Yardley Dentists Under One Roof",
  intro:
    "Two dentists share one office at 117 Floral Vale Boulevard, so most of your care happens in one place, by people who know your history.",
  doctors: [
    {
      key: "bhalala",
      image: "drBhalala" as ImageKey,
      name: "Dr. Urvishkumar Bhalala, DMD,",
      text: "graduated from Temple University Kornberg School of Dentistry and worked at several practices before starting his own, and brings skills gained in the US and in India. He keeps learning new procedures.",
      href: "/about-us/dr-urvishkumar-bhalala/",
    },
    {
      key: "gadria",
      image: "drGadria" as ImageKey,
      name: "Dr. Jaspreet Gadria, DMD,",
      text: "earned her DMD with high honors from Temple's Kornberg School of Dentistry. She is a member of the Pennsylvania Dental Association and the American Dental Association, and speaks English and Punjabi fluently, plus some Hindi.",
      href: "/about-us/dr-jaspreet-gadria-dmd/",
    },
  ],
  after: "When you need a treatment we don't provide, we refer you to a provider we have vetted.",
  link: { label: "About our practice", href: "/about-us/" },
};

export const whyPrecision = {
  title: "Precision You Can See",
  text: "Our Yardley dentists work under high-power dental microscopes, similar to the one an ophthalmologist uses, for a precise fit and finish on fillings, crowns and other restorations. Treatment planning draws on 3D cone beam CT scans, iTero digital impressions and digital X-rays.",
  quoteIntro: "Precision also means not settling. One patient wrote about her new front crowns:",
  quote: {
    text: "They did my crowns for my front to teeth. Look amazing. The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
    author: "Candice C.",
    date: "September 2026",
  },
  link: { label: "See our dental technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
};

export const whyComfort = {
  title: "Comfort at Every Visit",
  text: "Feeling nervous is common, and you can tell us before we start. We explain what will happen in plain words, and you're welcome to bring headphones and music during treatment. If anxiety makes it hard to sit through care, ask about sedation options.",
  link: { label: "How we keep you comfortable", href: "/patient-information/care-and-comfort/" },
};

export const whyPrices = {
  title: "Clear Prices & Flexible Payment",
  intro: "You see the price before any treatment starts. There are several ways to pay for it:",
  items: [
    {
      icon: "shield",
      lead: "Insurance:",
      text: "we accept many PPO plans, from Aetna and Delta Dental to Horizon Blue Cross and UnitedHealthcare.",
    },
    {
      icon: "badgeDollar",
      lead: "No insurance:",
      text: "an $89 New Patient Visit Special, then a $150-a-year membership plan with 15% off treatment.",
    },
    { icon: "card", lead: "Financing:", text: "CareCredit, subject to credit approval." },
  ],
  link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
};

export const whyWeek = {
  title: "Appointments That Fit Your Week",
  text: "We're open six days, with hours until 6:00 pm on Wednesdays and Thursdays and from 8:00 am to 2:00 pm on Saturdays. You get appointment reminders, and we aim for a quick turnaround on calls and requests. If you're in pain, we keep same-day emergency openings every business day.",
};

export const whyReviews = {
  title: "What Our Patients Say",
  quotes: [
    {
      text: "I got Excellent service and proper treatment from Radiant smiles staff. Everyone was professional, welcoming, and attentive throughout my visit.",
      author: "Avni D.",
      date: "May 2026",
    },
    { text: "Quality care", author: "Bob M.", date: "June 2026" },
  ],
  link: { label: "Read more patient reviews", href: "/patient-reviews/" },
};

export const whyFaqs: FaqBlock = {
  title: "Why Choose Us: FAQs",
  items: [
    {
      question: "What makes Radiant Smiles @ Floral Vale different from other Yardley dentists?",
      answer:
        "Radiant Smiles @ Floral Vale combines two Temple-trained dentists, dental microscopes for precise restorations and Saturday hours in one Yardley office. Prices are explained before any treatment, and patients without insurance can use an $89 new patient visit and a $150 yearly membership plan.",
    },
    {
      question: "Who are the dentists at Radiant Smiles @ Floral Vale?",
      answer:
        "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, both graduated from Temple University's Kornberg School of Dentistry. Dr. Gadria earned her DMD with high honors and focuses on general, cosmetic and restorative dentistry. Both dentists see patients at the same Yardley office.",
    },
    {
      question: "Do you refer patients to other providers?",
      answer:
        "Yes, when it's in your interest. Most general, cosmetic and restorative care is handled in our Yardley office. If you need treatment we don't provide, we refer you to a provider we have vetted, and we can send your digital X-rays and records so you don't start from scratch.",
    },
  ],
};

export const whyCta: ClosingCta = {
  title: "See for Yourself at Our Yardley Office",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};
