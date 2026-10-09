import { napCtaLine } from "../shared";
import type { Crumb } from "@/lib/schema";

/**
 * Shared pieces for the Cosmetic Dentistry pages (docs/seo-content/05 Cosmetic Dentistry).
 * Copy in these files is verbatim from each page's 02 Content.md; headings, link labels and
 * chips use "&" for "and" (house style). FAQ questions keep "and". Offer wording matches
 * /special-offers/ exactly; never an after-offer (net) price.
 */

export const CD_PATH = "/cosmetic-dentistry/";
export const INVISALIGN_PATH = "/cosmetic-dentistry/invisalign/";

/** Breadcrumb trail: Home › Cosmetic Dentistry › (Invisalign ›) page */
export function cdCrumbs(name: string, path: string, underInvisalign = false): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Cosmetic Dentistry", path: CD_PATH },
    ...(underInvisalign ? [{ name: "Invisalign", path: INVISALIGN_PATH }] : []),
    { name, path },
  ];
}

/** The NAP line under every cosmetic closing CTA */
export const ctaNap = napCtaLine;

/** The three Invisalign pages, for the sub-navigation */
export const invisalignNav = [
  { label: "Invisalign", href: INVISALIGN_PATH },
  { label: "Invisalign Teen", href: "/cosmetic-dentistry/invisalign/invisalign-teen/" },
  { label: "Invisalign Cost", href: "/cosmetic-dentistry/invisalign/invisalign-cost/" },
];
