import { AreasScan, HigherRisk, ScreeningOften, WarningSigns, WhatWeCheck, WhyScreening } from "@/components/sections/general/OralCancer";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ocCrumbs, ocCta, ocFaqs, ocHero, ocMeta, ocProcedureDescription } from "@/content/pages/general/oral-cancer";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ocMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (oral cancer screening) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: ocMeta.path, name: ocMeta.title, description: ocMeta.description, main: "procedure" }),
  medicalProcedure({ path: ocMeta.path, name: "Oral cancer screening", description: ocProcedureDescription }),
  breadcrumbList(ocMeta.path, ocCrumbs),
);
const faqSchema = graph(faqPage({ path: ocMeta.path, items: ocFaqs.items }));

/** Section order follows 02 Content.md. */
export default function OralCancerScreeningPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="oc-title"
        label="Oral cancer screening"
        content={ocHero}
        crumbs={ocCrumbs}
        strong={[0, 1, 2]}
        track="oc"
        aside={<AreasScan />}
      />
      <WhyScreening />
      <WhatWeCheck />
      <WarningSigns />
      <HigherRisk />
      <ScreeningOften />
      <FaqAccordion id="oc-faq-title" faqs={ocFaqs} track="oc" />
      <ClosingCta id="oc-cta-title" content={ocCta} track="oc_final" />
    </>
  );
}
