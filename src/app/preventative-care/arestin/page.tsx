import { ArestinExpect, PocketCloseUp, WhatArestin, WhenUsed, WhoShouldnt } from "@/components/sections/general/Arestin";
import { Cost } from "@/components/sections/general/Cost";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { arCost, arCrumbs, arCta, arFaqs, arHero, arMeta, arTherapyDescription } from "@/content/pages/general/arestin";
import { breadcrumbList, faqPage, graph, medicalTherapy, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(arMeta);

/** Handoff 3a: MedicalWebPage + MedicalTherapy with its Drug node (no doses) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: arMeta.path, name: arMeta.title, description: arMeta.description, main: "therapy" }),
  medicalTherapy({
    path: arMeta.path,
    name: "Arestin (minocycline hydrochloride microspheres)",
    description: arTherapyDescription,
    drug: { name: "Arestin", nonProprietaryName: "minocycline hydrochloride" },
  }),
  breadcrumbList(arMeta.path, arCrumbs),
);
const faqSchema = graph(faqPage({ path: arMeta.path, items: arFaqs.items }));

/** Section order follows 02 Content.md. */
export default function ArestinPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ar-title"
        label="Arestin"
        content={arHero}
        crumbs={arCrumbs}
        strong={[0]}
        track="ar"
        aside={<PocketCloseUp />}
      />
      <WhatArestin />
      <WhenUsed />
      <ArestinExpect />
      <WhoShouldnt />
      <Cost id="ar-cost-title" cost={arCost} />
      <FaqAccordion id="ar-faq-title" faqs={arFaqs} track="ar" />
      <ClosingCta id="ar-cta-title" content={arCta} track="ar_final" />
    </>
  );
}
