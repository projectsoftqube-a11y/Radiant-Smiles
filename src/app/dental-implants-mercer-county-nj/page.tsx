import { Cost } from "@/components/sections/general/Cost";
import { GettingHere } from "@/components/sections/locations/Location";
import { ImplantRunway, QuoteCheck, RiverReasons } from "@/components/sections/servicelocation/ImplantsMercer";
import { QuickFacts } from "@/components/sections/servicelocation/QuickFacts";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { diCost, diCrumbs, diCta, diFacts, diFaqs, diHere, diHero, diMeta, diProcedureDescription } from "@/content/pages/servicelocation";
import { breadcrumbList, faqPage, graph, locationDentist, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(diMeta);

/** Handoff 3a: MedicalWebPage + BreadcrumbList + MedicalProcedure (#service) + Dentist reference (Mercer County); 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: diMeta.path, name: diMeta.title, description: diMeta.description, main: "service", mainEntity: "service" }),
  breadcrumbList(diMeta.path, diCrumbs),
  medicalProcedure({ path: diMeta.path, key: "service", name: "Dental implants", description: diProcedureDescription, specialty: true }),
  locationDentist([{ type: "AdministrativeArea", name: "Mercer County, New Jersey", state: "NJ-county" }]),
);
const faqSchema = graph(faqPage({ path: diMeta.path, items: diFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function DentalImplantsMercerPage() {
  return (
    <div data-page-area="Mercer County, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="di-title"
        label="Dental implants · Mercer County"
        content={diHero}
        crumbs={diCrumbs}
        strong={[0, 1]}
        track="di"
        aside={<QuoteCheck />}
        footer={<QuickFacts facts={diFacts} />}
      />
      <RiverReasons />
      <ImplantRunway />
      <Cost id="di-cost-title" cost={diCost} label="Cost & offers" />
      <GettingHere id="di-here-title" title={diHere.title} blocks={diHere.blocks} area="Mercer County" />
      <FaqAccordion id="di-faq-title" faqs={diFaqs} track="di" />
      <ClosingCta id="di-cta-title" content={diCta} track="di_final" />
    </div>
  );
}
