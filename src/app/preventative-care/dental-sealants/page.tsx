import { Cost } from "@/components/sections/general/Cost";
import { HowLong, SealedMolar, SealProcess, Together, WhatSealants, WhoNeeds } from "@/components/sections/general/Sealants";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { dsCost, dsCrumbs, dsCta, dsFaqs, dsHero, dsMeta, dsProcedureDescription } from "@/content/pages/general/sealants";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(dsMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental sealants) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: dsMeta.path, name: dsMeta.title, description: dsMeta.description, main: "procedure" }),
  medicalProcedure({ path: dsMeta.path, name: "Dental sealants", description: dsProcedureDescription }),
  breadcrumbList(dsMeta.path, dsCrumbs),
);
const faqSchema = graph(faqPage({ path: dsMeta.path, items: dsFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentalSealantsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ds-title"
        label="Dental sealants"
        content={dsHero}
        crumbs={dsCrumbs}
        strong={[0, 1]}
        track="ds"
        aside={<SealedMolar />}
      />
      <WhatSealants />
      <WhoNeeds />
      <SealProcess />
      <HowLong />
      <Together />
      <Cost id="ds-cost-title" cost={dsCost} flush />
      <FaqAccordion id="ds-faq-title" faqs={dsFaqs} track="ds" />
      <ClosingCta id="ds-cta-title" content={dsCta} track="ds_final" />
    </>
  );
}
