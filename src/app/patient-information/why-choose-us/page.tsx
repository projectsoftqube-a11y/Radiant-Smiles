import { ComfortBand, PatientQuotes, Precision, Prices, ReasonArches, UnderOneRoof, WeekStrip } from "@/components/sections/patient/Why";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { whyCrumbs, whyCta, whyFaqs, whyHero, whyMeta } from "@/content/pages/patient/why";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(whyMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. No Review markup. */
const schema = graph(
  innerPage({ type: "WebPage", path: whyMeta.path, name: whyMeta.title, description: whyMeta.description }),
  breadcrumbList(whyMeta.path, whyCrumbs),
);
const faqSchema = graph(faqPage({ path: whyMeta.path, items: whyFaqs.items }));

/** Section order follows 02 Content.md. */
export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="why-title"
        label="Why choose us"
        content={whyHero}
        crumbs={whyCrumbs}
        strong={[4, 5]}
        track="why"
        aside={<ReasonArches />}
      />
      <UnderOneRoof />
      <Precision />
      <ComfortBand />
      <Prices />
      <WeekStrip />
      <PatientQuotes />
      <FaqAccordion id="why-faq-title" faqs={whyFaqs} track="why" />
      <ClosingCta id="why-cta-title" content={whyCta} track="why_final" />
    </>
  );
}
