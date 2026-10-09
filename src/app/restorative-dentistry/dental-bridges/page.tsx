import { Cost } from "@/components/sections/general/Cost";
import {
  BridgeCandidate,
  BridgeCare,
  BridgeSpan,
  BridgeSteps,
  BridgeVsImplant,
  HowBridge,
} from "@/components/sections/restorative/Bridges";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  brCost,
  brCrumbs,
  brCta,
  brFaqs,
  brHero,
  brMeta,
  brProcedureDescription,
} from "@/content/pages/restorative/replace";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(brMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental bridges) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: brMeta.path,
    name: brMeta.title,
    description: brMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: brMeta.path,
    name: "Dental bridges",
    description: brProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(brMeta.path, brCrumbs),
);
const faqSchema = graph(faqPage({ path: brMeta.path, items: brFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentalBridgesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="br-title"
        label="Dental bridges"
        content={brHero}
        crumbs={brCrumbs}
        strong={[0, 1]}
        track="br"
        aside={<BridgeSpan />}
      />
      <HowBridge />
      <BridgeCandidate />
      <BridgeVsImplant />
      <BridgeSteps />
      <BridgeCare />
      <Cost id="br-cost-title" cost={brCost} />
      <FaqAccordion id="br-faq-title" faqs={brFaqs} track="br" />
      <ClosingCta id="br-cta-title" content={brCta} track="br_final" />
    </>
  );
}
