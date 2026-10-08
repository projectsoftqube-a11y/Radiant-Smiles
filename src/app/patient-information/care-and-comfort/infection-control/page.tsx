import { CareNav } from "@/components/sections/patient/CareNav";
import { Agencies, CycleCard, SafetySteps } from "@/components/sections/patient/Infection";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { infCrumbs, infCta, infFaqs, infHero, infMeta } from "@/content/pages/patient/care";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(infMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: infMeta.path, name: infMeta.title, description: infMeta.description }),
  breadcrumbList(infMeta.path, infCrumbs),
);
const faqSchema = graph(faqPage({ path: infMeta.path, items: infFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InfectionControlPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="inf-title"
        label="Infection control"
        content={infHero}
        crumbs={infCrumbs}
        strong={[0, 1, 2]}
        track="inf"
        aside={<CycleCard />}
      />
      <CareNav current={infMeta.path} />
      <Agencies />
      <SafetySteps />
      <FaqAccordion id="inf-faq-title" faqs={infFaqs} track="inf" />
      <ClosingCta id="inf-cta-title" content={infCta} track="inf_final" />
    </>
  );
}
