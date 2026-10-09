import { Cost } from "@/components/sections/general/Cost";
import {
  AnnualExam,
  DentureJourney,
  DentureSet,
  DentureTypes,
  NightstandCare,
  RelineTrio,
} from "@/components/sections/restorative/DenturesHub";
import { DentureNav } from "@/components/sections/restorative/DentureNav";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  deCost,
  deCrumbs,
  deCta,
  deFaqs,
  deHero,
  deMeta,
  deProcedureDescription,
} from "@/content/pages/restorative/dentures";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(deMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dentures) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: deMeta.path,
    name: deMeta.title,
    description: deMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: deMeta.path,
    name: "Dentures",
    description: deProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(deMeta.path, deCrumbs),
);
const faqSchema = graph(faqPage({ path: deMeta.path, items: deFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DenturesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="de-title"
        label="Dentures"
        content={deHero}
        crumbs={deCrumbs}
        strong={[0]}
        track="de"
        aside={<DentureSet />}
      />
      <DentureNav current={deMeta.path} />
      <DentureTypes />
      <DentureJourney />
      <NightstandCare />
      <AnnualExam />
      <RelineTrio />
      <Cost id="de-cost-title" cost={deCost} />
      <FaqAccordion id="de-faq-title" faqs={deFaqs} track="de" />
      <ClosingCta id="de-cta-title" content={deCta} track="de_final" />
    </>
  );
}
