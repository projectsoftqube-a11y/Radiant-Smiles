import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { PC_PATH, withNap, type Point } from "./common";

/** Preventive Care hub. Verbatim from 03 General Dentistry/00 Hub/Preventative Care Hub/02 Content.md */

export const pcMeta: PageMeta = {
  path: PC_PATH,
  title: "Preventive Dentistry in Yardley, PA | Radiant Smiles",
  description:
    "Preventive dentistry in Yardley, PA: cleanings, exams, digital X-rays, fluoride, sealants and gum care for adults and kids. Call (215) 860-4600.",
};

export const pcHubCrumbs = [
  { name: "Home", path: "/" },
  { name: "Preventive Care", path: PC_PATH },
];

export const pcHero: PageHeroContent = {
  h1: "Preventive Dentistry in Yardley, PA",
  intro:
    "Preventive dentistry is the routine care that finds small problems early and keeps them small: checkups, cleanings, X-rays, fluoride, sealants and gum care. At Radiant Smiles @ Floral Vale, Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria provide preventive dentistry in Yardley for adults and children, with Saturday appointments from 8 am to 2 pm.",
  buttons: ["appointment", "call"],
};

export const pcHeroPoints: Point[] = [
  { lead: "No insurance?", text: "Your first visit (cleaning, X-rays and exam) is $89." },
  { lead: "Insured?", text: "We accept many PPO plans. Call to check yours." },
  { lead: "Busy week?", text: "We're open Saturday mornings." },
];

/** The service directory (a real table; stacked cards on phones). Icons are decorative. */
export const pcGlance = {
  title: "Preventive Dentistry in Yardley at a Glance",
  intro: "Each preventive service has its own page. This table shows what each one does and who it's usually for.",
  head: ["Service", "What it does", "Usually for"],
  rows: [
    {
      icon: "toothClean",
      label: "Teeth cleaning and checkups",
      href: "/preventative-care/teeth-cleaning-and-check-ups/",
      does: "Removes plaque and tartar, checks teeth and gums, takes X-rays when due",
      for: "Everyone, twice a year",
    },
    {
      icon: "search",
      label: "Oral cancer screening",
      href: "/preventative-care/oral-cancer-screening/",
      does: "Checks the mouth, tongue, neck and throat for warning signs",
      for: "Every patient, at every visit",
    },
    {
      icon: "drop",
      label: "Fluoride treatment",
      href: "/preventative-care/fluoride/",
      does: "Strengthens enamel so it resists decay",
      for: "Children, and adults prone to cavities or dry mouth",
    },
    {
      icon: "shield",
      label: "Dental sealants",
      href: "/preventative-care/dental-sealants/",
      does: "Seals the deep grooves of back teeth",
      for: "Children and adults with cavity-prone molars",
    },
    {
      icon: "brush",
      label: "Oral hygiene tips",
      href: "/preventative-care/oral-hygiene/",
      does: "Shows you how to brush and floss well at home",
      for: "Everyone",
    },
    {
      icon: "smile",
      label: "Children's dentistry",
      href: "/preventative-care/child-dentistry/",
      does: "Gentle checkups from just after the first birthday",
      for: "Babies, kids and teens",
    },
    {
      icon: "layers",
      label: "Deep teeth cleaning",
      href: "/preventative-care/deep-teeth-cleaning/",
      does: "Cleans below the gumline to treat gum disease",
      for: "Patients with gum disease",
    },
    {
      icon: "calendarCheck",
      label: "Periodontal maintenance",
      href: "/preventative-care/periodontal-maintenance/",
      does: "Follow-up gum cleanings after treatment",
      for: "Patients with a history of gum disease",
    },
    {
      icon: "moon",
      label: "Custom night guards",
      href: "/preventative-care/professional-night-guards/",
      does: "Protects teeth from grinding and clenching",
      for: "People who grind at night",
    },
  ],
};

/** Schema: the nine service pages, names as in the handoff's ItemList */
export const pcItemList = pcGlance.rows.map((row) => ({ name: row.label, path: row.href }));

export const pcCheckups = {
  title: "Checkups & Cleanings",
  paragraphs: [
    "A checkup and professional cleaning twice a year is the center of preventive dental care. Brushing can't remove tartar once plaque hardens, but a hygienist can, before it irritates your gums.",
  ],
  listIntro: "Each dental cleaning and exam takes about an hour, and a new patient visit usually takes a little longer. It includes:",
  list: [
    { icon: "clipboard", text: "A review of your dental and medical history" },
    { icon: "xray", text: "Digital X-rays when you're due (or we can use X-rays from the past 12 months)" },
    { icon: "search", text: "An oral cancer screening" },
    { icon: "tooth", text: "A check for decay, and gum measurements" },
    { icon: "toothClean", text: "Removal of plaque and tartar, then a polish" },
    { icon: "brush", text: "Tips for brushing and flossing at home" },
  ],
  more: "See each step in detail: [What happens at a cleaning and checkup](/preventative-care/teeth-cleaning-and-check-ups/)",
  subs: [
    {
      icon: "search",
      title: "Oral cancer screening at every visit",
      text: "A screening is part of every checkup here. The dentist looks and feels for sores, red or white patches and lumps in your mouth, neck and throat. [About oral cancer screening](/preventative-care/oral-cancer-screening/)",
    },
    {
      icon: "brush",
      title: "Help with brushing & flossing",
      text: "Good habits at home make each cleaning easier. Our [oral hygiene tips](/preventative-care/oral-hygiene/) cover brushing angle, flossing and the foods that are hardest on teeth.",
    },
  ],
};

