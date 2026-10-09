import { Cost } from "@/components/sections/general/Cost";
import { AlignerCalendar, RestOfCare } from "@/components/sections/locations/Lawrenceville";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { lwAreas, lwCost, lwCrumbs, lwCta, lwFaqs, lwHere, lwHero, lwMeta, lwRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(lwMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Lawrenceville, Lawrence Township); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: lwMeta.path, name: lwMeta.title, description: lwMeta.description }),
  breadcrumbList(lwMeta.path, lwCrumbs),
  locationDentist(lwAreas),
);
const faqSchema = graph(faqPage({ path: lwMeta.path, items: lwFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function LawrencevillePage() {
  return (
    <div data-page-area="Lawrenceville, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="lw-title" label="Lawrenceville, NJ" content={lwHero} crumbs={lwCrumbs} strong={[0, 1]} track="lw" aside={<RouteMap route={lwRoute} />} />
      <GettingHere id="lw-here-title" title={lwHere.title} blocks={lwHere.blocks} area="Lawrenceville" />
      <AlignerCalendar />
      <Cost id="lw-cost-title" cost={lwCost} />
      <RestOfCare />
      <FaqAccordion id="lw-faq-title" faqs={lwFaqs} track="lw" />
      <ClosingCta id="lw-cta-title" content={lwCta} track="lw_final" />
    </div>
  );
}
