import { CareNav } from "@/components/sections/patient/CareNav";
import { AftercareCards, ExtractionSteps, JumpList, RecoveryClock, WhenToCall } from "@/components/sections/patient/HomeCare";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCareCrumbs, homeCareCta, homeCareFaqs, homeCareHero, homeCareMeta } from "@/content/pages/patient/care";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(homeCareMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: homeCareMeta.path, name: homeCareMeta.title, description: homeCareMeta.description }),
  breadcrumbList(homeCareMeta.path, homeCareCrumbs),
);
const faqSchema = graph(faqPage({ path: homeCareMeta.path, items: homeCareFaqs.items }));

/** Section order follows 02 Content.md. */
export default function HomeCareInstructionsPage() {
  return (
    <div data-print-handout>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="homecare-title"
        label="Home care"
        content={homeCareHero}
        crumbs={homeCareCrumbs}
        strong={[0, 1]}
        track="homecare"
        aside={<RecoveryClock />}
      >
        <JumpList />
      </PageHero>
      <CareNav current={homeCareMeta.path} />
      <ExtractionSteps />
      <AftercareCards />
      <WhenToCall />
      <FaqAccordion id="homecare-faq-title" faqs={homeCareFaqs} track="homecare" />
      <ClosingCta id="homecare-cta-title" content={homeCareCta} track="homecare_final" />
    </div>
  );
}
