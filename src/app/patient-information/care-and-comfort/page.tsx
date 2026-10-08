import { CalmSplit, ComfortTiles, GentleTech, InfectionTeaser, NowPlaying } from "@/components/sections/patient/Care";
import { CareNav } from "@/components/sections/patient/CareNav";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { careCrumbs, careCta, careFaqs, careHero, careMeta } from "@/content/pages/patient/care";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(careMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: careMeta.path, name: careMeta.title, description: careMeta.description }),
  breadcrumbList(careMeta.path, careCrumbs),
);
const faqSchema = graph(faqPage({ path: careMeta.path, items: careFaqs.items }));

/** Parent of Advanced Technology, Infection Control and Home Care. Order follows 02 Content.md. */
export default function CareAndComfortPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="care-title"
        label="Care & comfort"
        content={careHero}
        crumbs={careCrumbs}
        strong={[1, 2]}
        track="care"
        aside={<NowPlaying />}
      />
      <CareNav current={careMeta.path} />
      <ComfortTiles />
      <CalmSplit />
      <GentleTech />
      <InfectionTeaser />
      <FaqAccordion id="care-faq-title" faqs={careFaqs} track="care" />
      <ClosingCta id="care-cta-title" content={careCta} track="care_final" />
    </>
  );
}
