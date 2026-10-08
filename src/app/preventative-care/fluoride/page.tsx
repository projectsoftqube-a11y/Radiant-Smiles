import { Cost } from "@/components/sections/general/Cost";
import { AtHome, EnamelLattice, FluorideExpect, HowFluoride, Necessary, Safety, WhoBenefits } from "@/components/sections/general/Fluoride";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { flCost, flCrumbs, flCta, flFaqs, flHero, flMeta, flProcedureDescription } from "@/content/pages/general/fluoride";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(flMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (professional fluoride treatment) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: flMeta.path, name: flMeta.title, description: flMeta.description, main: "procedure" }),
  medicalProcedure({ path: flMeta.path, name: "Professional fluoride treatment", description: flProcedureDescription }),
  breadcrumbList(flMeta.path, flCrumbs),
);
const faqSchema = graph(faqPage({ path: flMeta.path, items: flFaqs.items }));

/** Section order follows 02 Content.md. */
export default function FluoridePage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="fl-title"
        label="Fluoride treatment"
        content={flHero}
        crumbs={flCrumbs}
        strong={[0, 1]}
        track="fl"
        aside={<EnamelLattice />}
      />
      <HowFluoride />
      <WhoBenefits />
      <FluorideExpect />
      <Necessary />
      <Safety />
      <AtHome />
      <Cost id="fl-cost-title" cost={flCost} flush />
      <FaqAccordion id="fl-faq-title" faqs={flFaqs} track="fl" />
      <ClosingCta id="fl-cta-title" content={flCta} track="fl_final" />
    </>
  );
}
