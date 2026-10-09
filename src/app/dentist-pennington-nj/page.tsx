import { Cost } from "@/components/sections/general/Cost";
import { GettingHere, RouteMap } from "@/components/sections/locations/Location";
import { CalmCard, ChairTech } from "@/components/sections/locations/Pennington";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { peAreas, peCrumbs, peCta, peFaqs, peFirst, peHere, peHero, peMeta, peRoute } from "@/content/pages/locations/nj";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(peMeta);

/** Handoff 3a: WebPage + BreadcrumbList + Dentist reference (Pennington); 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: peMeta.path, name: peMeta.title, description: peMeta.description }),
  breadcrumbList(peMeta.path, peCrumbs),
  locationDentist(peAreas),
);
const faqSchema = graph(faqPage({ path: peMeta.path, items: peFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function PenningtonPage() {
  return (
    <div data-page-area="Pennington, NJ">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="pe-title" label="Pennington, NJ" content={peHero} crumbs={peCrumbs} strong={[0, 1]} track="pe" aside={<RouteMap route={peRoute} />} />
      <GettingHere id="pe-here-title" title={peHere.title} blocks={peHere.blocks} area="Pennington" />
      <CalmCard />
      <ChairTech />
      <Cost id="pe-first-title" cost={peFirst} />
      <FaqAccordion id="pe-faq-title" faqs={peFaqs} track="pe" />
      <ClosingCta id="pe-cta-title" content={peCta} track="pe_final" />
    </div>
  );
}
