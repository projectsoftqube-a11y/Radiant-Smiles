import { Interval, PerioCost, PocketChart, ProtectGums, VisitLoop, WhatPerio, WhoPerio } from "@/components/sections/general/Perio";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { pmCrumbs, pmCta, pmFaqs, pmHero, pmMeta, pmProcedureDescription } from "@/content/pages/general/perio";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pmMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (periodontal maintenance) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: pmMeta.path, name: pmMeta.title, description: pmMeta.description, main: "procedure" }),
  medicalProcedure({
    path: pmMeta.path,
    name: "Periodontal maintenance",
    alternateName: "Perio maintenance",
    description: pmProcedureDescription,
  }),
  breadcrumbList(pmMeta.path, pmCrumbs),
);
const faqSchema = graph(faqPage({ path: pmMeta.path, items: pmFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PeriodontalMaintenancePage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="pm-title"
        label="Periodontal maintenance"
        content={pmHero}
        crumbs={pmCrumbs}
        strong={[0, 1]}
        track="pm"
        aside={<PocketChart />}
      />
      <WhatPerio />
      <WhoPerio />
      <VisitLoop />
      <Interval />
      <PerioCost />
      <ProtectGums />
      <FaqAccordion id="pm-faq-title" faqs={pmFaqs} track="pm" />
      <ClosingCta id="pm-cta-title" content={pmCta} track="pm_final" />
    </>
  );
}
