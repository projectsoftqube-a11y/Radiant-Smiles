import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { FamilyBand, RestorativeQuartet, VillageStops } from "@/components/sections/locations/WashingtonCrossing";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { wcAreas, wcCost, wcCrumbs, wcCta, wcFaqs, wcHere, wcHero, wcMeta, wcRoute } from "@/content/pages/locations/pa";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(wcMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Washington Crossing, Upper Makefield); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: wcMeta.path, name: wcMeta.title, description: wcMeta.description }),
  breadcrumbList(wcMeta.path, wcCrumbs),
  locationDentist(wcAreas),
);
const faqSchema = graph(faqPage({ path: wcMeta.path, items: wcFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function WashingtonCrossingPage() {
  return (
    <div data-page-area="Washington Crossing, PA">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="wc-title" label="Washington Crossing, PA" content={wcHero} crumbs={wcCrumbs} strong={[0, 1]} track="wc" aside={<RouteMap route={wcRoute} />} />
      <GettingHere id="wc-here-title" title={wcHere.title} blocks={wcHere.blocks} area="Washington Crossing" />
      <VillageStops />
      <RestorativeQuartet />
      <FamilyBand />
      <Cost id="wc-cost-title" cost={wcCost} />
      <FaqAccordion id="wc-faq-title" faqs={wcFaqs} track="wc" />
      <ClosingCta id="wc-cta-title" content={wcCta} track="wc_final" />
    </div>
  );
}
