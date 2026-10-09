import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { HouseholdCard, RepairBench, SameDayCard } from "@/components/sections/locations/Morrisville";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { moAreas, moCost, moCrumbs, moCta, moFaqs, moHere, moHero, moMeta, moRoute } from "@/content/pages/locations/pa";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(moMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (areaServed: Morrisville); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: moMeta.path, name: moMeta.title, description: moMeta.description }),
  breadcrumbList(moMeta.path, moCrumbs),
  locationDentist(moAreas),
);
const faqSchema = graph(faqPage({ path: moMeta.path, items: moFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function MorrisvillePage() {
  return (
    <div data-page-area="Morrisville, PA">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="mo-title" label="Morrisville, PA" content={moHero} crumbs={moCrumbs} strong={[0, 1]} track="mo" aside={<RouteMap route={moRoute} />} />
      <GettingHere id="mo-here-title" title={moHere.title} blocks={moHere.blocks} area="Morrisville" />
      <SameDayCard />
      <RepairBench />
      <HouseholdCard />
      <Cost id="mo-cost-title" cost={moCost} />
      <FaqAccordion id="mo-faq-title" faqs={moFaqs} track="mo" />
      <ClosingCta id="mo-cta-title" content={moCta} track="mo_final" />
    </div>
  );
}
