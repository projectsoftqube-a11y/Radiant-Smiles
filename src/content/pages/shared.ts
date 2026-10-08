import { practice } from "@/content/site";
import type { LinkItem } from "./home";

/** The two calls to action every Core page repeats (labels verbatim from the content files). */
export const callLink: LinkItem = { label: `Call ${practice.phone.display}`, href: practice.phone.href };
export const appointmentLink: LinkItem = { label: "Request an Appointment", href: "/patient-information/scheduling/" };

/** Page head fields, verbatim from each content file's "SEO fields". */
export type PageMeta = { path: string; title: string; description: string; noindex?: boolean };

/** Hero: the H1, its intro paragraph and which buttons it shows. */
export type PageHeroContent = {
  h1: string;
  intro: string;
  /** Hero buttons, in content-file order */
  buttons: ("call" | "appointment")[];
};

/** Closing call to action (its text may carry inline [label](/path) links). */
export type ClosingCta = { title: string; text: string };

export type FaqBlock = { title: string; items: { question: string; answer: string }[] };
