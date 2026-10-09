import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { BetweenFork, CosmeticRoad, OneTrip } from "@/components/sections/locations/NewHope";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { nhAreas, nhCost, nhCrumbs, nhCta, nhFaqs, nhHere, nhHero, nhMeta, nhRoute } from "@/content/pages/locations/pa";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(nhMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (New Hope); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: nhMeta.path, name: nhMeta.title, description: nhMeta.description }),
  breadcrumbList(nhMeta.path, nhCrumbs),
  locationDentist(nhAreas),
);
const faqSchema = graph(faqPage({ path: nhMeta.path, items: nhFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function NewHopePage() {
  return (
    <div data-page-area="New Hope, PA">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="nh-title" label="New Hope, PA" content={nhHero} crumbs={nhCrumbs} strong={[0, 1]} track="nh" aside={<RouteMap route={nhRoute} />} />
      <GettingHere id="nh-here-title" title={nhHere.title} blocks={nhHere.blocks} area="New Hope" />
      <CosmeticRoad />
      <OneTrip />
      <BetweenFork />
      <Cost id="nh-cost-title" cost={nhCost} />
      <FaqAccordion id="nh-faq-title" faqs={nhFaqs} track="nh" />
      <ClosingCta id="nh-cta-title" content={nhCta} track="nh_final" />
    </div>
  );
}
