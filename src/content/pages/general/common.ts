import { napLine } from "@/content/site";
import type { Crumb } from "@/lib/schema";

/**
 * Shared pieces for the General Dentistry pages (docs/seo-content/03 General Dentistry).
 * Copy in these files is verbatim from each page's 02 Content.md; headings, link labels
 * and chips use "&" for "and" (house style). FAQ questions keep "and".
 */

export const PC_PATH = "/preventative-care/";

/** Breadcrumb trail: Home › Preventive Care › page (handoffs) */
export function pcCrumbs(name: string, path: string): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Preventive Care", path: PC_PATH },
    { name, path },
  ];
}

/** Final CTA paragraph: the page's sentence, then the NAP character for character */
export const withNap = (text: string) => `${text} ${napLine}.`;

/** A bold-led line ("**Insurance:** we accept…") */
export type Point = { lead: string; text: string };

/** Cost & insurance section (shared layout on the treatment pages) */
export type CostBlock = {
  title: string;
  paragraphs?: string[];
  /** An H3 heading over the ways to pay */
  itemsTitle?: string;
  items?: Point[];
  after?: string[];
};
