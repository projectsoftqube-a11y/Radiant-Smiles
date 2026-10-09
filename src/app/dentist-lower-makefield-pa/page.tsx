import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { CareMenu, HouseholdPass, KidsLayers } from "@/components/sections/locations/LowerMakefield";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { lmAreas, lmCost, lmCrumbs, lmCta, lmFaqs, lmHere, lmHero, lmMeta, lmRoute } from "@/content/pages/locations/pa";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(lmMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Lower Makefield Township); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: lmMeta.path, name: lmMeta.title, description: lmMeta.description }),
  breadcrumbList(lmMeta.path, lmCrumbs),
  locationDentist(lmAreas),
);
const faqSchema = graph(faqPage({ path: lmMeta.path, items: lmFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function LowerMakefieldPage() {
  return (
    <div data-page-area="Lower Makefield, PA">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="lm-title" label="Lower Makefield, PA" content={lmHero} crumbs={lmCrumbs} strong={[0, 1]} track="lm" aside={<RouteMap route={lmRoute} />} />
      <GettingHere id="lm-here-title" title={lmHere.title} blocks={lmHere.blocks} area="Lower Makefield" />
      <CareMenu />
      <KidsLayers />
      <HouseholdPass />
      <Cost id="lm-cost-title" cost={lmCost} />
      <FaqAccordion id="lm-faq-title" faqs={lmFaqs} track="lm" />
      <ClosingCta id="lm-cta-title" content={lmCta} track="lm_final" />
    </div>
  );
}
