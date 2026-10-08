import type { LinkItem } from "./home";
import type { ClosingCta, PageHeroContent, PageMeta } from "./shared";

/**
 * Patient Reviews. Copy verbatim from docs/seo-content/01 Core/04 Proof/Patient Reviews/02 Content.md.
 * Reviews stay exactly as written (typos included), with first name, last initial, star
 * rating and month. No Review or AggregateRating markup, and no "4.14 out of 5" figure.
 */

export const reviewsMeta: PageMeta = {
  path: "/patient-reviews/",
  title: "Radiant Smiles @ Floral Vale Reviews | Yardley, PA",
  description:
    "Read Radiant Smiles @ Floral Vale reviews from patients of our Yardley, PA dental office, then share your own experience or book a visit.",
};

export const reviewsHero: PageHeroContent = {
  h1: "Radiant Smiles @ Floral Vale Reviews",
  intro:
    "These Radiant Smiles @ Floral Vale reviews are in our patients' own words, shared after visits to our dental office at 117 Floral Vale Boulevard in Yardley, PA. We show them as written, typos and all, because a real review is more useful to you than a polished one.",
  buttons: ["call", "appointment"],
};

export type PatientReview = { text: string; author: string; stars: number; date: string; treatment?: string };

export const reviewsRecent: { title: string; reviews: PatientReview[] } = {
  title: "Recent Radiant Smiles @ Floral Vale Reviews",
  reviews: [
    {
      text: "They did my crowns for my front to teeth. Look amazing. The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
      author: "Candice C.",
      stars: 5,
      date: "September 2026",
      treatment: "dental crowns",
    },
    {
      text: "I got Excellent service and proper treatment from Radiant smiles staff. Everyone was professional, welcoming, and attentive throughout my visit.",
      author: "Avni D.",
      stars: 5,
      date: "May 2026",
    },
    { text: "Quality care", author: "Bob M.", stars: 5, date: "June 2026" },
  ],
};

export const reviewsWhy = {
  title: "Yardley Dentist Reviews & Why They Help",
  text: "Dentist reviews help you choose with more than a website to go on. They tell you how a visit actually feels: whether the team explains things and puts right what isn't. Candice's review above is a good example: her front crowns went back to the lab until the dentist was satisfied with them.",
  link: { label: "Learn about dental crowns", href: "/restorative-dentistry/dental-crowns/" } as LinkItem,
};

/** Google Business Profile write-a-review link: hidden until the practice supplies its place ID */
export const googleReviewUrl: string | null = null;

export const reviewsLeave = {
  title: "Leave Us a Review",
  intro:
    "If you've visited Radiant Smiles @ Floral Vale, a short review helps other families in Yardley and nearby towns decide where to go. It takes about a minute:",
  steps: [
    { icon: "search", text: "Open our Google Business Profile:", button: "Review us on Google" },
    { icon: "star", text: "Choose a star rating." },
    { icon: "chat", text: "Write a sentence or two about your visit: what you came in for and how it went." },
  ],
  note: "Please don't include health details you'd rather keep private. If something about your visit wasn't right, call us at (215) 860-4600 so we can talk it through.",
} as const;

export const reviewsNewPatients = {
  title: "New Patients Welcome",
  text: "New patients without insurance can start with an $89 visit that includes a cleaning, X-rays and an exam, and we're open Saturday mornings.",
  links: [
    { label: "See our special offers", href: "/special-offers/" },
    { label: "Hours & directions", href: "/contact-us/" },
  ] as LinkItem[],
};

export const reviewsCta: ClosingCta = {
  title: "Book a Visit at Our Yardley Office",
  text: "Call (215) 860-4600 or request an appointment online.",
};

export const reviewsCrumbs = [
  { name: "Home", path: "/" },
  { name: "Patient Reviews", path: "/patient-reviews/" },
];
