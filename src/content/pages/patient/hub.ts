import type { LinkItem } from "../home";
import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { PI_PATH } from "./common";

/** Patient Information hub. Verbatim from 02 Patient Info/00 Hub/Patient Information Hub/02 Content.md */

export const hubMeta: PageMeta = {
  path: PI_PATH,
  title: "Patient Information | Radiant Smiles Yardley Dental Office",
  description:
    "Plan your visit to our Yardley dental office: what to expect as a new patient, forms, PPO insurance, CareCredit financing and how to book an appointment.",
};

export const hubHero: PageHeroContent = {
  h1: "Patient Information for Our Yardley Dental Office",
  intro:
    "Everything you need before a visit to Radiant Smiles @ Floral Vale, our Yardley dental office at 117 Floral Vale Boulevard, starts here. Find out what happens at a first visit, which insurance plans we accept, how to pay, how to book and how we keep you comfortable.",
  buttons: ["appointment", "call"],
};

/** Quick facts strip (plain text) */
export const hubFacts = [
  { icon: "pin", text: "117 Floral Vale Boulevard, Yardley, PA 19067" },
  { icon: "calendar", text: "Open Saturdays, 8:00 am – 2:00 pm" },
  { icon: "badgeDollar", text: "$89 New Patient Visit Special for uninsured patients" },
  { icon: "shield", text: "Many PPO plans accepted, plus CareCredit" },
] as const;

export type HubCard = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
  bullets?: { lead: string; text: string }[];
  links: LinkItem[];
  /** Plain list of links (Care and Comfort, After Your Treatment) */
  linkList?: boolean;
};

export const hubCards: HubCard[] = [
  {
    id: "new-patients",
    icon: "user",
    title: "New Patients: What Your First Visit Involves",
    paragraphs: [
      "Your first visit at our Yardley dental office is a comprehensive evaluation. We review your medical and dental history, examine your teeth and gums, and talk through your treatment options before anything else happens. Patients under 18 need a parent or guardian with them.",
      "No insurance? The $89 New Patient Visit Special includes a cleaning, X-rays and an exam.",
    ],
    links: [
      { label: "What to expect as a new patient", href: "/patient-information/new-patients/" },
      { label: "Why patients choose Radiant Smiles", href: "/patient-information/why-choose-us/" },
    ],
  },
  {
    id: "scheduling",
    icon: "calendarCheck",
    title: "Scheduling an Appointment",
    paragraphs: [
      "You can request an appointment online or call (215) 860-4600. We're open six days a week, including Saturday mornings, and we keep same-day emergency openings in the schedule every business day for patients in pain.",
    ],
    links: [{ label: "Office hours & appointment requests", href: "/patient-information/scheduling/" }],
  },
  {
    id: "insurance",
    icon: "shield",
    title: "Insurance & Payment",
    paragraphs: [
      "We accept many PPO dental plans, including Aetna, Cigna PPO, Delta Dental, Horizon Blue Cross, MetLife and UnitedHealthcare. Coverage depends on your plan, so call us to check yours before your visit.",
    ],
    bullets: [
      {
        lead: "No insurance:",
        text: "our in-office membership plan is $150 a year and includes two cleanings, exams and X-rays, plus 15% off treatment.",
      },
      {
        lead: "Ways to pay:",
        text: "cash, check, Visa, MasterCard, Discover, American Express and CareCredit, with payment due when you're seen.",
      },
    ],
    links: [
      { label: "Insurance plans & payment options", href: "/patient-information/insurance-payment-options/" },
      { label: "CareCredit dental financing", href: "/patient-information/carecredit/" },
    ],
  },
  {
    id: "forms",
    icon: "clipboard",
    title: "Patient Forms",
    paragraphs: [
      "Registration forms: call (215) 860-4600 and we'll get them to you before your visit, so your appointment can focus on your care. They cover your registration, medical history and insurance details. Please don't send health details through the general contact form.",
    ],
    links: [{ label: "How to get your patient forms", href: "/patient-information/patient-registration/" }],
  },
  {
    id: "comfort",
    icon: "headphones",
    title: "Care & Comfort",
    paragraphs: [
      "If dental visits make you nervous, tell us. You're welcome to bring headphones and music, and you can ask about sedation options. We explain each step before it starts.",
    ],
    links: [
      { label: "How we keep your visit comfortable", href: "/patient-information/care-and-comfort/" },
      { label: "Our dental technology, including 3D CBCT scans", href: "/patient-information/care-and-comfort/advanced-technology/" },
      { label: "Infection control & sterilization", href: "/patient-information/care-and-comfort/infection-control/" },
    ],
    linkList: true,
  },
  {
    id: "after",
    icon: "heart",
    title: "After Your Treatment",
    paragraphs: [
      "Recovery goes more smoothly when you know what to do at home. Our written instructions cover extractions, fillings, crowns and bridges, root canals and cosmetic work.",
    ],
    links: [
      { label: "Home care instructions after treatment", href: "/patient-information/care-and-comfort/home-instructions/" },
      { label: "Patient education & dental health guides", href: "/patient-information/patient-education/" },
    ],
    linkList: true,
  },
];

export const hubFaqs: FaqBlock = {
  title: "Patient Information FAQs",
  items: [
    {
      question: "Is Radiant Smiles @ Floral Vale accepting new patients?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale welcomes new patients at its Yardley dental office, 117 Floral Vale Boulevard. You can request an appointment online or call (215) 860-4600. Patients without insurance can book the $89 New Patient Visit Special, which includes a cleaning, X-rays and an exam.",
    },
    {
      question: "Where is the office?",
      answer:
        "Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County. Patients visit from Yardley, Morrisville and Lower Makefield, and from New Jersey towns such as Trenton and Ewing. Trenton is about 15 minutes away, depending on traffic.",
    },
    {
      question: "Can I book a Saturday appointment?",
      answer:
        "Yes. The office is open on Saturdays from 8:00 am to 2:00 pm, which suits patients who work during the week. Request a Saturday time online or call (215) 860-4600, and our team will offer the first opening that fits your schedule.",
    },
  ],
};

export const hubCta: ClosingCta = {
  title: "Plan Your Visit to Our Yardley Dental Office",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};

/** ItemList for the CollectionPage schema (handoff 3a), in its order */
export const hubItemList = [
  { name: "New Patients", path: "/patient-information/new-patients/" },
  { name: "Why Choose Us", path: "/patient-information/why-choose-us/" },
  { name: "Scheduling", path: "/patient-information/scheduling/" },
  { name: "Insurance & Payment", path: "/patient-information/insurance-payment-options/" },
  { name: "CareCredit Financing", path: "/patient-information/carecredit/" },
  { name: "Patient Registration", path: "/patient-information/patient-registration/" },
  { name: "Care & Comfort", path: "/patient-information/care-and-comfort/" },
  { name: "Advanced Technology", path: "/patient-information/care-and-comfort/advanced-technology/" },
  { name: "Infection Control", path: "/patient-information/care-and-comfort/infection-control/" },
  { name: "Home Care Instructions", path: "/patient-information/care-and-comfort/home-instructions/" },
  { name: "Patient Education", path: "/patient-information/patient-education/" },
];
