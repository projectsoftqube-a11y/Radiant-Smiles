import { napCtaLine, type ClosingCta, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs } from "./common";

/**
 * Patient Registration (launch version: no online form). Verbatim from
 * 02 Patient Info/02 Conversion/Patient Registration/02 Content.md
 * No form is embedded here and no tracking pixels are loaded (handoff).
 */

export const regMeta: PageMeta = {
  path: "/patient-information/patient-registration/",
  title: "Radiant Smiles Patient Forms & Registration | Yardley",
  description:
    "Need your Radiant Smiles patient forms? Call (215) 860-4600 and we'll get your registration, medical history and insurance forms to you before your visit.",
};

export const regCrumbs = piCrumbs("Patient Registration", regMeta.path);

export const regHero: PageHeroContent = {
  h1: "Radiant Smiles Patient Forms & Registration",
  intro:
    "Need your Radiant Smiles patient forms before your visit to our Yardley office? Call (215) 860-4600 and we'll get your registration forms to you before your visit. Filling them in ahead of time means your appointment can focus on your care instead of a clipboard.",
  buttons: ["call", "appointment"],
};

export const regGetting = {
  title: "Getting Your Radiant Smiles Patient Forms",
  text: "Registration forms: call us and we'll get them to you before your visit. Online registration isn't available yet, so please don't send your forms or health details through the website contact or appointment forms.",
  listIntro: "The forms ask for:",
  items: [
    { icon: "user", text: "Your details and contact information" },
    { icon: "heart", text: "Your medical history and current medications" },
    { icon: "tooth", text: "Your dental history and the reason for your visit" },
    { icon: "card", text: "Your dental insurance details" },
    { icon: "shield", text: "Parent or guardian details, for patients under 18" },
    { icon: "check", text: "Your consent and signature" },
  ],
};

export const regSections = [
  {
    id: "medical-history",
    icon: "heart",
    title: "Medical History",
    text: "Your medical history helps the dentist plan safe care. Please tell us about conditions such as diabetes, high blood pressure, an artificial heart valve or joint replacement, or rheumatic fever. List every medication you take, including heart medication, aspirin and blood thinners.",
  },
  {
    id: "insurance-details",
    icon: "card",
    title: "Insurance Details",
    text: "If you have dental insurance, have your card ready. You'll need the subscriber's name and date of birth, the insurance company and the member ID. We accept many PPO plans: see the [insurance plans we accept](/patient-information/insurance-payment-options/).",
  },
  {
    id: "under-18",
    icon: "user",
    title: "Patients Under 18",
    text: "A parent or guardian should complete the forms for patients under 18. All patients under 18 must be accompanied by a parent or guardian at their visit.",
  },
] as const;

export const regPrivacy = {
  title: "Keeping Your Health Information Private",
  text: "Please don't send health information through our website contact or appointment forms. They aren't meant for private health details. If you have a question about your forms or your medical history, call (215) 860-4600 and we'll help.",
  link: { label: "What to expect at your first visit", href: "/patient-information/new-patients/" },
};

export const regCta: ClosingCta = {
  title: "Book Your Visit to Our Yardley Office",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};
