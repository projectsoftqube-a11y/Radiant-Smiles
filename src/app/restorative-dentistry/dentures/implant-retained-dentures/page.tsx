import { Cost } from "@/components/sections/general/Cost";
import { DentureNav } from "@/components/sections/restorative/DentureNav";
import {
  SnapIn,
  StayPut,
  AttachmentStyles,
  BoneCheck,
  StagedPath,
} from "@/components/sections/restorative/ImplantDentures";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  irCost,
  irCrumbs,
  irCta,
  irFaqs,
  irHero,
  irMeta,
  irProcedureDescription,
} from "@/content/pages/restorative/dentures";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(irMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb (Home › Restorative Dentistry › Dentures › page); 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: irMeta.path,
    name: irMeta.title,
    description: irMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: irMeta.path,
    name: "Implant-retained dentures",
    description: irProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(irMeta.path, irCrumbs),
);
const faqSchema = graph(faqPage({ path: irMeta.path, items: irFaqs.items }));

/** Section order follows 02 Content.md. */
export default function ImplantRetainedDenturesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ir-title"
        label="Implant-retained dentures"
        content={irHero}
        crumbs={irCrumbs}
        strong={[0, 1]}
        track="ir"
        aside={<SnapIn />}
      />
      <DentureNav current={irMeta.path} />
      <StayPut />
      <AttachmentStyles />
      <BoneCheck />
      <StagedPath />
      <Cost id="ir-cost-title" cost={irCost} />
      <FaqAccordion id="ir-faq-title" faqs={irFaqs} track="ir" />
      <ClosingCta id="ir-cta-title" content={irCta} track="ir_final" />
    </>
  );
}
