import { Cost } from "@/components/sections/general/Cost";
import {
  ConservativeLadder,
  GumSigns,
  Causes,
  Diagnose,
  TreatmentPath,
  MaintenanceLoop,
} from "@/components/sections/restorative/PerioServices";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  psCost,
  psCrumbs,
  psCta,
  psFaqs,
  psHero,
  psMeta,
  psProcedureDescription,
} from "@/content/pages/restorative/extract";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(psMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: psMeta.path,
    name: psMeta.title,
    description: psMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: psMeta.path,
    name: "Gum disease treatment",
    description: psProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(psMeta.path, psCrumbs),
);
const faqSchema = graph(faqPage({ path: psMeta.path, items: psFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PeriodontalServicesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ps-title"
        label="Gum disease treatment"
        content={psHero}
        crumbs={psCrumbs}
        strong={[0, 1, 2]}
        track="ps"
        aside={<ConservativeLadder />}
      />
      <GumSigns />
      <Causes />
      <Diagnose />
      <TreatmentPath />
      <MaintenanceLoop />
      <Cost id="ps-cost-title" cost={psCost} />
      <FaqAccordion id="ps-faq-title" faqs={psFaqs} track="ps" />
      <ClosingCta id="ps-cta-title" content={psCta} track="ps_final" />
    </>
  );
}
