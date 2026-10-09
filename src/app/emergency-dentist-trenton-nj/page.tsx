import { Cost } from "@/components/sections/general/Cost";
import { CallBar } from "@/components/sections/general/Emergency";
import { GettingHere } from "@/components/sections/locations/Location";
import { CallRelay, HeroSafetyNote, PhoneToPlan, SlotPlanner, TriageBadges } from "@/components/sections/servicelocation/EmergencyTrenton";
import { QuickFacts } from "@/components/sections/servicelocation/QuickFacts";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { etCost, etCrumbs, etCta, etFacts, etFaqs, etHere, etHero, etMeta, etServiceDescription } from "@/content/pages/servicelocation";
import { hours } from "@/content/site";
import { breadcrumbList, faqPage, graph, ids, locationDentist, treatmentPage } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(etMeta);

const trenton = [{ type: "City" as const, name: "Trenton, NJ", state: "NJ" as const }];

/** Handoff 3a: MedicalWebPage + BreadcrumbList + Service (#service, emergency dental care, area Trenton) + Dentist reference; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: etMeta.path, name: etMeta.title, description: etMeta.description, main: "service", mainEntity: "service" }),
  breadcrumbList(etMeta.path, etCrumbs),
  {
    "@type": "Service",
    "@id": `${absoluteUrl(etMeta.path)}#service`,
    name: "Emergency dental care",
    serviceType: "Emergency dental care",
    description: etServiceDescription,
    provider: { "@id": ids.dentist },
    areaServed: {
      "@type": "City",
      name: "Trenton, NJ",
      containedInPlace: { "@type": "AdministrativeArea", name: "Mercer County, New Jersey", containedInPlace: { "@type": "State", name: "New Jersey" } },
    },
    url: absoluteUrl(etMeta.path),
  },
  locationDentist(trenton),
);
const faqSchema = graph(faqPage({ path: etMeta.path, items: etFaqs.items }));

/** Office hours for the Getting Here table, from site.ts (Tuesday confirmed 8 am – 5 pm) */
const hoursBlocks = [
  { p: "**Office hours**" },
  { table: { label: "Office hours", head: ["Day", "Hours"], rows: hours.map((d) => [d.day, d.label]) } },
];

/** Section order follows 02 Content.md; call-first, with the phone call bar on small screens (handoff). */
export default function EmergencyTrentonPage() {
  return (
    <div data-page-area="Trenton, NJ" data-call-event="emergency_call_click">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="et-title"
        label="Emergency dentist · Trenton"
        content={etHero}
        crumbs={etCrumbs}
        strong={[0, 1]}
        track="et"
        aside={<CallRelay />}
      >
        <HeroSafetyNote />
        <QuickFacts facts={etFacts} tone="red" compact />
      </PageHero>
      <SlotPlanner />
      <TriageBadges />
      <PhoneToPlan />
      <Cost id="et-cost-title" cost={etCost} />
      <GettingHere id="et-here-title" title={etHere.title} blocks={[...etHere.blocks, ...hoursBlocks]} area="Trenton" />
      <FaqAccordion id="et-faq-title" faqs={etFaqs} track="et" />
      <ClosingCta id="et-cta-title" content={etCta} track="et_final" />
      <CallBar />
    </div>
  );
}
