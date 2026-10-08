import { Cost } from "@/components/sections/general/Cost";
import { Benefits, Candidate, LaserBeam, LaserSteps, Recovery } from "@/components/sections/general/Laser";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { lzCost, lzCrumbs, lzCta, lzFaqs, lzHero, lzMeta, lzProcedureDescription } from "@/content/pages/general/laser";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(lzMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (laser gum treatment) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: lzMeta.path, name: lzMeta.title, description: lzMeta.description, main: "procedure" }),
  medicalProcedure({
    path: lzMeta.path,
    name: "Laser gum treatment",
    alternateName: "Gum disease laser therapy",
    description: lzProcedureDescription,
  }),
  breadcrumbList(lzMeta.path, lzCrumbs),
);
const faqSchema = graph(faqPage({ path: lzMeta.path, items: lzFaqs.items }));

/** Section order follows 02 Content.md. */
export default function LaserGumTherapyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="lz-title"
        label="Laser gum treatment"
        content={lzHero}
        crumbs={lzCrumbs}
        strong={[0, 1, 2]}
        track="lz"
        aside={<LaserBeam />}
      />
      <LaserSteps />
      <Benefits />
      <Candidate />
      <Recovery />
      <Cost id="lz-cost-title" cost={lzCost} />
      <FaqAccordion id="lz-faq-title" faqs={lzFaqs} track="lz" />
      <ClosingCta id="lz-cta-title" content={lzCta} track="lz_final" />
    </>
  );
}
