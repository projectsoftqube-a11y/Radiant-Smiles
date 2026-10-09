import { Cost } from "@/components/sections/general/Cost";
import { DentureNav } from "@/components/sections/restorative/DentureNav";
import {
  OneAppointment,
  WhoImmediate,
  MadeInAdvance,
  TradeOff,
  HealingMonths,
  LongTermFit,
} from "@/components/sections/restorative/Immediate";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  idCost,
  idCrumbs,
  idCta,
  idFaqs,
  idHero,
  idMeta,
  idProcedureDescription,
} from "@/content/pages/restorative/dentures";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(idMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb (Home › Restorative Dentistry › Dentures › page); 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: idMeta.path,
    name: idMeta.title,
    description: idMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: idMeta.path,
    name: "Immediate dentures",
    description: idProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(idMeta.path, idCrumbs),
);
const faqSchema = graph(faqPage({ path: idMeta.path, items: idFaqs.items }));

/** Section order follows 02 Content.md. */
export default function ImmediateDenturesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="id-title"
        label="Immediate dentures"
        content={idHero}
        crumbs={idCrumbs}
        strong={[0, 1]}
        track="id"
        aside={<OneAppointment />}
      />
      <DentureNav current={idMeta.path} />
      <WhoImmediate />
      <MadeInAdvance />
      <TradeOff />
      <HealingMonths />
      <LongTermFit />
      <Cost id="id-cost-title" cost={idCost} flush />
      <FaqAccordion id="id-faq-title" faqs={idFaqs} track="id" />
      <ClosingCta id="id-cta-title" content={idCta} track="id_final" />
    </>
  );
}
