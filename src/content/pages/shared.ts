import { practice } from "@/content/site";
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
