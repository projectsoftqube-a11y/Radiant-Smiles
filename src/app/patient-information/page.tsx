import { HubCards, VisitPass } from "@/components/sections/patient/Hub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { PI_PATH, piCrumbs } from "@/content/pages/patient/common";
import { hubCta, hubFaqs, hubHero, hubItemList, hubMeta } from "@/content/pages/patient/hub";
import { breadcrumbList, faqPage, graph, innerPage, pageItemList } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(hubMeta);

const crumbs = piCrumbs("Patient Information", PI_PATH).slice(0, 2);

/** Handoff 3a: CollectionPage + breadcrumb + ItemList of the section pages; 3b: FAQPage. */
const schema = graph(
  innerPage({
    type: "CollectionPage",
    path: PI_PATH,
    name: hubMeta.title,
    description: hubMeta.description,
    mainEntity: { "@id": `${absoluteUrl(PI_PATH)}#itemlist` },
  }),
  breadcrumbList(PI_PATH, crumbs),
  pageItemList(PI_PATH, hubItemList),
);
const faqSchema = graph(faqPage({ path: PI_PATH, items: hubFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PatientInformationPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="pi-title"
        label="Patient information"
        content={hubHero}
        crumbs={crumbs}
        strong={[0, 1]}
        track="pi"
        aside={<VisitPass />}
      />
      <HubCards />
      <FaqAccordion id="pi-faq-title" faqs={hubFaqs} track="pi" />
      <ClosingCta id="pi-cta-title" content={hubCta} track="pi_final" />
    </>
  );
}
