import { Between, BrushAngle, Brushing, Diet, Flossing, Products } from "@/components/sections/general/Hygiene";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ohCrumbs, ohCta, ohFaqs, ohHero, ohMeta } from "@/content/pages/general/hygiene";
import { breadcrumbList, faqPage, graph, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ohMeta);

/** Handoff 3a: MedicalWebPage (informational, no procedure node) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: ohMeta.path, name: ohMeta.title, description: ohMeta.description }),
  breadcrumbList(ohMeta.path, ohCrumbs),
);
const faqSchema = graph(faqPage({ path: ohMeta.path, items: ohFaqs.items }));

/** Section order follows 02 Content.md. */
export default function OralHygienePage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="oh-title"
        label="Oral hygiene"
        content={ohHero}
        crumbs={ohCrumbs}
        strong={[0, 1]}
        track="oh"
        aside={<BrushAngle />}
      />
      <Brushing />
      <Flossing />
      <Products />
      <Diet />
      <Between />
      <FaqAccordion id="oh-faq-title" faqs={ohFaqs} track="oh" />
      <ClosingCta id="oh-cta-title" content={ohCta} track="oh_final" />
    </>
  );
}
