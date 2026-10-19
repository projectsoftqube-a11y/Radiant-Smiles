import type { LinkItem } from "./home";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "./shared";

/**
 * Special Offers. Copy verbatim from docs/seo-content/01 Core/05 Offers/Special Offers/02 Content.md.
 * Prices as written (handoff): no expiry dates, countdowns or "limited time" labels, and
 * no CareCredit APRs. Prices match site.ts (offers, membershipPlan) and the schema.
 */

export const offersMeta: PageMeta = {
  path: "/special-offers/",
  title: "Affordable Dentist in Yardley, PA | Specials & Offers",
  description:
    "Affordable dentist in Yardley, PA: $99 new-patient visit for uninsured patients, plus savings on implants, Invisalign and whitening. Call (215) 860-4600.",
};

export const offersHero: PageHeroContent = {
  h1: "Affordable Dentist in Yardley, PA: Current Dental Specials",
  intro:
    "An affordable dentist in Yardley, PA should show you the price first. Ours are below. New patients without insurance pay $99 for a cleaning, X-rays and an exam at Radiant Smiles @ Floral Vale, and an emergency visit is $80. There's also $500 off dental implants, $1,000 off Invisalign and $100 off teeth whitening, and the implant and Invisalign offers include a free consultation and second opinion.",
  buttons: ["call", "appointment"],
};

/** Offer summary strip: plain text, not an image (handoff) */
export const offersStrip = [
  { figure: "$99", text: "new patient visit (uninsured)", target: "new-patient" },
  { figure: "$80", text: "emergency visit", target: "emergency" },
  { figure: "$500 off", text: "implants", target: "implants" },
  { figure: "$1,000 off", text: "Invisalign", target: "invisalign" },
  { figure: "$100 off", text: "whitening", target: "whitening" },
] as const;

export const offersNewPatient = {
  id: "new-patient",
  title: "$99 New Patient Dental Special",
  intro: "Our new patient dental special gets you a full first visit for $99 if you don't have dental insurance. It includes:",
  items: ["A professional cleaning", "X-rays", "An exam of your teeth and gums"],
  after:
    "At the end of the visit, you'll hear what we found and what any treatment would cost, with no pressure to decide that day. To book, call (215) 860-4600 and ask for the $99 new patient visit.",
  quote: {
    text: "I got Excellent service and proper treatment from Radiant smiles staff. Everyone was professional, welcoming, and attentive throughout my visit.",
    author: "Avni D.",
    date: "May 2026",
  },
  button: "Call and ask for the $99 new patient visit",
  link: { label: "What to expect as a new patient", href: "/patient-information/new-patients/" } as LinkItem,
};

/**
 * $80 Emergency Visit (client's final rate card, 15 Oct 2026; the wording is the client's).
 * Price and inclusions come from site.ts.
 */
export const offersEmergency = {
  id: "emergency",
  title: "$80 Emergency Visit",
  subtitle: "Relief when you need it",
  text: "Don't let dental pain wait. Our emergency promotion includes a focused exam and necessary X-rays to diagnose the issue quickly.",
  button: "Call for an emergency visit",
  link: { label: "What to do in a dental emergency", href: "/emergency-dentistry/" } as LinkItem,
};

export type DiscountOffer = {
  id: "implants" | "invisalign" | "whitening";
  title: string;
  /** Large figure on the card (decorative: the title and text carry it) */
  figure: string;
  regular: string;
  text: string;
  button?: { label: string; href: string; offer: string };
  links: LinkItem[];
};

export const offersDiscounts: DiscountOffer[] = [
  {
    id: "implants",
    title: "Dental Implant Savings: $500 Off",
    figure: "500",
    regular: "Regular $4,500",
    text: "Take $500 off a dental implant, abutment and crown, which together replace one missing tooth. The regular price is $4,500. The offer includes a free consultation and second opinion, so you can check whether an implant suits you before you commit.",
    button: { label: "Book Your Free Implant Consultation", href: "/patient-information/scheduling/", offer: "implants" },
    links: [{ label: "Learn about dental implants", href: "/restorative-dentistry/dental-implants/" }],
  },
  {
    id: "invisalign",
    title: "Invisalign Savings: $1,000 Off",
    figure: "1,000",
    regular: "Regular $5,800",
    text: "Take $1,000 off Invisalign clear aligner treatment. The regular price is $5,800. Like the implant offer, it includes a free consultation and second opinion. Dental insurance may cover part of orthodontic treatment, and you may be able to use FSA funds.",
    button: { label: "Book a Free Invisalign Consultation", href: "/patient-information/scheduling/", offer: "invisalign" },
    links: [
      { label: "Learn about Invisalign", href: "/cosmetic-dentistry/invisalign/" },
      { label: "What affects Invisalign cost", href: "/cosmetic-dentistry/invisalign/invisalign-cost/" },
    ],
  },
  {
    id: "whitening",
    title: "Teeth Whitening Savings: $100 Off",
    figure: "100",
    regular: "Regular $550",
    text: "Take $100 off professional teeth whitening, regular price $550. We make custom whitening trays for you in 1 to 2 days, and you wear them at home for 3 to 4 hours a night for 1 to 2 weeks.",
    links: [{ label: "Learn about teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" }],
  },
];

