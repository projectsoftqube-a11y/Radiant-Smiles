import { BenefitsYear, CoverageCard, MembershipTable, PaymentAndFinancing, PlanList } from "@/components/sections/patient/Insurance";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { insCrumbs, insCta, insFaqs, insHero, insMeta } from "@/content/pages/patient/insurance";
import { breadcrumbList, faqPage, graph, innerPage, membershipOffer } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(insMeta);

/** Handoff 3a: WebPage + breadcrumb + the membership plan Offer; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: insMeta.path, name: insMeta.title, description: insMeta.description }),
  breadcrumbList(insMeta.path, insCrumbs),
  membershipOffer(insMeta.path),
);
const faqSchema = graph(faqPage({ path: insMeta.path, items: insFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InsurancePage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ins-title"
        label="Insurance & payment"
        content={insHero}
        crumbs={insCrumbs}
        strong={[0, 1, 2]}
        track="ins"
        aside={<CoverageCard />}
      />
      <PlanList />
      <BenefitsYear />
      <MembershipTable />
      <PaymentAndFinancing />
      <FaqAccordion id="ins-faq-title" faqs={insFaqs} track="ins" />
      <ClosingCta id="ins-cta-title" content={insCta} track="ins_final" />
    </>
  );
}
