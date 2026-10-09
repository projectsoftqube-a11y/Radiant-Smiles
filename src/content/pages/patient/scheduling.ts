import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs } from "./common";

/** Scheduling. Verbatim from 02 Patient Info/02 Conversion/Scheduling/02 Content.md */

export const schedMeta: PageMeta = {
  path: "/patient-information/scheduling/",
  title: "Schedule a Dentist Appointment in Yardley, PA",
  description:
    "Book a dentist appointment in Yardley, PA online or call (215) 860-4600. Open Saturdays, with same-day emergency openings every business day.",
};

export const schedCrumbs = piCrumbs("Scheduling", schedMeta.path);

export const schedHero: PageHeroContent = {
  h1: "Schedule a Dentist Appointment in Yardley",
  intro:
    "Request a dentist appointment in Yardley with the form below, or call (215) 860-4600 and we'll find a time that works. We schedule every appointment as promptly as possible. If you're in pain, tell us: every attempt is made to see you that day.",
  buttons: ["call"],
};

export const schedRequest = {
  title: "Request a Dentist Appointment in Yardley",
  text: "Tell us when suits you and our team will contact you to confirm a time.",
};

/** Appointment request form wording (content file, "[Form] Appointment request") */
export const schedulingForm = {
  heading: "Request an appointment",
  fields: {
    name: "First and last name",
    phone: "Phone",
    email: "Email",
    patient: "New or existing patient",
    times: "Preferred days and times",
    reason: "Reason for visit",
  },
  timesHint: 'e.g. "weekday mornings" or "Saturday"',
  patientOptions: ["New patient", "Existing patient"],
  reasonOptions: ["Checkup and cleaning", "New patient visit", "Tooth pain", "Cosmetic consultation", "Other"],
  note: "Please don't include medical details. We'll talk through your health history in person or on the phone.",
  privacy: "See our [Privacy Policy](/patient-information/terms/privacy/).",
  button: "Request My Appointment",
  thanks:
    "Thanks, we've received your request. It isn't a confirmed booking yet: our team will contact you to confirm the day and time. If you're in pain or it's urgent, please call [(215) 860-4600](tel:+12158604600) now. New patient? Here's [how to get your patient forms](/patient-information/patient-registration/) before you arrive.",
};

export const schedHours = {
  title: "Office Hours",
  note: "Working weekdays? Wednesday and Thursday run until 6:00 pm, and Saturday appointments start at 8:00 am.",
};

export const schedEmergency = {
  title: "Same-Day Dentist Appointments for Emergencies",
  text: "Same-day dentist appointments are available for emergencies. We keep openings in the schedule every business day for toothaches, oral infections and cracked or broken teeth. Call rather than using the form, so we can fit you in. An emergency visit starts with a 30-minute limited exam to diagnose the problem and begin treatment.",
  link: { label: "What to do in a dental emergency", href: "/emergency-dentistry/" },
};

export const schedBefore = {
  title: "Before Your Appointment",
  items: [
    { icon: "bell", lead: "Reminders:", text: "you'll get an appointment reminder before your visit." },
    { icon: "clock", lead: "On time:", text: "we work to stay on schedule and keep your wait short." },
    {
      icon: "clipboard",
      lead: "New patients:",
      text: "[get your patient forms](/patient-information/patient-registration/) before your visit and see [what to expect at your first visit](/patient-information/new-patients/).",
    },
  ],
  link: { label: "Directions & contact details", href: "/contact-us/" },
};

export const schedFaqs: FaqBlock = {
  title: "Scheduling FAQs",
  items: [
    {
      question: "Can I get a same-day dentist appointment?",
      answer:
        "If you're in pain or have a dental emergency, yes, in most cases. Radiant Smiles @ Floral Vale keeps openings every business day for urgent problems. Call (215) 860-4600 as early as you can and describe what's happening so the team can offer the first available time.",
    },
    {
      question: "Is my appointment confirmed when I send the online form?",
      answer:
        "Not yet. The online form is a request. Our team contacts you to confirm the day and time that work for both of us. If you need to be seen today, call (215) 860-4600 instead so we can check today's openings with you.",
    },
  ],
};

export const schedCta: ClosingCta = {
  title: "Book Your Visit to Radiant Smiles @ Floral Vale",
  text: napCtaLine,
  buttons: ["call", { label: "Request an Appointment", href: "#appointment-form" }],
};
