import { Cost } from "@/components/sections/general/Cost";
import { DentureShelf, Postcards, SaturdayPage } from "@/components/sections/locations/Hamilton";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { haAreas, haCost, haCrumbs, haCta, haFaqs, haHere, haHero, haMeta, haRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(haMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Hamilton Township and its communities); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: haMeta.path, name: haMeta.title, description: haMeta.description }),
  breadcrumbList(haMeta.path, haCrumbs),
  locationDentist(haAreas),
);
const faqSchema = graph(faqPage({ path: haMeta.path, items: haFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function HamiltonPage() {
  return (
    <div data-page-area="Hamilton, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="ha-title" label="Hamilton, NJ" content={haHero} crumbs={haCrumbs} strong={[0, 1]} track="ha" aside={<RouteMap route={haRoute} />} />
      <GettingHere id="ha-here-title" title={haHere.title} blocks={haHere.blocks} area="Hamilton" />
      <Postcards />
      <SaturdayPage />
      <DentureShelf />
      <Cost id="ha-cost-title" cost={haCost} />
      <FaqAccordion id="ha-faq-title" faqs={haFaqs} track="ha" />
      <ClosingCta id="ha-cta-title" content={haCta} track="ha_final" />
    </div>
  );
}
