import type { LinkItem } from "../home";
import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs, SCHEDULING } from "./common";

/** New Patients. Verbatim from 02 Patient Info/01 Info/New Patients/02 Content.md */

export const npMeta: PageMeta = {
  path: "/patient-information/new-patients/",
  title: "New Patients | Yardley Dentist Accepting New Patients",
  description:
    "Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients. See what happens at your first visit, then book online or call (215) 860-4600.",
};

export const npCrumbs = piCrumbs("New Patients", npMeta.path);

export const npHero: PageHeroContent = {
  h1: "Yardley Dentist Accepting New Patients",
  intro:
    "Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients for family, cosmetic and restorative care. Your first visit is about getting to know your mouth and your goals. We review your history, examine your teeth and gums, and explain what we found and what it costs before any treatment starts. No pressure to decide that day.",
  buttons: [{ label: "Request Your First Visit", href: SCHEDULING }, "call"],
};

export const npFormsLink: LinkItem = {
  label: "Get your patient forms before you arrive",
  href: "/patient-information/patient-registration/",
};

/** Quick facts strip (plain text) */
export const npFacts = [
  { icon: "badgeDollar", text: "$89 New Patient Visit Special (uninsured): cleaning, X-rays and exam" },
  { icon: "shield", text: "Many PPO plans accepted" },
  { icon: "calendar", text: "Open Saturdays, 8:00 am – 2:00 pm" },
  { icon: "pin", text: "117 Floral Vale Boulevard, Yardley, PA 19067" },
] as const;

export const npExpect = {
  title: "What to Expect at Your First Dental Visit",
  intro:
    "Your first appointment usually consists of a comprehensive exam and a review of your treatment options, with time to diagnose any immediate concerns properly.",
  steps: [
    { icon: "clipboard", lead: "Your history.", text: "We go over your medical and dental history and the medications you take." },
    {
      icon: "xray",
      lead: "X-rays.",
      text: "We look at X-rays from your previous dentist, if you have them, and take digital X-rays here when more are needed.",
    },
    {
      icon: "search",
      lead: "Your new patient dental exam.",
      text: "The dentist checks your teeth and gums and screens for oral cancer, as at every exam.",
    },
    {
      icon: "badgeDollar",
      lead: "Your plan and costs.",
      text: "We explain what we found, the options that fit and what each one costs. You decide what happens next.",
    },
  ],
  after:
    "Treatment can often be done or started on the same day as the consultation. If your medical history or treatment plan is complex, we may book a second appointment.",
};

export const npBring = {
  title: "What to Bring to Your First Appointment",
  intro: "Bringing these items means less time on paperwork and a more accurate plan:",
  items: [
    {
      icon: "xray",
      lead: "Previous X-rays.",
      text: "Ask your previous dentist or physician to forward them to us. If there isn't enough time, pick them up and bring them with you.",
    },
    { icon: "clipboard", lead: "A list of medications", text: "you currently take." },
    { icon: "card", lead: "Your dental insurance information,", text: "including any completed insurance forms." },
    {
      icon: "user",
      lead: "A parent or guardian",
      text: "for every patient under 18. All patients under 18 must be accompanied by one.",
    },
  ],
  health: {
    title: "Tell us about your health",
    text: "Let us know if you have diabetes, high blood pressure, an artificial heart valve or joint replacement, or a history of rheumatic fever. Also tell us if you take heart medication, aspirin or blood thinners (anticoagulant therapy). These can change how your care is planned.",
  },
};

export const npSpecial = {
  title: "$89 New Patient Special for Uninsured Patients",
  paragraphs: [
    "If you don't have dental insurance, the $89 New Patient Visit Special includes a cleaning, X-rays and an exam. After your first visit, you can join our in-office membership plan for $150 a year to cover your routine care.",
    "Have insurance? We accept many PPO plans, including Aetna, Delta Dental, Guardian, Horizon Blue Cross and MetLife. Call us to check your coverage before you come in.",
  ],
  links: [
    { label: "See all current special offers", href: "/special-offers/", track: "click_offer" },
    { label: "Insurance plans & payment options", href: "/patient-information/insurance-payment-options/" },
  ],
};

export const npForms = {
  title: "Forms to Fill In Before You Arrive",
  paragraphs: [
    "Registration forms: call (215) 860-4600 and we'll get them to you before your visit. They cover your registration, medical history and insurance details, and filling them in at home gives you time to look up medication names and policy numbers.",
    "Please don't send health information through the general contact form on our website.",
  ],
  link: { label: "How to get your patient forms", href: "/patient-information/patient-registration/" },
};

export const npFaqs: FaqBlock = {
  title: "New Patient FAQs",
  items: [
    {
      question: "What happens at a new patient dental visit?",
      answer:
        "A new patient visit at Radiant Smiles @ Floral Vale is a comprehensive evaluation. The dentist reviews your medical and dental history, takes or reviews X-rays, examines your teeth and gums, and screens for oral cancer. You then get a clear explanation of your treatment options and their costs.",
    },
    {
      question: "Can I have treatment at my first appointment?",
      answer:
        "Often, yes. Treatment can usually be done or started on the same day as your consultation. If you have a complex medical history or need a larger treatment plan, the dentist may schedule a second appointment so there's enough time to do the work properly.",
    },
    {
      question: "Do I need to bring X-rays from my old dentist?",
      answer:
        "It helps. Ask your previous dentist or physician to send your recent X-rays to our office, or pick them up and bring them if time is short. If we need additional images, we can take digital X-rays during your visit at our Yardley office.",
    },
    {
      question: "Can a teenager come to a first visit alone?",
      answer:
        "No. All patients under the age of 18 must be accompanied by a parent or guardian. The adult can also help complete the medical history and insurance sections of the patient forms before the visit, which keeps the appointment running on time.",
    },
    {
      question: "Do you see new patients without insurance?",
      answer:
        "Yes. Uninsured new patients can book the $89 New Patient Visit Special, which includes a cleaning, X-rays and an exam. Our in-office membership plan, at $150 a year, then covers two cleanings, exams and X-rays and gives you 15% off dental treatment.",
    },
  ],
};

export const npCta: ClosingCta = {
  title: "Book Your First Visit With a Yardley Dentist Accepting New Patients",
  text: napCtaLine,
  buttons: [{ label: "Request Your First Visit", href: SCHEDULING }, "call"],
};
