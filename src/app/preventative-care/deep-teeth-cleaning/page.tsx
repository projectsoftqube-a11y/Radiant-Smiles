import { Cost } from "@/components/sections/general/Cost";
import { AfterRoad, Comfort, DeepNecessary, Descend, ProbeGauge, Signs, Versus } from "@/components/sections/general/DeepCleaning";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { dcCost, dcCrumbs, dcCta, dcFaqs, dcHero, dcMeta, dcProcedureDescription } from "@/content/pages/general/deep-cleaning";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(dcMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (deep cleaning / scaling and root planing) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: dcMeta.path, name: dcMeta.title, description: dcMeta.description, main: "procedure" }),
  medicalProcedure({
    path: dcMeta.path,
    name: "Deep cleaning",
    alternateName: "Scaling and root planing",
    description: dcProcedureDescription,
  }),
  breadcrumbList(dcMeta.path, dcCrumbs),
);
const faqSchema = graph(faqPage({ path: dcMeta.path, items: dcFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DeepTeethCleaningPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="dc-title"
        label="Deep teeth cleaning"
        content={dcHero}
        crumbs={dcCrumbs}
        strong={[0, 1]}
        track="dc"
        aside={<ProbeGauge />}
      />
      <Versus />
      <Signs />
      <Descend />
      <Comfort />
      <DeepNecessary />
      <Cost id="dc-cost-title" cost={dcCost} />
      <AfterRoad />
      <FaqAccordion id="dc-faq-title" faqs={dcFaqs} track="dc" />
      <ClosingCta id="dc-cta-title" content={dcCta} track="dc_final" />
    </>
  );
}
