import type { ImageKey } from "@/content/images";
import type { LinkItem } from "./home";
import type { ClosingCta, PageHeroContent, PageMeta } from "./shared";

/**
 * About Us. Copy verbatim from docs/seo-content/01 Core/02 About/About Us/02 Content.md.
 * Headings and link labels use "&" for "and" (house style).
 */

export const aboutMeta: PageMeta = {
  path: "/about-us/",
  title: "About Radiant Smiles @ Floral Vale | Yardley, PA Dentist",
  description:
    "About Radiant Smiles @ Floral Vale in Yardley, PA: two Temple-trained dentists, dental microscopes, Saturday hours and clear pricing before treatment.",
};

export const aboutHero: PageHeroContent = {
  h1: "About Radiant Smiles @ Floral Vale in Yardley, PA",
  intro:
    "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dental practice at 117 Floral Vale Boulevard in Yardley, PA, serving patients since 2009. Two dentists, Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria, lead the care, with a team of hygienists and dental assistants. The short version about Radiant Smiles in Yardley: you hear what we found and what it costs before any treatment starts.",
  buttons: ["call", "appointment"],
};

export const aboutGlance = {
  title: "About Radiant Smiles in Yardley at a Glance",
  intro: "Here are the facts patients ask about most before their first visit:",
  items: [
    { icon: "pin", lead: "Where:", text: "117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County." },
    {
      icon: "graduation",
      lead: "Who:",
      text: "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, both graduates of Temple University's Kornberg School of Dentistry.",
    },
    { icon: "calendar", lead: "When:", text: "six days a week, including Saturday from 8 am to 2 pm." },
    { icon: "chat", lead: "Languages:", text: "English, plus Punjabi and some Hindi with Dr. Gadria." },
    {
      icon: "card",
      lead: "Paying:",
      text: "many PPO plans accepted, an in-office membership plan for patients without insurance, and CareCredit financing.",
    },
    { icon: "firstAid", lead: "Urgent care:", text: "same-day emergency openings reserved every business day." },
  ],
} as const;

export const aboutApproach = {
  title: "Our Approach to Care",
  text: "Our care covers the prevention, diagnosis and treatment of problems that affect your teeth, gums and overall oral health. We explain what we see, show you the options and leave the decision with you.",
  listIntro: "Three commitments shape how we work:",
  items: [
    {
      icon: "book",
      lead: "Keeping up with dentistry.",
      text: "Our dentists stay current with new techniques and equipment, so your care reflects how dentistry is practiced today.",
    },
    {
      icon: "headphones",
      lead: "A calm, comfortable visit.",
      text: "If you feel anxious, say so. We talk you through each step, you can bring headphones and music, and you can ask about sedation options.",
    },
    {
      icon: "shield",
      lead: "Honest, professional care.",
      text: "Transparent pricing comes before treatment, and when a case is better handled elsewhere, we refer you to a provider we've vetted.",
    },
  ],
} as const;

export const aboutDentists: {
  title: string;
  intro: string;
  doctors: { key: string; name: string; text: string; link: LinkItem; image: ImageKey }[];
} = {
  title: "Meet Our Dentists",
  intro: "Both of our dentists trained at Temple University's Kornberg School of Dentistry.",
  doctors: [
    {
      key: "bhalala",
      name: "Dr. Urvishkumar Bhalala, DMD,",
      text: "worked at several dental practices before opening his own, and brings skills gained in the United States and in India.",
      link: { label: "Read Dr. Bhalala's bio", href: "/about-us/dr-urvishkumar-bhalala/" },
      image: "drBhalala",
    },
    {
      key: "gadria",
      name: "Dr. Jaspreet Gadria, DMD,",
      text: "earned her DMD with high honors and focuses on general, cosmetic and restorative dentistry. She grew up in California and treats each patient like family.",
      link: { label: "Read Dr. Gadria's bio", href: "/about-us/dr-jaspreet-gadria-dmd/" },
      image: "drGadria",
    },
  ],
};

export const aboutStaff = {
  title: "Meet the Staff",
  text: "Our hygienists, dental assistants and front-desk team handle much of your visit, from cleanings and X-rays to scheduling and insurance questions. Their goal is a visit that feels quick and calm.",
  link: { label: "Meet the staff", href: "/about-us/meet-the-staff/" },
};

export const aboutTechnology = {
  title: "Technology We Use",
  paragraphs: [
    "Our dentists work with high-power dental microscopes, similar to the one an eye doctor uses, which help them create restorations with a precise fit and finish. A close fit matters because gaps around a crown or filling can trap bacteria.",
    "The office also uses cone beam CT for 3D images, an iTero scanner for digital impressions and digital X-rays. Tooth-colored, metal-free options are available for crowns, bridges and fillings.",
  ],
  link: { label: "See our advanced technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
};

export const aboutVisit = {
  title: "Visit Our Floral Vale Office",
  text: "You'll find us at 117 Floral Vale Boulevard in Yardley, a few minutes from Yardley Borough and about 15 minutes from Trenton, depending on traffic. Saturday mornings are open for appointments, which helps if you work during the week.",
  link: { label: "Hours, directions & map", href: "/contact-us/" },
};

export const aboutCta: ClosingCta = {
  title: "Book Your First Visit at Radiant Smiles",
  text: "Call (215) 860-4600 or request an appointment online. No dental insurance? Your first visit, with a cleaning, X-rays and an exam, is $89.",
};

export const aboutCrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
];
