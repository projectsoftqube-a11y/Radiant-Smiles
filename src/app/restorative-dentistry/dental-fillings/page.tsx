import { Cost } from "@/components/sections/general/Cost";
import {
  Composite,
  Coverage,
  FillingAfter,
  FillingSigns,
  LayerFill,
  LayerSteps,
} from "@/components/sections/restorative/Fillings";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  fiCost,
  fiCrumbs,
  fiCta,
  fiFaqs,
  fiHero,
  fiMeta,
  fiProcedureDescription,
} from "@/content/pages/restorative/repair";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(fiMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (tooth-colored fillings) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: fiMeta.path,
    name: fiMeta.title,
    description: fiMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: fiMeta.path,
    name: "Tooth-colored dental fillings",
    description: fiProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(fiMeta.path, fiCrumbs),
);
const faqSchema = graph(faqPage({ path: fiMeta.path, items: fiFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentalFillingsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="fi-title"
        label="Dental fillings"
        content={fiHero}
        crumbs={fiCrumbs}
        strong={[0, 1, 2]}
        track="fi"
        aside={<LayerFill />}
      />
      <FillingSigns />
      <Composite />
      <LayerSteps />
      <Coverage />
      <FillingAfter />
      <Cost id="fi-cost-title" cost={fiCost} />
      <FaqAccordion id="fi-faq-title" faqs={fiFaqs} track="fi" />
      <ClosingCta id="fi-cta-title" content={fiCta} track="fi_final" />
    </>
  );
}
