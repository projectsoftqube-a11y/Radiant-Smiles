import { Cost } from "@/components/sections/general/Cost";
import { GettingHere } from "@/components/sections/locations/Location";
import { ReasonsPanel, StraighteningSteps, TrentonPass } from "@/components/sections/servicelocation/InvisalignTrenton";
import { QuickFacts } from "@/components/sections/servicelocation/QuickFacts";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { itnCost, itnCrumbs, itnCta, itnFacts, itnFaqs, itnHere, itnHero, itnMeta, itnProcedureDescription } from "@/content/pages/servicelocation";
import { breadcrumbList, faqPage, graph, locationDentist, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(itnMeta);

/** Handoff 3a: MedicalWebPage + BreadcrumbList + MedicalProcedure (#service, clear aligners) + Dentist reference (Trenton); 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: itnMeta.path, name: itnMeta.title, description: itnMeta.description, main: "service", mainEntity: "service" }),
  breadcrumbList(itnMeta.path, itnCrumbs),
  medicalProcedure({ path: itnMeta.path, key: "service", name: "Invisalign clear aligner treatment", description: itnProcedureDescription, specialty: true }),
  locationDentist([{ type: "City", name: "Trenton, NJ", state: "NJ" }]),
);
const faqSchema = graph(faqPage({ path: itnMeta.path, items: itnFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function InvisalignTrentonPage() {
  return (
    <div data-page-area="Trenton, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="itn-title"
        label="Invisalign · Trenton"
        content={itnHero}
        crumbs={itnCrumbs}
        strong={[0]}
        track="itn"
        aside={<TrentonPass />}
        footer={<QuickFacts facts={itnFacts} />}
      />
      <ReasonsPanel />
      <StraighteningSteps />
      <Cost id="itn-cost-title" cost={itnCost} label="Cost & offers" />
      <GettingHere id="itn-here-title" title={itnHere.title} blocks={itnHere.blocks} area="Trenton" />
      <FaqAccordion id="itn-faq-title" faqs={itnFaqs} track="itn" />
      <ClosingCta id="itn-cta-title" content={itnCta} track="itn_final" />
    </div>
  );
}
