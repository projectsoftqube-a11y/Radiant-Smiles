import { Cost } from "@/components/sections/general/Cost";
import { ReplaceOptions, TownshipNest } from "@/components/sections/locations/Hopewell";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { hoAreas, hoCost, hoCrumbs, hoCta, hoFaqs, hoHere, hoHero, hoMeta, hoRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(hoMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Hopewell Township, Titusville, Washington Crossing NJ); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: hoMeta.path, name: hoMeta.title, description: hoMeta.description }),
  breadcrumbList(hoMeta.path, hoCrumbs),
  locationDentist(hoAreas),
);
const faqSchema = graph(faqPage({ path: hoMeta.path, items: hoFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function HopewellPage() {
  return (
    <div data-page-area="Hopewell, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="ho-title" label="Hopewell, NJ" content={hoHero} crumbs={hoCrumbs} strong={[0, 1]} track="ho" aside={<RouteMap route={hoRoute} />} />
      <GettingHere id="ho-here-title" title={hoHere.title} blocks={hoHere.blocks} area="Hopewell" />
      <TownshipNest />
      <ReplaceOptions />
      <Cost id="ho-cost-title" cost={hoCost} />
      <FaqAccordion id="ho-faq-title" faqs={hoFaqs} track="ho" />
      <ClosingCta id="ho-cta-title" content={hoCta} track="ho_final" />
    </div>
  );
}