export const pcKids = {
  title: "Preventive Care for Kids",
  text: "Children can start seeing the dentist just after their first birthday. Early visits let your child get used to the chair and let the dentist spot problems while they're small.",
  items: [
    {
      icon: "smile",
      text: "[Children's dentistry](/preventative-care/child-dentistry/): gentle exams, cleanings and home-care advice for parents.",
    },
    {
      icon: "drop",
      text: "[Fluoride treatment](/preventative-care/fluoride/): professional-strength fluoride applied in a few minutes to help harden enamel.",
    },
    {
      icon: "shield",
      text: "[Dental sealants](/preventative-care/dental-sealants/): a thin, tooth-colored coating painted into the grooves of back teeth, where cavities often start.",
    },
  ],
};

export const pcGum = {
  title: "Gum Health",
  text: "Gum disease is an infection of the gums that can destroy the support around your teeth. Plaque is the main cause. Smoking, diabetes, stress, grinding, some medications and poor nutrition all raise the risk. Bleeding when you brush, puffy gums and bad breath are common early signs.",
  listIntro: "Treatment depends on how far it has gone:",
  items: [
    "[Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/) (scaling and root planing) cleans below the gumline and smooths the root surfaces.",
    "[Arestin](/preventative-care/arestin/) is an antibiotic placed directly into deep gum pockets after a deep cleaning.",
    "[Gum disease laser therapy](/preventative-care/gum-disease-laser-therapy/) treats infected gum tissue with a dental laser.",
    "[Periodontal maintenance](/preventative-care/periodontal-maintenance/) visits keep treated gums under control afterwards.",
  ],
};

export const pcProtect = {
  title: "Protecting Your Teeth",
  text: "Some damage comes from habits, not decay. If you clench or grind at night, a [custom night guard](/preventative-care/professional-night-guards/) made from an impression of your teeth cushions them while you sleep. If you play contact sports, wear a mouthguard, and avoid chewing ice, hard candy or sticky foods that can crack teeth or pull out fillings.",
};

export const pcNotSure = {
  title: "Not Sure What You Need?",
  intro: "Start with the problem you have. The dentist will check and explain your options before anything is done.",
  head: ["If you...", "Start here"],
  rows: [
    ["Haven't had a cleaning in a while", "[Teeth cleaning and checkups](/preventative-care/teeth-cleaning-and-check-ups/)"],
    ["Have gums that bleed or feel sore", "[Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/)"],
    ["Want one dental office for the whole family", "[Family dentistry](/family-dentistry/)"],
    ["Are booking your child's first visit", "[Children's dentistry](/preventative-care/child-dentistry/)"],
    ["Wake up with jaw pain or worn teeth", "[Custom night guards](/preventative-care/professional-night-guards/)"],
    ["Are in pain or have broken a tooth", "[Emergency dentistry](/emergency-dentistry/)"],
  ],
};

export const pcCost = {
  title: "What Preventive Care Costs",
  text: "Most dental insurance plans cover cleanings, and many cover two visits a year. Coverage depends on your plan, so call us to check before your visit.",
  items: [
    {
      icon: "shield",
      lead: "Insurance:",
      text: "we accept many PPO plans, including Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      icon: "tag",
      lead: "No insurance:",
      text: "the $89 new patient visit includes a cleaning, X-rays and an exam. [Special offers](/special-offers/)",
    },
    {
      icon: "card",
      lead: "Membership plan:",
      text: "$150 a year covers 2 cleanings, exams and X-rays, plus 15% off dental treatment. Each additional family member is $75.",
    },
    {
      icon: "banknote",
      lead: "Financing:",
      text: "CareCredit, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)",
    },
  ],
  after: "Payment is due at the time of service. We accept cash, check, Visa, MasterCard, Discover and American Express.",
};

export const pcFaqs: FaqBlock = {
  title: "Preventive Dentistry FAQs",
  items: [
    {
      question: "What is preventive dentistry?",
      answer:
        "Preventive dentistry is routine care that stops dental problems before they start or catches them early. It includes checkups, professional cleanings, X-rays, oral cancer screening, fluoride, sealants, gum care and advice for brushing and flossing at home, so small issues don't turn into fillings, root canals or lost teeth.",
    },
    {
      question: "How often should I have a checkup and cleaning?",
      answer:
        "Twice a year is the routine we recommend for most patients. If you have gum disease or get cavities often, the dentist may suggest coming in more often. Each visit takes about an hour and includes an exam, a cleaning and X-rays when you're due for them.",
    },
    {
      question: "Do you see children for preventive care?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale sees children from their first visit, just after their first birthday. Kids' visits include a gentle exam and cleaning, and the dentist may recommend fluoride or sealants to help protect their teeth. Parents get simple advice for brushing and snacks at home.",
    },
    {
      question: "What if I don't have dental insurance?",
      answer:
        "You have two options. New patients without insurance can have a cleaning, X-rays and an exam for $89. Our in-office membership plan is $150 a year and covers 2 cleanings, exams and X-rays, plus 15% off dental treatment. CareCredit financing is also available.",
    },
  ],
};

export const pcCta: ClosingCta = {
  title: "Book a Cleaning in Yardley",
  text: withNap(
    "Request an appointment online, or call and we'll find a time that works, including Saturday mornings.",
  ),
  buttons: ["appointment", "call"],
};
