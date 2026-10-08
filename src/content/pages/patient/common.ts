import type { Crumb } from "@/lib/schema";

/**
 * Shared pieces for the Patient Information pages (docs/seo-content/02 Patient Info).
 * Copy in these files is verbatim from each page's 02 Content.md; headings, link labels
 * and chips use "&" for "and" (house style).
 */

export const PI_PATH = "/patient-information/";
export const CC_PATH = "/patient-information/care-and-comfort/";

/** Breadcrumb trail: Home › Patient Information › (Care & Comfort ›) page */
export function piCrumbs(name: string, path: string, underCare = false): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Patient Information", path: PI_PATH },
    ...(underCare ? [{ name: "Care & Comfort", path: CC_PATH }] : []),
    { name, path },
  ];
}

/** The scheduling page (every "Request an Appointment" button points here) */
export const SCHEDULING = "/patient-information/scheduling/";
