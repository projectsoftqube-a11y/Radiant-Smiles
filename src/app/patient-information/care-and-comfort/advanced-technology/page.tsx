import { CareNav } from "@/components/sections/patient/CareNav";
import { ScanCard, TechChapters, TechJumpList } from "@/components/sections/patient/Tech";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { techCrumbs, techCta, techFaqs, techHero, techMeta } from "@/content/pages/patient/care";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(techMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: techMeta.path, name: techMeta.title, description: techMeta.description }),
  breadcrumbList(techMeta.path, techCrumbs),
);
const faqSchema = graph(faqPage({ path: techMeta.path, items: techFaqs.items }));

/** Section order follows 02 Content.md. */
export default function AdvancedTechnologyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="tech-title"
        label="Advanced technology"
        content={techHero}
        crumbs={techCrumbs}
        strong={[4, 5, 6]}
        track="tech"
        aside={<ScanCard />}
      >
        <TechJumpList />
      </PageHero>
      <CareNav current={techMeta.path} />
      <TechChapters />
      <FaqAccordion id="tech-faq-title" faqs={techFaqs} track="tech" />
      <ClosingCta id="tech-cta-title" content={techCta} track="tech_final" />
    </>
  );
}
