import type { ImageKey } from "@/content/images";
import type { LinkItem } from "./home";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "./shared";

/**
 * The two dentist bio pages. Copy verbatim from docs/seo-content/01 Core/03 Doctor Bio/
 * (Dr. Jaspreet Gadria, Dr. Urvishkumar Bhalala)/02 Content.md. Both pages share one
 * layout (DoctorProfile); each part is optional where only one bio has it.
 */

export type DoctorPage = {
  key: "bhalala" | "gadria";
  meta: PageMeta;
  hero: PageHeroContent;
  image: ImageKey;
  /** Short facts beside the portrait (decorative: the intro says the same) */
  badges: { icon: "graduation" | "chat" | "pin" | "shield"; text: string }[];
  about: { title: string; text: string; sub: { title: string; text: string } };
  education: {
    title: string;
    intro?: string;
    paragraphs?: string[];
    /** Degrees as a real list (Gadria) */
    degrees?: { lead: string; text: string; place: string }[];
    memberships?: { title: string; items: string[] };
  };
  approach: { title: string; paragraphs: string[]; links: LinkItem[] };
  outside: { title: string; text: string };
  faqs: FaqBlock;
  cta: ClosingCta;
  crumbName: string;
};

export const gadriaPage: DoctorPage = {
  key: "gadria",
  meta: {
    path: "/about-us/dr-jaspreet-gadria-dmd/",
    title: "Dr. Jaspreet Gadria, DMD | Yardley, PA Dentist",
    description:
      "Dr. Jaspreet Gadria, DMD, earned high honors at Temple's Kornberg School of Dentistry and speaks English and Punjabi. Book in Yardley, PA: (215) 860-4600.",
  },
  hero: {
    h1: "Dr. Jaspreet Gadria, DMD",
    intro:
      "Dr. Jaspreet Gadria, DMD, is a dentist at Radiant Smiles @ Floral Vale in Yardley, PA, focused on general, cosmetic and restorative dentistry. She earned her DMD with high honors from Temple University's Kornberg School of Dentistry, is a member of the American Dental Association and the Pennsylvania Dental Association, and speaks English and Punjabi fluently, plus some Hindi.",
    buttons: ["call", "appointment"],
  },
  image: "drGadria",
  badges: [
    { icon: "graduation", text: "DMD with high honors, Temple" },
    { icon: "chat", text: "English & Punjabi" },
  ],
  about: {
    title: "About Dr. Jaspreet Gadria",
    text: "Dr. Gadria was born and raised in California and now cares for patients at the practice's Floral Vale office, alongside Dr. Urvishkumar Bhalala. She treats each patient like family, which means taking the time to listen, explain and plan care around what matters to you.",
    sub: {
      title: "Dr. Gadria, Your Dentist in Yardley",
      text: "Dr. Gadria sees patients for general, cosmetic and restorative care at 117 Floral Vale Boulevard, where the practice offers everything from checkups and fillings to crowns, whitening and veneers. If Punjabi is easier for you or a family member, let us know when you book.",
    },
  },
  education: {
    title: "Education & Training",
    intro: "Dr. Gadria trained as a dentist twice, on two continents:",
    degrees: [
      { lead: "Bachelor of Dental Surgery (BDS):", text: "Amritsar, India.", place: "India" },
      {
        lead: "Doctor of Dental Medicine (DMD), with high honors:",
        text: "Temple University's Kornberg School of Dentistry.",
        place: "United States",
      },
    ],
    memberships: {
      title: "Professional Memberships",
      items: ["American Dental Association", "Pennsylvania Dental Association"],
    },
  },
  approach: {
    title: "Approach to Patient Care",
    paragraphs: [
      "Dr. Gadria's focus is general, cosmetic and restorative dentistry: keeping teeth healthy, repairing the ones that need it and improving how your smile looks when that's your goal. You'll hear what she finds, what your options are and what each one costs before any treatment begins.",
    ],
    links: [
      { label: "General & preventive care", href: "/preventative-care/" },
      { label: "Restorative dentistry", href: "/restorative-dentistry/" },
      { label: "Cosmetic dentistry", href: "/cosmetic-dentistry/" },
    ],
  },
  outside: {
    title: "Outside the Office",
    text: "Away from the practice, Dr. Gadria enjoys staying active, traveling and spending time with her family.",
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Where did Dr. Gadria train?",
        answer:
          "Dr. Jaspreet Gadria earned a Bachelor of Dental Surgery (BDS) in Amritsar, India, and then a Doctor of Dental Medicine (DMD) with high honors from Temple University's Kornberg School of Dentistry. She is a member of the American Dental Association and the Pennsylvania Dental Association.",
      },
      {
        question: "What languages does Dr. Gadria speak?",
        answer:
          "Dr. Gadria speaks English and Punjabi fluently, and she speaks some Hindi. If you or a family member would be more comfortable talking through treatment in Punjabi, mention it when you call (215) 860-4600 to book your visit with her.",
      },
      {
        question: "What kind of dentistry does Dr. Gadria provide?",
        answer:
          "Dr. Gadria focuses on general, cosmetic and restorative dentistry at Radiant Smiles @ Floral Vale in Yardley, PA. The practice offers checkups and cleanings, fillings and crowns, and cosmetic treatment such as whitening and veneers, so most of your family's care can happen in one office.",
      },
    ],
  },
  cta: {
    title: "Book With Dr. Gadria",
    text: "Call (215) 860-4600 or request an appointment online, and ask for Dr. Gadria. Read more [about Radiant Smiles @ Floral Vale](/about-us/) or find [hours and directions](/contact-us/).",
  },
  crumbName: "Dr. Jaspreet Gadria",
};

