import { Cost } from "@/components/sections/general/Cost";
import {
  PaceControl,
  StainCulprits,
  TrayFit,
  TrayNights,
  WhiteningTimeline,
  WhoWhitening,
} from "@/components/sections/cosmetic/Whitening";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { twCost, twCrumbs, twCta, twFaqs, twHero, twMeta, twProcedureDescription } from "@/content/pages/cosmetic/smile";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(twMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (take-home trays, noninvasive) + breadcrumb; 3b: FAQPage. No Offer nodes until terms are confirmed. */
const schema = graph(
  treatmentPage({ path: twMeta.path, name: twMeta.title, description: twMeta.description, main: "procedure" }),
  breadcrumbList(twMeta.path, twCrumbs),
  medicalProcedure({
    path: twMeta.path,
    name: "Professional teeth whitening (custom take-home trays)",
    description: twProcedureDescription,
    noninvasive: true,
  }),
);
const faqSchema = graph(faqPage({ path: twMeta.path, items: twFaqs.items }));

/** Section order follows 02 Content.md. */
export default function TeethWhiteningPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="tw-title"
        label="Teeth whitening"
        content={twHero}
        crumbs={twCrumbs}
        strong={[0, 1, 2]}
        track="tw"
        aside={<TrayNights />}
      />
      <WhiteningTimeline />
      <TrayFit />
      <WhoWhitening />
      <PaceControl />
      <StainCulprits />
      <Cost id="tw-cost-title" cost={twCost} label="Cost & offer" />
      <FaqAccordion id="tw-faq-title" faqs={twFaqs} track="tw" />
      <ClosingCta id="tw-cta-title" content={twCta} track="tw_final" />
    </>
  );
}
