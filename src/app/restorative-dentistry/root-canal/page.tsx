import { Cost } from "@/components/sections/general/Cost";
import {
  CrownAfter,
  DoesItHurt,
  PainEmergency,
  PainSigns,
  PulpSection,
  SaveOrRemove,
  TwoAppointments,
  WhySave,
} from "@/components/sections/restorative/RootCanal";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  rcCost,
  rcCrumbs,
  rcCta,
  rcFaqs,
  rcHero,
  rcMeta,
  rcProcedureDescription,
} from "@/content/pages/restorative/repair";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(rcMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (root canal therapy) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: rcMeta.path,
    name: rcMeta.title,
    description: rcMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: rcMeta.path,
    name: "Root canal therapy",
    description: rcProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(rcMeta.path, rcCrumbs),
);
const faqSchema = graph(faqPage({ path: rcMeta.path, items: rcFaqs.items }));

/** Section order follows 02 Content.md. Call first in the hero and final CTA (pain-first, handoff). */
export default function RootCanalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="rc-title"
        label="Root canal therapy"
        content={rcHero}
        crumbs={rcCrumbs}
        strong={[0, 1, 2]}
        track="rc"
        aside={<PulpSection />}
      />
      <WhySave />
      <PainSigns />
      <TwoAppointments />
      <DoesItHurt />
      <CrownAfter />
      <SaveOrRemove />
      <Cost id="rc-cost-title" cost={rcCost} />
      <PainEmergency />
      <FaqAccordion id="rc-faq-title" faqs={rcFaqs} track="rc" />
      <ClosingCta id="rc-cta-title" content={rcCta} track="rc_final" />
    </>
  );
}
