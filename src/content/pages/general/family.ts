import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { withNap, type Point } from "./common";

/** Family Dentistry. Verbatim from 03 General Dentistry/01 Family Dentistry/Family Dentistry/02 Content.md */

export const famMeta: PageMeta = {
  path: "/family-dentistry/",
  title: "Family Dentist in Yardley, PA | Radiant Smiles",
  description:
    "Family dentist in Yardley, PA for every age: checkups, cleanings, kids' visits, fillings and more. New patients welcome. Call (215) 860-4600.",
};

export const famCrumbs = [
  { name: "Home", path: "/" },
  { name: "Family Dentistry", path: famMeta.path },
];

export const famHero: PageHeroContent = {
  h1: "Family Dentist in Yardley, PA",
  intro:
    "A family dentist looks after everyone in your household, from a toddler's first checkup to a grandparent's dentures, in one office. At Radiant Smiles @ Floral Vale, Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria are your family dentist in Yardley, PA, with checkups, cleanings, children's visits, fillings, crowns and more at 117 Floral Vale Boulevard. New patients are welcome, and we're open Saturdays from 8 am to 2 pm.",
  buttons: ["appointment", "call"],
};

/** Schema: Service node description (handoff 3a) */
export const famServiceDescription =
  "A family dentist looks after everyone in your household, from a toddler's first checkup to a grandparent's dentures, in one office.";

export const famAges = {
  title: "A Family Dentist in Yardley, PA for Every Age",
  intro:
    "One office for the whole family means one set of records, one phone number and one team that knows your history. Parents can bring their kids to the same dentists they see, and teens can stay with us into adulthood.",
  stages: [
    { icon: "smile", lead: "Babies and toddlers:", text: "a first visit just after the first birthday.", scale: 0.55 },
    { icon: "brush", lead: "Kids and teens:", text: "cleanings, fluoride, sealants and help with brushing.", scale: 0.72 },
    { icon: "tooth", lead: "Adults:", text: "checkups, gum care, fillings, crowns, implants and cosmetic care.", scale: 0.88 },
    { icon: "heart", lead: "Older adults:", text: "dentures, partials, relines and repairs.", scale: 1 },
  ],
  after: "We show children and adults how to brush and floss well, and we take time to explain what we find in plain words.",
};

export const famGeneral = {
  title: "What Is General Dentistry?",
  text: "General dentistry is the everyday dental care most people need: exams, cleanings, X-rays, fillings and treatment for gum disease. A general dentist diagnoses and treats problems with your teeth and gums and works to prevent new ones. Family dentistry is general dentistry for every age, so the whole household can be seen in one place.",
  listIntro: "At Radiant Smiles @ Floral Vale, general dentistry includes:",
  list: [
    { icon: "toothClean", text: "[Dental cleanings, exams and digital X-rays](/preventative-care/teeth-cleaning-and-check-ups/)" },
    {
      icon: "layers",
      text: "[Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/) and [periodontal maintenance](/preventative-care/periodontal-maintenance/) for gum disease",
    },
    { icon: "search", text: "[Oral cancer screening](/preventative-care/oral-cancer-screening/) at every checkup" },
    { icon: "clipboard", text: "A personal plan for home care" },
  ],
};

export const famCheckups = {
  title: "Checkups & Cleanings",
  text: "A checkup and cleaning twice a year is the base of good family dental care. Each visit takes about an hour and includes an exam, a professional cleaning, an oral cancer screening and digital X-rays when you're due. If several family members need cleanings, call us and ask about booking them close together. [What happens at a checkup](/preventative-care/teeth-cleaning-and-check-ups/)",
};

export const famChildren = {
  title: "Children's Dentistry",
  text: "Your child's first visit should be just after their first birthday. The dentist gently checks their teeth and gums, may clean them and apply fluoride, and gives you tips for brushing and snacks at home. As your child grows, sealants on the back teeth can help keep cavities away. [Children's dentistry in Yardley](/preventative-care/child-dentistry/)",
};

export const famRestorative = {
  title: "Restorative Care When You Need It",
  intro: "When a tooth is damaged or missing, you don't need to go somewhere new. Your family dentists provide:",
  list: [
    { icon: "tooth", text: "Tooth-colored fillings and crowns, with metal-free options" },
    { icon: "firstAid", text: "Root canal therapy and tooth extractions" },
    { icon: "implant", text: "Bridges and dental implants" },
    { icon: "smile", text: "Full, partial and immediate dentures, plus relines and repairs" },
  ],
  after:
    "The office uses high-power dental microscopes, similar to the kind an eye doctor uses, for a precise fit and finish on fillings and crowns. [Restorative dentistry](/restorative-dentistry/)",
};

