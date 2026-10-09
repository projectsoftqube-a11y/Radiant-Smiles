import {
  AlignerDay,
  AlignerDeck,
  AlignersVsBraces,
  OfferBand,
  PlanStages,
  WearRhythm,
  WhoInvisalign,
  YearTrack,
} from "@/components/sections/cosmetic/Invisalign";
import { InvisalignNav } from "@/components/sections/cosmetic/InvisalignNav";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { inCrumbs, inCta, inFaqs, inHero, inMeta, inProcedureDescription } from "@/content/pages/cosmetic/invisalign";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(inMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (clear aligners, noninvasive) + breadcrumb; 3b: FAQPage. No Offer nodes until terms are confirmed. */
const schema = graph(
  treatmentPage({ path: inMeta.path, name: inMeta.title, description: inMeta.description, main: "procedure" }),
  breadcrumbList(inMeta.path, inCrumbs),
  medicalProcedure({ path: inMeta.path, name: "Invisalign clear aligner treatment", description: inProcedureDescription, noninvasive: true }),
);
const faqSchema = graph(faqPage({ path: inMeta.path, items: inFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InvisalignPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="in-title"
        label="Invisalign"
        content={inHero}
        crumbs={inCrumbs}
        strong={[0, 1, 2]}
        track="in"
        aside={<AlignerDeck />}
      />
      <InvisalignNav current={inMeta.path} />
      <WearRhythm />
      <WhoInvisalign />
      <PlanStages />
      <AlignersVsBraces />
      <YearTrack />
      <OfferBand />
      <AlignerDay />
      <FaqAccordion id="in-faq-title" faqs={inFaqs} track="in" />
      <ClosingCta id="in-cta-title" content={inCta} track="in_final" />
    </>
  );
}
