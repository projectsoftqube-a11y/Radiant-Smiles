import { Cost } from "@/components/sections/general/Cost";
import {
  CosmeticDentists,
  CosmeticWhat,
  GoalTable,
  MakeoverPlan,
  ProcedureStairs,
  ResultsSplit,
  SmilePlan,
  TreatmentSpecs,
  ZoomStrip,
} from "@/components/sections/cosmetic/CosmeticHub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { cdCost, cdCta, cdFaqs, cdHero, cdHubCrumbs, cdItemList, cdMeta } from "@/content/pages/cosmetic/hub";
import { breadcrumbList, faqPage, graph, pageItemList, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(cdMeta);

/** Handoff 3a: MedicalWebPage (mainEntity: the ItemList of the 7 child pages) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: cdMeta.path,
    name: cdMeta.title,
    description: cdMeta.description,
    mainEntity: "services",
  }),
  breadcrumbList(cdMeta.path, cdHubCrumbs),
  pageItemList(cdMeta.path, cdItemList, {
    key: "services",
    name: "Cosmetic dentistry services at Radiant Smiles @ Floral Vale",
  }),
);
const faqSchema = graph(faqPage({ path: cdMeta.path, items: cdFaqs.items }));

/** Section order follows 02 Content.md. */
export default function CosmeticDentistryPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="cd-title"
        label="Cosmetic dentistry"
        content={cdHero}
        crumbs={cdHubCrumbs}
        strong={[0, 1]}
        track="cd"
        aside={<SmilePlan />}
      />
      <CosmeticWhat />
      <ProcedureStairs />
      <MakeoverPlan />
      <TreatmentSpecs />
      <GoalTable />
      <ZoomStrip />
      <Cost id="cd-cost-title" cost={cdCost} label="Cost & financing" />
      <ResultsSplit />
      <CosmeticDentists />
      <FaqAccordion id="cd-faq-title" faqs={cdFaqs} track="cd" />
      <ClosingCta id="cd-cta-title" content={cdCta} track="cd_final" />
    </>
  );
}
