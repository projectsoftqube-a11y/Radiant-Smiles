import { napCtaLine } from "../shared";
import type { Crumb } from "@/lib/schema";

/**
 * Shared pieces for the Restorative Dentistry pages (docs/seo-content/04 Restorative Dentistry).
 * Copy in these files is verbatim from each page's 02 Content.md; headings, link labels and
 * chips use "&" for "and" (house style). FAQ questions keep "and".
 */

export const RD_PATH = "/restorative-dentistry/";
export const DENTURES_PATH = "/restorative-dentistry/dentures/";

/** Breadcrumb trail: Home › Restorative Dentistry › (Dentures ›) page */
export function rdCrumbs(name: string, path: string, underDentures = false): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Restorative Dentistry", path: RD_PATH },
    ...(underDentures ? [{ name: "Dentures", path: DENTURES_PATH }] : []),
    { name, path },
  ];
}

/** The NAP line under every restorative closing CTA */
export const ctaNap = napCtaLine;
