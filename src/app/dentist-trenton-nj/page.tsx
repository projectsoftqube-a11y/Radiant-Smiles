import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { CareRows, PriceBoard, WeekStrip } from "@/components/sections/locations/Trenton";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { trAreas, trCrumbs, trCta, trFaqs, trHere, trHero, trMeta, trPlans, trRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(trMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Trenton); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: trMeta.path, name: trMeta.title, description: trMeta.description }),
  breadcrumbList(trMeta.path, trCrumbs),
  locationDentist(trAreas),
);
const faqSchema = graph(faqPage({ path: trMeta.path, items: trFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function TrentonPage() {
  return (
    <div data-page-area="Trenton, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="tr-title" label="Trenton, NJ" content={trHero} crumbs={trCrumbs} strong={[0, 1]} track="tr" aside={<RouteMap route={trRoute} />} />
      <GettingHere id="tr-here-title" title={trHere.title} blocks={trHere.blocks} area="Trenton" />
      <PriceBoard />
      <Cost id="tr-plans-title" cost={trPlans} />
      <CareRows />
      <WeekStrip />
      <FaqAccordion id="tr-faq-title" faqs={trFaqs} track="tr" />
      <ClosingCta id="tr-cta-title" content={trCta} track="tr_final" />
    </div>
  );
}
