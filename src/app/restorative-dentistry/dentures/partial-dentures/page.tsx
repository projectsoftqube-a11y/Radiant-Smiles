import { Cost } from "@/components/sections/general/Cost";
import { DentureNav } from "@/components/sections/restorative/DentureNav";
import {
  PartialFit,
  WhoPartial,
  PartialDoes,
  PartialTypes,
  EvenForces,
  PartialCare,
} from "@/components/sections/restorative/Partial";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  paCost,
  paCrumbs,
  paCta,
  paFaqs,
  paHero,
  paMeta,
  paProcedureDescription,
} from "@/content/pages/restorative/dentures";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(paMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb (Home › Restorative Dentistry › Dentures › page); 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: paMeta.path,
    name: paMeta.title,
    description: paMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: paMeta.path,
    name: "Partial dentures",
    description: paProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(paMeta.path, paCrumbs),
);
const faqSchema = graph(faqPage({ path: paMeta.path, items: paFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PartialDenturesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="pa-title"
        label="Partial dentures"
        content={paHero}
        crumbs={paCrumbs}
        strong={[0, 1]}
        track="pa"
        aside={<PartialFit />}
      />
      <DentureNav current={paMeta.path} />
      <WhoPartial />
      <PartialDoes />
      <PartialTypes />
      <EvenForces />
      <PartialCare />
      <Cost id="pa-cost-title" cost={paCost} flush />
      <FaqAccordion id="pa-faq-title" faqs={paFaqs} track="pa" />
      <ClosingCta id="pa-cta-title" content={paCta} track="pa_final" />
    </>
  );
}
