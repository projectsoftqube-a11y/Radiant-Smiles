import type { IconName } from "@/components/ui/Icon";
import type { Crumb } from "@/lib/schema";
import type { PageMeta } from "../shared";

/**
 * Legal pages (09 Compliance/01 Legal). Copy is verbatim from each 02 Content.md, including
 * the SEO team's "[CONFIRM: …]" notes: on staging they render as visible "To confirm" tags
 * (CLAUDE.md), and each must be filled in or removed by the practice before launch.
 */

export type LegalBlock =
  /** A paragraph (inline **bold**, [links](…), the phone number and [CONFIRM …] notes) */
  | { p: string }
  /** A plain bulleted list */
  | { ul: string[] }
  /** A list shown as cards (bold-led items), with one icon per item */
  | { cards: string[]; icons: IconName[] }
  /** "Please don't" items */
  | { donts: string[] }
  /** Links to the other policies ("[label](href)" or "[label](href): description") */
  | { policies: string[] }
  /** H3 sub-sections shown side by side (HIPAA rights), all text visible */
  | { rights: { h3: string; text: string; icon: IconName }[] }
  /** An H3 sub-heading in the flow */
  | { h3: string }
  /** A titled panel: the bold title line and its list */
  | { panel: { title: string; ul: string[]; tone: "allow" | "never" } }
  /** A highlighted note (emergency, help) */
  | { callout: string; tone: "alert" | "help"; icon: IconName }
  /** A paragraph that is only a "[CONFIRM …]" note */
  | { confirm: string }
  /** Address lines (privacy officer) */
  | { address: string[] };

export type LegalSection = { id: string; h2: string; icon: IconName; blocks: LegalBlock[]; contact?: boolean };

export type LegalPage = {
  meta: PageMeta;
  crumbs: Crumb[];
  /** Eyebrow above the H1 */
  label: string;
  hero: { h1: string; intro: string; more?: string[]; dated: string };
  sections: LegalSection[];
};

export const PATIENT_INFO: Crumb = { name: "Patient Information", path: "/patient-information/" };
export const TERMS: Crumb = { name: "Terms of Use", path: "/patient-information/terms/" };

/** HIPAA handoff: the notice is linked from New Patients and Patient Registration too */
export const noticeLink = { label: "Notice of Privacy Practices", href: "/hipaa-notice-of-privacy-practices/" };

/** The NAP line closing each page (handoff: exactly as on the homepage and GBP) */
export const legalNap = "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600";
