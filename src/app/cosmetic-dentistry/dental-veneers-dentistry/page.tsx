import { Cost } from "@/components/sections/general/Cost";
import {
  DecadeBar,
  ShellSettle,
  VeneerCare,
  VeneerFixes,
  VeneerQuote,
  VeneerSteps,
  VeneerVsBonding,
  WeighUp,
} from "@/components/sections/cosmetic/Veneers";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { veCost, veCrumbs, veCta, veFaqs, veHero, veMeta, veProcedureDescription } from "@/content/pages/cosmetic/smile";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(veMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (porcelain veneers, front teeth; no procedureType) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: veMeta.path, name: veMeta.title, description: veMeta.description, main: "procedure" }),
  breadcrumbList(veMeta.path, veCrumbs),
  medicalProcedure({ path: veMeta.path, name: "Porcelain veneers", description: veProcedureDescription, bodyLocation: "Front teeth" }),
);
const faqSchema = graph(faqPage({ path: veMeta.path, items: veFaqs.items }));

/** Section order follows 02 Content.md. */
export default function PorcelainVeneersPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ve-title"
        label="Porcelain veneers"
        content={veHero}
        crumbs={veCrumbs}
        strong={[0, 1]}
        track="ve"
        aside={<ShellSettle />}
      >
        <VeneerQuote />
      </PageHero>
      <VeneerFixes />
      <WeighUp />
      <VeneerVsBonding />
      <VeneerSteps />
      <DecadeBar />
      <Cost id="ve-cost-title" cost={veCost} label="Cost & financing" />
      <VeneerCare />
      <FaqAccordion id="ve-faq-title" faqs={veFaqs} track="ve" />
      <ClosingCta id="ve-cta-title" content={veCta} track="ve_final" />
    </>
  );
}
