import { CallBar, CallFirst, EmergencyPay, ErCard, FieldGuide, HeroSafety, SameDayBoard } from "@/components/sections/general/Emergency";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { emCrumbs, emCta, emFaqs, emHero, emMeta, emServiceDescription } from "@/content/pages/general/emergency";
import { breadcrumbList, faqPage, graph, practiceService, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(emMeta);

/**
 * Handoff 3a: MedicalWebPage + Service (emergency dental care) + breadcrumb, no hoursAvailable;
 * 3b: FAQPage.
 */
const schema = graph(
  treatmentPage({ path: emMeta.path, name: emMeta.title, description: emMeta.description, main: "service" }),
  practiceService({
    path: emMeta.path,
    name: "Emergency dental care",
    serviceType: "Emergency dentistry",
    description: emServiceDescription,
  }),
  breadcrumbList(emMeta.path, emCrumbs),
);
const faqSchema = graph(faqPage({ path: emMeta.path, items: emFaqs.items }));

/** Section order follows 02 Content.md. Every phone link on the page also fires click_call_emergency. */
export default function EmergencyDentistryPage() {
  return (
    <div data-call-event="click_call_emergency">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="em-title"
        label="Emergency dentistry"
        content={emHero}
        crumbs={emCrumbs}
        strong={[0, 1]}
        track="em"
        aside={<SameDayBoard />}
      >
        <HeroSafety />
      </PageHero>
      <CallFirst />
      <FieldGuide />
      <ErCard />
      <EmergencyPay />
      <FaqAccordion id="em-faq-title" faqs={emFaqs} track="em" />
      <ClosingCta id="em-cta-title" content={emCta} track="em_final" />
      <CallBar />
    </div>
  );
}
