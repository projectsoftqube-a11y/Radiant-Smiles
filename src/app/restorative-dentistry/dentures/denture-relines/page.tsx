import { Cost } from "@/components/sections/general/Cost";
import { DentureNav } from "@/components/sections/restorative/DentureNav";
import {
  LiningSection,
  RelineSigns,
  Linings,
  Rebase,
  SameDayRepair,
} from "@/components/sections/restorative/Relines";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  rlCost,
  rlCrumbs,
  rlCta,
  rlFaqs,
  rlHero,
  rlMeta,
  rlProcedureDescription,
} from "@/content/pages/restorative/dentures";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(rlMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb (Home › Restorative Dentistry › Dentures › page); 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: rlMeta.path,
    name: rlMeta.title,
    description: rlMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: rlMeta.path,
    name: "Denture relines and repairs",
    description: rlProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(rlMeta.path, rlCrumbs),
);
const faqSchema = graph(faqPage({ path: rlMeta.path, items: rlFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentureRelinesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="rl-title"
        label="Relines & repairs"
        content={rlHero}
        crumbs={rlCrumbs}
        strong={[0, 1]}
        track="rl"
        aside={<LiningSection />}
      />
      <DentureNav current={rlMeta.path} />
      <RelineSigns />
      <Linings />
      <Rebase />
      <SameDayRepair />
      <Cost id="rl-cost-title" cost={rlCost} flush />
      <FaqAccordion id="rl-faq-title" faqs={rlFaqs} track="rl" />
      <ClosingCta id="rl-cta-title" content={rlCta} track="rl_final" />
    </>
  );
}
