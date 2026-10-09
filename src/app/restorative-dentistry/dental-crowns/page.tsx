import { Cost } from "@/components/sections/general/Cost";
import {
  CrownCare,
  CrownSeat,
  FitBand,
  Materials,
  VisitBoard,
  WhenCrown,
} from "@/components/sections/restorative/Crowns";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  crCost,
  crCrumbs,
  crCta,
  crFaqs,
  crHero,
  crMeta,
  crProcedureDescription,
} from "@/content/pages/restorative/repair";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(crMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental crowns) + breadcrumb; 3b: FAQPage. No Review markup. */
const schema = graph(
  treatmentPage({
    path: crMeta.path,
    name: crMeta.title,
    description: crMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: crMeta.path,
    name: "Dental crowns",
    description: crProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(crMeta.path, crCrumbs),
);
const faqSchema = graph(faqPage({ path: crMeta.path, items: crFaqs.items }));

/** Section order follows 02 Content.md. */
export default function DentalCrownsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="cr-title"
        label="Dental crowns"
        content={crHero}
        crumbs={crCrumbs}
        strong={[0, 1]}
        track="cr"
        aside={<CrownSeat />}
      />
      <WhenCrown />
      <Materials />
      <VisitBoard />
      <FitBand />
      <Cost id="cr-cost-title" cost={crCost} />
      <CrownCare />
      <FaqAccordion id="cr-faq-title" faqs={crFaqs} track="cr" />
      <ClosingCta id="cr-cta-title" content={crCta} track="cr_final" />
    </>
  );
}