export const bhalalaPage: DoctorPage = {
  key: "bhalala",
  meta: {
    path: "/about-us/dr-urvishkumar-bhalala/",
    title: "Dr. Urvishkumar Bhalala, DMD | Yardley, PA Dentist",
    description:
      "Meet Dr. Urvishkumar Bhalala, DMD, a Temple-trained dentist at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 to book a visit.",
  },
  hero: {
    h1: "Dr. Urvishkumar Bhalala, DMD",
    intro:
      "Dr. Urvishkumar Bhalala, DMD, is a dentist at Radiant Smiles @ Floral Vale in Yardley, PA, and a graduate of Temple University Kornberg School of Dentistry. He worked at several dental practices before opening his own, and he brings skills gained in the United States and in India to family, cosmetic and restorative care at 117 Floral Vale Boulevard.",
    buttons: ["call", "appointment"],
  },
  image: "drBhalala",
  badges: [
    { icon: "graduation", text: "DMD, Temple University" },
    { icon: "pin", text: "Floral Vale office, Yardley" },
  ],
  about: {
    title: "About Dr. Urvishkumar Bhalala",
    text: "Dr. Bhalala is one of two dentists at Radiant Smiles @ Floral Vale, alongside Dr. Jaspreet Gadria. Before opening his own practice, he worked at several established dental offices.",
    sub: {
      title: "Dr. Bhalala's Dental Care in Yardley",
      text: "You can see Dr. Bhalala at the practice's Floral Vale office in Yardley, which is open six days a week, including Saturday mornings. The office provides family, cosmetic and restorative dentistry, from checkups and fillings to crowns, implants and whitening.",
    },
  },
  education: {
    title: "Education & Training",
    paragraphs: [
      "Dr. Bhalala earned his dental degree at Temple University Kornberg School of Dentistry. His clinical skills were built both here and abroad, in India.",
      "He keeps up with new procedures as dentistry changes and continues to learn throughout his career. For you, that means treatment options that reflect current dental practice.",
    ],
  },
  approach: {
    title: "Approach to Patient Care",
    paragraphs: [
      "Dr. Bhalala aims for a calm, open conversation at every visit. You can ask questions, hear your options in plain words and take time to decide.",
      "At Radiant Smiles @ Floral Vale, restorations are made with the help of high-power dental microscopes, similar to the one an eye doctor uses, for a precise fit and finish. If you feel nervous about treatment, tell him before you start. You're welcome to bring headphones and music, and you can ask about sedation options.",
    ],
    links: [{ label: "Our technology", href: "/patient-information/care-and-comfort/advanced-technology/" }],
  },
  outside: {
    title: "Outside the Office",
    text: "Dr. Bhalala is married and has two children.",
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Where did Dr. Bhalala go to dental school?",
        answer:
          "Dr. Urvishkumar Bhalala graduated from Temple University Kornberg School of Dentistry. He worked at several dental practices before opening his own, and he brings skills gained in both the United States and India to his patients at Radiant Smiles @ Floral Vale in Yardley, PA.",
      },
      {
        question: "Where does Dr. Bhalala see patients?",
        answer:
          "Dr. Bhalala sees patients at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. The office is open six days a week, including Saturday from 8 am to 2 pm. Call (215) 860-4600 to book a visit with him.",
      },
      {
        question: "Can I book an appointment with Dr. Bhalala as a new patient?",
        answer:
          "Yes. Radiant Smiles @ Floral Vale welcomes new patients. Call (215) 860-4600 and ask for Dr. Bhalala, or request an appointment online. If you don't have dental insurance, your first visit costs $89 and includes a cleaning, X-rays and an exam.",
      },
    ],
  },
  cta: {
    title: "Book With Dr. Bhalala",
    text: "Call (215) 860-4600 or request an appointment online, and we'll find a time that works for you. Want to meet the rest of the practice? Read [about Radiant Smiles @ Floral Vale](/about-us/) or find [hours and directions](/contact-us/).",
  },
  crumbName: "Dr. Urvishkumar Bhalala",
};
