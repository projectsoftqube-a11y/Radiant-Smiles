import { Cost } from "@/components/sections/general/Cost";
import {
  PlanAhead,
  WhenRemove,
  Chairside,
  RecoveryClock,
  ReplaceShelf,
  WisdomLink,
} from "@/components/sections/restorative/Extractions";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  exCost,
  exCrumbs,
  exCta,
  exFaqs,
  exHero,
  exMeta,
  exProcedureDescription,
} from "@/content/pages/restorative/extract";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(exMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: exMeta.path,
    name: exMeta.title,
    description: exMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: exMeta.path,
    name: "Tooth extraction",
    description: exProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(exMeta.path, exCrumbs),
);
const faqSchema = graph(faqPage({ path: exMeta.path, items: exFaqs.items }));

/** Section order follows 02 Content.md. */
export default function ToothExtractionsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ex-title"
        label="Tooth extractions"
        content={exHero}
        crumbs={exCrumbs}
        strong={[0, 1, 2]}
        track="ex"
        aside={<PlanAhead />}
      />
      <WhenRemove />
      <Chairside />
      <RecoveryClock />
      <ReplaceShelf />
      <WisdomLink />
      <Cost id="ex-cost-title" cost={exCost} />
      <FaqAccordion id="ex-faq-title" faqs={exFaqs} track="ex" />
      <ClosingCta id="ex-cta-title" content={exCta} track="ex_final" />
    </>
  );
}
