import { Checkups, Glance, GumHealth, HubCost, Kids, LayeredTooth, NotSure, Protect } from "@/components/sections/general/PreventiveHub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { pcCta, pcFaqs, pcHero, pcHeroPoints, pcHubCrumbs, pcItemList, pcMeta } from "@/content/pages/general/hub";
import { breadcrumbList, faqPage, graph, ids, innerPage, pageItemList } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pcMeta);

/** Handoff 3a: MedicalWebPage with the ItemList of the nine service pages + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({
    type: "MedicalWebPage",
    path: pcMeta.path,
    name: pcMeta.title,
    description: pcMeta.description,
    provider: { "@id": ids.dentist },
    mainEntity: { "@id": `${absoluteUrl(pcMeta.path)}#services` },
  }),
  breadcrumbList(pcMeta.path, pcHubCrumbs),
  pageItemList(pcMeta.path, pcItemList, { key: "services", name: "Preventive dental services at Radiant Smiles @ Floral Vale" }),
);
const faqSchema = graph(faqPage({ path: pcMeta.path, items: pcFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PreventiveCarePage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="pc-title"
        label="Preventive care"
        content={pcHero}
        crumbs={pcHubCrumbs}
        strong={[0, 1]}
        track="pc"
        points={pcHeroPoints}
        aside={<LayeredTooth />}
      />
      <Glance />
      <Checkups />
      <Kids />
      <GumHealth />
      <Protect />
      <NotSure />
      <HubCost />
      <FaqAccordion id="pc-faq-title" faqs={pcFaqs} track="pc" />
      <ClosingCta id="pc-cta-title" content={pcCta} track="pc_final" />
    </>
  );
}
