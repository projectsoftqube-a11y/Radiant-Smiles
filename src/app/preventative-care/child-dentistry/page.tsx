import { BabyTeeth, FirstVisit, FridgeChart, KidsCheckups, KidsFamily, KidsProtect, Storybook } from "@/components/sections/general/Child";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { cdCrumbs, cdCta, cdFaqs, cdHero, cdHeroPoints, cdMeta, cdServiceDescription } from "@/content/pages/general/child";
import { breadcrumbList, faqPage, graph, practiceService, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(cdMeta);

/** Handoff 3a: MedicalWebPage + Service (children's dentistry) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: cdMeta.path, name: cdMeta.title, description: cdMeta.description, main: "service" }),
  practiceService({
    path: cdMeta.path,
    name: "Children's dentistry",
    serviceType: "Children's dentistry",
    description: cdServiceDescription,
  }),
  breadcrumbList(cdMeta.path, cdCrumbs),
);
const faqSchema = graph(faqPage({ path: cdMeta.path, items: cdFaqs.items }));

/** Section order follows 02 Content.md. */
export default function ChildDentistryPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="cd-title"
        label="Children's dentistry"
        content={cdHero}
        crumbs={cdCrumbs}
        strong={[0, 1]}
        track="cd"
        points={cdHeroPoints}
        aside={<BabyTeeth />}
      />
      <FirstVisit />
      <KidsCheckups />
      <KidsProtect />
      <FridgeChart />
      <Storybook />
      <KidsFamily />
      <FaqAccordion id="cd-faq-title" faqs={cdFaqs} track="cd" />
      <ClosingCta id="cd-cta-title" content={cdCta} track="cd_final" />
    </>
  );
}
