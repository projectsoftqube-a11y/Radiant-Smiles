import { napCtaLine, type ClosingCta, type CtaButton } from "../shared";
import type { Crumb } from "@/lib/schema";

/**
 * Shared pieces for the location pages (docs/seo-content/06 Locations). Copy is verbatim from
 * each page's 02 Content.md; headings and labels use "&" for "and" (house style), paragraphs
 * and FAQ answers keep "and". Drive times print exactly as the fact sheet ranges (flagged
 * for a Google Maps check before launch). The four on-hold towns are never linked.
 */

export const AREAS_PATH = "/areas-we-serve/";

/** Breadcrumb trail: Home › Areas We Serve › town */
export function areaCrumbs(name: string, path: string): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Areas We Serve", path: AREAS_PATH },
    { name, path },
  ];
}

/** "Directions and contact details" (the [Link] under every Getting Here section) */
export const directionsLink = { label: "Directions and contact details", href: "/contact-us/" };

/**
 * A run of content in file order, for sections whose shape varies by page: paragraphs,
 * bold-led or plain bullet lists, H3 sub-headings, a table, or the directions link.
 */
export type Block =
  | { p: string }
  | { h3: string }
  | { ul: { lead?: string; text: string }[] }
  | { table: { head: string[]; rows: string[][]; label: string } }
  | { directions: true };

/** Final CTA: the NAP line, the hours line, the buttons and "All areas we serve" */
export function townCta(title: string, hours: string, buttons: CtaButton[] = ["appointment"]): ClosingCta {
  return {
    title,
    text: napCtaLine,
    sub: hours,
    buttons,
    link: { label: "All areas we serve", href: AREAS_PATH },
  };
}

/** The two hours lines the location final CTAs print (verbatim) */
export const hoursLine = {
  saturday: "Open Monday to Saturday, including Saturday 8 am to 2 pm.",
  late: "Open Monday to Saturday, with Wednesday and Thursday until 6 pm and Saturday 8 am to 2 pm.",
};

/** The safety line kept visible under emergency copy (Morrisville, Trenton, Mercer County) */
export const safetyLine =
  "If you have swelling that spreads to your eye or neck, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room.";

/** Decorative route facts for each town's hero map (restating the page's own copy) */
export type RouteFacts = {
  /** Key in the shared map (components/sections/home/Areas PLACES) */
  place: string;
  drive: string;
  roads: string;
  chips: string[];
  /** Where the route crosses the river, if it does */
  bridge?: string;
};
