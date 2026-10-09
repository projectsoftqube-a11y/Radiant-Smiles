import { Cost } from "@/components/sections/general/Cost";
import { DriveLadder, RiverBridges, StateTowns, TravelCare } from "@/components/sections/locations/AreasHub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { asCrumbs, asCta, asFaqs, asHero, asInsurance, asItemList, asMeta } from "@/content/pages/locations/hub";
import { breadcrumbList, faqPage, graph, innerPage, locationDentist, pageItemList, type ServedArea } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(asMeta);

/** Handoff 3a: every area in the hub, in the handoff's order and types */
const hubAreas: ServedArea[] = [
  { type: "AdministrativeArea", name: "Lower Makefield Township, PA", state: "PA" },
  { type: "City", name: "Morrisville, PA", state: "PA" },
  { type: "Place", name: "Washington Crossing, PA", state: "PA" },
  { type: "AdministrativeArea", name: "Upper Makefield Township, PA", state: "PA" },
  { type: "City", name: "New Hope, PA", state: "PA" },
  { type: "City", name: "Trenton, NJ", state: "NJ" },
  { type: "AdministrativeArea", name: "Ewing Township, NJ", state: "NJ" },
  { type: "AdministrativeArea", name: "Hopewell Township, NJ", state: "NJ" },
  { type: "AdministrativeArea", name: "Hamilton Township, NJ", state: "NJ" },
  { type: "Place", name: "Lawrenceville, NJ", state: "NJ" },
  { type: "City", name: "Pennington, NJ", state: "NJ" },
  { type: "AdministrativeArea", name: "Mercer County, New Jersey", state: "NJ-county" },
];

/** Handoff 3a: CollectionPage (mainEntity: the ItemList of the 11 town pages) + BreadcrumbList + Dentist reference; 3b: FAQPage. */
const schema = graph(
  innerPage({
    type: "CollectionPage",
    path: asMeta.path,
    name: asMeta.title,
    description: asMeta.description,
    mainEntity: { "@id": `${absoluteUrl(asMeta.path)}#locations` },
  }),
  breadcrumbList(asMeta.path, asCrumbs),
  pageItemList(asMeta.path, asItemList, { key: "locations", name: "Areas We Serve" }),
  locationDentist(hubAreas),
);
const faqSchema = graph(faqPage({ path: asMeta.path, items: asFaqs.items }));

/** Section order follows 02 Content.md; every event on the page carries page_area (handoff). */
export default function AreasWeServePage() {
  return (
    <div data-page-area="areas-we-serve">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero id="as-title" label="Areas we serve" content={asHero} crumbs={asCrumbs} strong={[0, 1, 2]} track="as" aside={<DriveLadder />} />
      <StateTowns state="pa" />
      <StateTowns state="nj" />
      <RiverBridges />
      <TravelCare />
      <Cost id="as-cost-title" cost={asInsurance} />
      <FaqAccordion id="as-faq-title" faqs={asFaqs} track="as" />
      <ClosingCta id="as-cta-title" content={asCta} track="as_final" />
    </div>
  );
}
