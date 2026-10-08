import {
  Cosmetic,
  EveryAge,
  FamilyDentists,
  FamilyEmergency,
  FamilyPay,
  GeneralDentistry,
  Restorative,
  ToothHouse,
  TwinPanels,
} from "@/components/sections/general/Family";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { famCrumbs, famCta, famFaqs, famHero, famMeta, famServiceDescription } from "@/content/pages/general/family";
import { breadcrumbList, faqPage, graph, practiceService, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(famMeta);

/** Handoff 3a: MedicalWebPage + Service (family and general dentistry) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: famMeta.path, name: famMeta.title, description: famMeta.description, main: "service" }),
  practiceService({
    path: famMeta.path,
    name: "Family dentistry",
    serviceType: "Family and general dentistry",
    description: famServiceDescription,
  }),
  breadcrumbList(famMeta.path, famCrumbs),
);
const faqSchema = graph(faqPage({ path: famMeta.path, items: famFaqs.items }));

/** Section order follows 02 Content.md. */
export default function FamilyDentistryPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="fam-title"
        label="Family dentistry"
        content={famHero}
        crumbs={famCrumbs}
        strong={[0, 1]}
        track="fam"
        aside={<ToothHouse />}
      />
      <EveryAge />
      <GeneralDentistry />
      <TwinPanels />
      <Restorative />
      <Cosmetic />
      <FamilyEmergency />
      <FamilyDentists />
      <FamilyPay />
      <FaqAccordion id="fam-faq-title" faqs={famFaqs} track="fam" />
      <ClosingCta id="fam-cta-title" content={famCta} track="fam_final" />
    </>
  );
}
