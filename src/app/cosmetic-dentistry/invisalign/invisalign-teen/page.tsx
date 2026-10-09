import { Cost } from "@/components/sections/general/Cost";
import { InvisalignNav } from "@/components/sections/cosmetic/InvisalignNav";
import { ComplianceScale, IndicatorAligner, OnePlace, ScheduleLanes, TeenStickers } from "@/components/sections/cosmetic/InvisalignTeen";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { itCost, itCrumbs, itCta, itFaqs, itHero, itMeta, itProcedureDescription } from "@/content/pages/cosmetic/invisalign";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(itMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (Invisalign Teen, noninvasive) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: itMeta.path, name: itMeta.title, description: itMeta.description, main: "procedure" }),
  breadcrumbList(itMeta.path, itCrumbs),
  medicalProcedure({ path: itMeta.path, name: "Invisalign Teen clear aligner treatment", description: itProcedureDescription, noninvasive: true }),
);
const faqSchema = graph(faqPage({ path: itMeta.path, items: itFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InvisalignTeenPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="it-title"
        label="Invisalign Teen"
        content={itHero}
        crumbs={itCrumbs}
        strong={[0, 1]}
        track="it"
        aside={<IndicatorAligner />}
      />
      <InvisalignNav current={itMeta.path} />
      <TeenStickers />
      <ComplianceScale />
      <ScheduleLanes />
      <OnePlace />
      <Cost id="it-cost-title" cost={itCost} label="Cost & payment" />
      <FaqAccordion id="it-faq-title" faqs={itFaqs} track="it" />
      <ClosingCta id="it-cta-title" content={itCta} track="it_final" />
    </>
  );
}