export const famCosmetic = {
  title: "Cosmetic Care & Straighter Teeth",
  text: "Family dentistry isn't only about fixing problems. Adults can brighten their smile with custom take-home [teeth whitening](/cosmetic-dentistry/teeth-whitening/) trays, repair chips with bonding, or cover worn and stained teeth with porcelain veneers. Teens and adults can straighten their teeth with clear aligners through [Invisalign](/cosmetic-dentistry/invisalign/) and Invisalign Teen.",
};

export const famEmergency = {
  title: "When Someone Has a Dental Emergency",
  text: "Toothaches and broken teeth rarely happen at a good time, especially with kids. We reserve same-day emergency appointments every business day and see emergencies on Saturday mornings. Call first and we'll tell you how soon to come in. [Emergency dentistry](/emergency-dentistry/)",
};

export const famDentists = {
  title: "Meet Your Family Dentists",
  intro: "Both dentists earned their Doctor of Dental Medicine degrees at Temple University's Kornberg School of Dentistry.",
  people: [
    {
      key: "drBhalala",
      name: "Dr. Urvishkumar Bhalala, DMD",
      href: "/about-us/dr-urvishkumar-bhalala/",
      text: "worked at several practices before opening his own and is married with two children.",
    },
    {
      key: "drGadria",
      name: "Dr. Jaspreet Gadria, DMD",
      href: "/about-us/dr-jaspreet-gadria-dmd/",
      text: "graduated with high honors, belongs to the Pennsylvania Dental Association and the American Dental Association, and speaks English and Punjabi.",
    },
  ],
} as const;

export const famPay = {
  title: "Family Dental Care With or Without Insurance",
  intro: "You can bring the whole family whether or not you have dental insurance.",
  items: [
    {
      lead: "Insurance:",
      text: "we accept many PPO plans, including Aetna, Capital Blue Cross, Delta Dental, Guardian, Horizon Blue Cross, United Concordia Elite Plus and UnitedHealthcare. Coverage depends on your plan. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "Membership plan:",
      text: "$150 a year for the first person and $75 for each additional family member. It covers 2 cleanings, exams and X-rays a year, plus 15% off dental treatment.",
    },
    { lead: "New patients without insurance:", text: "a cleaning, X-rays and exam for $89. [Special offers](/special-offers/)" },
    { lead: "Financing:", text: "CareCredit, subject to credit approval." },
  ] satisfies Point[],
};

export const famFaqs: FaqBlock = {
  title: "Family Dentistry FAQs",
  items: [
    {
      question: "Are you accepting new patients?",
      answer:
        "Yes, new patients are welcome at Radiant Smiles @ Floral Vale in Yardley, PA. Request an appointment online or call (215) 860-4600. New patients without insurance can have a cleaning, X-rays and an exam for $89, and we accept many PPO insurance plans.",
    },
    {
      question: "What is the difference between a family dentist and a general dentist?",
      answer:
        "A family dentist is a general dentist who sees patients of every age. Both provide exams, cleanings, X-rays, fillings and gum care. A family dentist also sees young children, so parents, kids and grandparents can all be cared for by the same dentists in one office.",
    },
    {
      question: "What age can my child start seeing the dentist?",
      answer:
        "Your child should have their first dental visit just after their first birthday. At Radiant Smiles @ Floral Vale, the dentist gently checks your child's teeth and gums, may clean them and apply fluoride, and shows you how to care for their teeth at home.",
    },
    {
      question: "Do you have a dental plan for families without insurance?",
      answer:
        "Yes. Our in-office membership plan is $150 a year for the first person and $75 for each additional family member. Each member gets 2 cleanings, exams and X-rays a year, plus 15% off dental treatment, with no insurance company involved.",
    },
    {
      question: "Are you open on Saturdays?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale is open on Saturdays from 8 am to 2 pm, which makes it easier to book checkups around school and work. We also reserve same-day emergency appointments every business day for toothaches and broken teeth.",
    },
  ],
};

export const famCta: ClosingCta = {
  title: "Book a Family Visit",
  text: withNap("Request an appointment online, or call and we'll find a time that works for your family."),
  buttons: ["appointment", "call"],
};
