import type { LinkItem } from "./home";
import type { ClosingCta, PageHeroContent, PageMeta } from "./shared";

/**
 * Contact Us. Copy verbatim from docs/seo-content/01 Core/06 Contact/Contact Us/02 Content.md.
 * NAP and hours come from site.ts, so they always match the footer and the schema.
 */

export const contactMeta: PageMeta = {
  path: "/contact-us/",
  title: "Contact Our Dental Office in Yardley, PA | Radiant Smiles",
  description:
    "Contact our dental office in Yardley, PA, at 117 Floral Vale Boulevard. Open Saturdays and until 6 pm Wed and Thu. Call (215) 860-4600.",
};

export const contactHero: PageHeroContent = {
  h1: "Contact Our Dental Office in Yardley, PA",
  intro:
    "Radiant Smiles @ Floral Vale is a dental office in Yardley, PA, at 117 Floral Vale Boulevard. Call (215) 860-4600 to book, ask a question or get help with a dental emergency, or request an appointment online. We're open six days a week, including Saturday mornings.",
  buttons: ["call", "appointment"],
};

export const contactRequest = {
  title: "Call or Request an Appointment",
  text: "The fastest way to book is to call (215) 860-4600 during office hours. You can also send us a request below, and the team will contact you to arrange a time.",
  urgent: "In pain or have a broken tooth? Don't wait for a reply. Call us, and ask for a same-day emergency appointment.",
};

/** Appointment form wording (content file, "[Form] Request an appointment") */
export const appointmentForm = {
  heading: "Tell us when suits you and we'll contact you to confirm",
  fields: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    patient: "New or existing patient",
    times: "Preferred days and times",
    message: "Message",
  },
  patientOptions: ["New patient", "Existing patient"],
  messageNote: "Please don't include medical details.",
  privacy: "See our [Privacy Policy](/patient-information/terms/privacy/).",
  button: "Request an Appointment",
  thanks:
    "Thanks, we've received your request and will contact you to confirm a time. In pain or need to be seen today? Call (215) 860-4600.",
};

export const contactHours = {
  title: "Office Hours",
  note: "Need a visit after work? We're open until 6 pm on Wednesday and Thursday, and from 8 am to 2 pm on Saturday.",
};

export const contactDirections = {
  title: "Directions to 117 Floral Vale Boulevard",
  intro:
    "The office is on Floral Vale Boulevard in Lower Makefield Township, Bucks County, with a Yardley address. Typical drive times, depending on traffic:",
  routes: [
    { from: "Yardley Borough", time: "5–10 min", route: "Big Oak Road or Oxford Valley Road" },
    { from: "Morrisville", time: "5–10 min", route: "US-1 or Pennsylvania Avenue" },
    { from: "Trenton, NJ", time: "about 15 min", route: "US-1 (Trenton-Morrisville Toll Bridge) or the Calhoun Street Bridge" },
    { from: "Ewing, NJ", time: "15–20 min", route: "I-295 (Scudder Falls Bridge)" },
    { from: "Washington Crossing, PA", time: "15–20 min", route: "PA-32 (River Road) and I-295" },
  ],
  button: "Get Directions",
  sub: {
    title: "Finding Our Floral Vale Dentist Office in Yardley",
    text: "Set your GPS to 117 Floral Vale Boulevard, Yardley, PA 19067. If you get turned around, call (215) 860-4600 and the front desk will guide you in.",
  },
};

export const contactParking = {
  title: "Parking & Access",
  text: "If you have questions about parking, wheelchair access or bringing a family member into your appointment, call us before your visit and we'll help you plan it.",
};

export const contactFirstVisit = {
  title: "Before Your First Visit",
  text: "New patients can save time by reading what to expect at a first visit. If you don't have insurance, ask about the $89 new patient visit, which includes a cleaning, X-rays and an exam.",
  links: [
    { label: "New patient information", href: "/patient-information/new-patients/" },
    { label: "Current special offers", href: "/special-offers/" },
  ] as LinkItem[],
};

export const contactCta: ClosingCta = {
  title: "Call Our Dental Office in Yardley, PA",
  text: "Call (215) 860-4600 or request an appointment online. Saturday morning appointments are available.",
};

export const contactCrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us/" },
];
