import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { homeFinalCta } from "@/content/pages/home";

/** Closing call to action (shared design, home page copy). */
export function FinalCta() {
  return <ClosingCta id="home-cta-title" content={homeFinalCta} track="final" />;
}
