import { Cost } from "@/components/sections/general/Cost";
import { AfterWork, GumPath, TownshipTags } from "@/components/sections/locations/Ewing";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ewAreas, ewCost, ewCrumbs, ewCta, ewFaqs, ewHere, ewHero, ewMeta, ewRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ewMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Ewing Township, West Trenton); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: ewMeta.path, name: ewMeta.title, description: ewMeta.description }),
  breadcrumbList(ewMeta.path, ewCrumbs),
  locationDentist(ewAreas),
);
const faqSchema = graph(faqPage({ path: ewMeta.path, items: ewFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function EwingPage() {
  return (
    <div data-page-area="Ewing, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="ew-title" label="Ewing, NJ" content={ewHero} crumbs={ewCrumbs} strong={[0, 1]} track="ew" aside={<RouteMap route={ewRoute} />} />
      <GettingHere id="ew-here-title" title={ewHere.title} blocks={ewHere.blocks} area="Ewing" />
      <TownshipTags />
      <GumPath />
      <AfterWork />
      <Cost id="ew-cost-title" cost={ewCost} />
      <FaqAccordion id="ew-faq-title" faqs={ewFaqs} track="ew" />
      <ClosingCta id="ew-cta-title" content={ewCta} track="ew_final" />
    </div>
  );
}
