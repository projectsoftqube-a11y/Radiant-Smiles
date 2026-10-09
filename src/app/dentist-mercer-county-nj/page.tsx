import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { CallFirst, CountyTowns, FamilyChecklist, OfferCoupons } from "@/components/sections/locations/Mercer";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { meAreas, meCost, meCrumbs, meCta, meFaqs, meHere, meHero, meMeta, meRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(meMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Mercer County, NJ); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: meMeta.path, name: meMeta.title, description: meMeta.description }),
  breadcrumbList(meMeta.path, meCrumbs),
  locationDentist(meAreas),
);
const faqSchema = graph(faqPage({ path: meMeta.path, items: meFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function MercerCountyPage() {
  return (
    <div data-page-area="Mercer County, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="me-title" label="Mercer County, NJ" content={meHero} crumbs={meCrumbs} strong={[0, 1, 2]} track="me" aside={<RouteMap route={meRoute} />} />
      <GettingHere id="me-here-title" title={meHere.title} blocks={meHere.blocks} area="Mercer County" />
      <CountyTowns />
      <FamilyChecklist />
      <CallFirst />
      <OfferCoupons />
      <Cost id="me-cost-title" cost={meCost} />
      <FaqAccordion id="me-faq-title" faqs={meFaqs} track="me" />
      <ClosingCta id="me-cta-title" content={meCta} track="me_final" />
    </div>
  );
}
