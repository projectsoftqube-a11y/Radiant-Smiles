import {
  CheckupChart,
  CheckupSteps,
  CleaningCost,
  HowOften,
  NotEnough,
  ProCleaning,
  ScreeningRibbon,
  XrayBand,
} from "@/components/sections/general/Cleaning";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { tcCrumbs, tcCta, tcFaqs, tcHero, tcHeroPoints, tcMeta, tcProcedureDescription } from "@/content/pages/general/cleaning";
import { breadcrumbList, faqPage, graph, medicalProcedure, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(tcMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental cleaning and checkup) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: tcMeta.path, name: tcMeta.title, description: tcMeta.description, main: "procedure" }),
  medicalProcedure({
    path: tcMeta.path,
    name: "Dental cleaning and checkup",
    alternateName: "Dental exam and cleaning",
    description: tcProcedureDescription,
  }),
  breadcrumbList(tcMeta.path, tcCrumbs),
);
const faqSchema = graph(faqPage({ path: tcMeta.path, items: tcFaqs.items }));

/** Section order follows 02 Content.md. */
export default function TeethCleaningPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="tc-title"
        label="Cleanings & checkups"
        content={tcHero}
        crumbs={tcCrumbs}
        strong={[0, 1]}
        track="tc"
        points={tcHeroPoints}
        aside={<CheckupChart />}
      />
      <CheckupSteps />
      <ProCleaning />
      <XrayBand />
      <ScreeningRibbon />
      <NotEnough />
      <HowOften />
      <CleaningCost />
      <FaqAccordion id="tc-faq-title" faqs={tcFaqs} track="tc" />
      <ClosingCta id="tc-cta-title" content={tcCta} track="tc_final" />
    </>
  );
}
