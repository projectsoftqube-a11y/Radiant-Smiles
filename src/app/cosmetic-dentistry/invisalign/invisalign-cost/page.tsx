import { FactorSliders, PaymentWallet, PriceSheet, SecondOpinion, TwoMaximums } from "@/components/sections/cosmetic/InvisalignCost";
import { InvisalignNav } from "@/components/sections/cosmetic/InvisalignNav";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { INVISALIGN_PATH } from "@/content/pages/cosmetic/common";
import { icCrumbs, icCta, icFaqs, icHero, icMeta } from "@/content/pages/cosmetic/invisalign";
import { breadcrumbList, faqPage, graph, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(icMeta);

/**
 * Handoff 3a: MedicalWebPage about the Invisalign procedure node on /cosmetic-dentistry/invisalign/
 * (by @id) + breadcrumb; 3b: FAQPage. No Offer nodes until terms are confirmed.
 */
const schema = graph(
  treatmentPage({ path: icMeta.path, name: icMeta.title, description: icMeta.description, main: "procedure", mainPath: INVISALIGN_PATH }),
  breadcrumbList(icMeta.path, icCrumbs),
);
const faqSchema = graph(faqPage({ path: icMeta.path, items: icFaqs.items }));

/** Section order follows 02 Content.md. */
export default function InvisalignCostPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ic-title"
        label="Invisalign cost"
        content={icHero}
        crumbs={icCrumbs}
        strong={[0, 1, 2]}
        track="ic"
        aside={<SecondOpinion />}
      />
      <InvisalignNav current={icMeta.path} />
      <PriceSheet />
      <FactorSliders />
      <TwoMaximums />
      <PaymentWallet />
      <FaqAccordion id="ic-faq-title" faqs={icFaqs} track="ic" />
      <ClosingCta id="ic-cta-title" content={icCta} track="ic_final" />
    </>
  );
}
