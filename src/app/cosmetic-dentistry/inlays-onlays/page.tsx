import { Cost } from "@/components/sections/general/Cost";
import { CaseCards, CoverageRow, MaterialSamples, OnlayDrop, TwoVisits, YearsRange } from "@/components/sections/cosmetic/Inlays";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ioCost, ioCrumbs, ioCta, ioFaqs, ioHero, ioMeta, ioProcedureDescription } from "@/content/pages/cosmetic/smile";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ioMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental inlays and onlays) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: ioMeta.path, name: ioMeta.title, description: ioMeta.description, main: "procedure" }),
  breadcrumbList(ioMeta.path, ioCrumbs),
  medicalProcedure({ path: ioMeta.path, name: "Dental inlays and onlays", description: ioProcedureDescription }),
);
const faqSchema = graph(faqPage({ path: ioMeta.path, items: ioFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InlaysOnlaysPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="io-title"
        label="Inlays & onlays"
        content={ioHero}
        crumbs={ioCrumbs}
        strong={[0, 1, 2]}
        track="io"
        aside={<OnlayDrop />}
      />
      <CoverageRow />
      <CaseCards />
      <MaterialSamples />
      <TwoVisits />
      <YearsRange />
      <Cost id="io-cost-title" cost={ioCost} />
      <FaqAccordion id="io-faq-title" faqs={ioFaqs} track="io" />
      <ClosingCta id="io-cta-title" content={ioCta} track="io_final" />
    </>
  );
}