export const offersNoInsurance = {
  title: "Seeing an Affordable Dentist in Yardley Without Insurance",
  text: "You can see a dentist without insurance and still know your costs up front. Besides the $99 first visit, there are two ways to keep routine care and treatment affordable.",
  options: [
    {
      icon: "badgeDollar",
      title: "In-office membership plan",
      text: "For $150 a year, plus $100 for each additional family member, you pay $75 for each cleaning, exam and X-rays, up to two a year (a third in the same year is $99), $75 for periodontal maintenance and $50 for an emergency visit, and get 20% off any other dental services except implants and Invisalign. Yearly enrollment fees are non-refundable, payment is due at the time of service, and the plan isn't dental insurance: it can't be combined with insurance and is good only at Radiant Smiles @ Floral Vale.",
      link: null,
    },
    {
      icon: "card",
      title: "Financing with CareCredit",
      text: "CareCredit lets you pay for treatment over time. It offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. You can check whether you prequalify with no impact to your credit score.",
      link: { label: "CareCredit financing", href: "/patient-information/carecredit/" },
    },
    {
      icon: "shield",
      title: "Have insurance?",
      text: "We accept more than 40 dental plans, including many PPO plans. Use your insurance benefits before your coverage expires, and call us to verify your plan.",
      link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
    },
  ],
} as const;

export const offersTerms = {
  title: "Offer Terms",
  text: "Prices are as listed on this page. The $99 new patient visit is for patients without dental insurance. Please ask us to confirm the details of any offer, and whether it applies to your treatment, when you book. Payment is due at the time of service, by cash, check, major credit card or CareCredit.",
};

export const offersFaqs: FaqBlock = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Who qualifies for the $99 new patient visit?",
      answer:
        "The $99 new patient visit is for new patients who don't have dental insurance. It includes a professional cleaning, X-rays and an exam at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 and ask for the $99 visit when you book.",
    },
    {
      question: "What does the $80 emergency visit include?",
      answer:
        "The $80 emergency visit includes a limited emergency exam, the X-rays needed to diagnose the problem and an immediate care plan. Call (215) 860-4600 as soon as you can, and we'll fit you in the same day when we can.",
    },
    {
      question: "What does the $500 dental implant offer include?",
      answer:
        "The offer takes $500 off a dental implant, abutment and crown, which together replace one missing tooth. The regular price is $4,500. It also includes a free consultation and second opinion, so you can find out whether an implant is right for you first.",
    },
    {
      question: "Do the implant and Invisalign offers include a consultation?",
      answer:
        "Yes. Both the $500 dental implant offer and the $1,000 Invisalign offer include a free consultation and second opinion at our Yardley office. You'll learn whether the treatment suits you and what it would cost, and you can take your time to decide.",
    },
    {
      question: "Can I see a dentist without insurance?",
      answer:
        "Yes. New patients without insurance can start with a $99 visit for a cleaning, X-rays and an exam. After that, our in-office membership plan costs $150 a year, plus $100 per additional family member; members pay $75 for each cleaning, exam and X-rays, up to two a year, and get 20% off other treatment except implants and Invisalign.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, through CareCredit. It offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. We also accept cash, check, Visa, MasterCard, Discover and American Express, with payment due at the time of service.",
    },
  ],
};

export const offersCta: ClosingCta = {
  title: "Book Your $99 Visit or Free Consultation",
  text: "Call (215) 860-4600 and tell us which offer you're interested in, or request an appointment online.",
};

export const offersCrumbs = [
  { name: "Home", path: "/" },
  { name: "Special Offers", path: "/special-offers/" },
];
