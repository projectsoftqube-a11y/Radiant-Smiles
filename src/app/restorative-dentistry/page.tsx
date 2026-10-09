import { Cost } from "@/components/sections/general/Cost";
import {
  DentistDuo,
  DentureCare,
  ExtractPair,
  GumPath,
  Magnification,
  RepairScale,
  ReplaceOptions,
  SaveBand,
  ToothStates,
  Which,
} from "@/components/sections/restorative/RestorativeHub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  rdCost,
  rdCta,
  rdFaqs,
  rdHero,
  rdHubCrumbs,
  rdItemList,
  rdMeta,
} from "@/content/pages/restorative/hub";
import {
  breadcrumbList,
  faqPage,
  graph,
  pageItemList,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(rdMeta);

/** Handoff 3a: MedicalWebPage (lastReviewed, specialty) with the ItemList of the 13 child pages + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: rdMeta.path,
    name: rdMeta.title,
    description: rdMeta.description,
    mainEntity: "services",
    specialty: true,
  }),
  breadcrumbList(rdMeta.path, rdHubCrumbs),
  {
    ...pageItemList(rdMeta.path, rdItemList, {
      key: "services",
      name: "Restorative dentistry services at Radiant Smiles @ Floral Vale",
    }),
    numberOfItems: rdItemList.length,
  },
);
const faqSchema = graph(faqPage({ path: rdMeta.path, items: rdFaqs.items }));

/** Section order follows 02 Content.md. */
export default function RestorativeDentistryPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="rd-title"
        label="Restorative dentistry"
        content={rdHero}
        crumbs={rdHubCrumbs}
        strong={[0, 1]}
        track="rd"
        aside={<ToothStates />}
      />
      <RepairScale />
      <SaveBand />
      <ReplaceOptions />
      <DentureCare />
      <ExtractPair />
      <GumPath />
      <Which />
      <Magnification />
      <DentistDuo />
      <Cost id="rd-cost-title" cost={rdCost} />
      <FaqAccordion id="rd-faq-title" faqs={rdFaqs} track="rd" />
      <ClosingCta id="rd-cta-title" content={rdCta} track="rd_final" />
    </>
  );
}
