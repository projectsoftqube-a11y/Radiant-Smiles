import { Cost } from "@/components/sections/general/Cost";
import { BondingVsVeneers, LifespanBand, OneAppointment, PinnedTooth, ResinLayers } from "@/components/sections/cosmetic/Bonding";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { bdCost, bdCrumbs, bdCta, bdFaqs, bdHero, bdMeta, bdProcedureDescription } from "@/content/pages/cosmetic/smile";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(bdMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental bonding, noninvasive) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: bdMeta.path, name: bdMeta.title, description: bdMeta.description, main: "procedure" }),
  breadcrumbList(bdMeta.path, bdCrumbs),
  medicalProcedure({ path: bdMeta.path, name: "Dental bonding", description: bdProcedureDescription, noninvasive: true }),
);
const faqSchema = graph(faqPage({ path: bdMeta.path, items: bdFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentalBondingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="bd-title"
        label="Dental bonding"
        content={bdHero}
        crumbs={bdCrumbs}
        strong={[0, 1]}
        track="bd"
        aside={<ResinLayers />}
      />
      <PinnedTooth />
      <OneAppointment />
      <BondingVsVeneers />
      <LifespanBand />
      <Cost id="bd-cost-title" cost={bdCost} />
      <FaqAccordion id="bd-faq-title" faqs={bdFaqs} track="bd" />
      <ClosingCta id="bd-cta-title" content={bdCta} track="bd_final" />
    </>
  );
}
