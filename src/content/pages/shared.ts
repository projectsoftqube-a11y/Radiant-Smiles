import { membershipPlan, offers, practice } from "@/content/site";
import type { LinkItem } from "./home";

/** The two calls to action every Core page repeats (labels verbatim from the content files). */
export const callLink: LinkItem = { label: `Call ${practice.phone.display}`, href: practice.phone.href };
export const appointmentLink: LinkItem = { label: "Request an Appointment", href: "/patient-information/scheduling/" };

/** Page head fields, verbatim from each content file's "SEO fields". */
export type PageMeta = { path: string; title: string; description: string; noindex?: boolean };

/**
 * A call-to-action button: the standard call / appointment pair, or a page's own label
 * and link (verbatim from its content file). The first button in a row is the primary.
 */
export type CtaButton = "call" | "appointment" | { label: string; href: string; external?: boolean; track?: string };

/** Hero: the H1, its intro paragraph and which buttons it shows. */
export type PageHeroContent = {
  h1: string;
  intro: string;
  /** Further hero paragraphs after the intro (content-file order) */
  more?: string[];
  /** Hero buttons, in content-file order */
  buttons: CtaButton[];
};

/**
 * Closing call to action (its text may carry inline [label](/path) links). Buttons default
 * to call, then appointment.
 */
export type ClosingCta = {
  title: string;
  text: string;
  /** A second paragraph under the text (e.g. the NAP line) */
  sub?: string;
  buttons?: CtaButton[];
  /** A text link under the buttons ("[Link]" in a content file) */
  link?: { label: string; href: string; track?: string };
  /** A plain-text quote above the H2 (no Review markup) */
  quote?: { text: string; author: string };
};

/** The NAP line that closes every Patient Information page (phone as a tel: link) */
export const napCtaLine = `${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode} · [${practice.phone.display}](${practice.phone.href})`;

export type FaqBlock = { title: string; items: { question: string; answer: string }[] };

/**
 * The fields both forms ask, Contact Us and Scheduling (the user's requests, 15 Oct 2026): first
 * existing or new patient (two boxes), then the form. The patient and service choices live in
 * lib/appointment-validation.ts (shared with the server).
 */
export const formFields = {
  /** The opening question: two square boxes, then the form */
  patientPrompt: "Are you an existing or new patient?",
  paths: {
    existing: "Welcome back. Book your next checkup or treatment.",
    new: `Your first visit with us. No insurance? It's $${offers.newPatient.price}.`,
  },
  change: "Change",
  name: "Full Name",
  phone: "Phone Number",
  email: "Email Address",
  service: "Services",
  serviceHint: "Select all that apply",
  message: "Message",
  messagePlaceholder: "Anything we should know, such as the days and times that suit you",
};

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * The in-office membership plan as table rows, built from site.ts (rate card, client 15 Oct
 * 2026, corrected 19 Oct 2026: nothing included), so every table shows the same prices.
 */
export const membershipRows: { item: string; price: string }[] = [
  { item: "Yearly membership, first person", price: `${usd(membershipPlan.yearly)} a year` },
  { item: "Each additional family member", price: `${usd(membershipPlan.additionalMember)} a year` },
  { item: `Cleaning, exam & X-rays (up to ${membershipPlan.cleaningsPerYear} a year)`, price: `${usd(membershipPlan.cleaningExamXrays)} per visit` },
  { item: "A 3rd cleaning, exam & X-rays in the same year", price: usd(membershipPlan.thirdCleaning) },
  { item: "Periodontal maintenance", price: `${usd(membershipPlan.perioMaintenance)} per visit` },
  { item: "Emergency visit", price: `${usd(membershipPlan.emergencyVisit)} per visit` },
  { item: `Any other dental services (except ${membershipPlan.discountExcludes})`, price: `${membershipPlan.otherServicesDiscountPercent}% off` },
];

/** The plan's terms (client's rate card), shown wherever the full plan is listed */
export const membershipTerms: readonly string[] = membershipPlan.terms;

