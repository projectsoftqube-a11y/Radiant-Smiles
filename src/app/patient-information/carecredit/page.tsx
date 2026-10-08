import { ApplySteps, FinanceTiles, HowItWorks, OtherWays, PlanCard } from "@/components/sections/patient/CareCredit";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ccCrumbs, ccCta, ccFaqs, ccHero, ccMeta } from "@/content/pages/patient/carecredit";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ccMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: ccMeta.path, name: ccMeta.title, description: ccMeta.description }),
  breadcrumbList(ccMeta.path, ccCrumbs),
);
const faqSchema = graph(faqPage({ path: ccMeta.path, items: ccFaqs.items }));

/** Section order follows 02 Content.md. */
export default function CareCreditPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="cc-title"
        label="CareCredit financing"
        content={ccHero}
        crumbs={ccCrumbs}
        strong={[0, 1]}
        track="cc"
        aside={<PlanCard />}
      />
      <HowItWorks />
      <FinanceTiles />
      <ApplySteps />
      <OtherWays />
      <FaqAccordion id="cc-faq-title" faqs={ccFaqs} track="cc" />
      <ClosingCta id="cc-cta-title" content={ccCta} track="cc_final" />
    </>
  );
}
