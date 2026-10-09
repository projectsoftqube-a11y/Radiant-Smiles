import { Cost } from "@/components/sections/general/Cost";
import {
  ImpactedXray,
  WisdomSigns,
  NowLaterNever,
  AgeBand,
  UnderAnHour,
  FirstDays,
} from "@/components/sections/restorative/Wisdom";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  wtCost,
  wtCrumbs,
  wtCta,
  wtFaqs,
  wtHero,
  wtMeta,
  wtProcedureDescription,
} from "@/content/pages/restorative/extract";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(wtMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({
    path: wtMeta.path,
    name: wtMeta.title,
    description: wtMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: wtMeta.path,
    name: "Wisdom teeth removal",
    description: wtProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(wtMeta.path, wtCrumbs),
);
const faqSchema = graph(faqPage({ path: wtMeta.path, items: wtFaqs.items }));

/** Section order follows 02 Content.md. */
export default function WisdomTeethPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="wt-title"
        label="Wisdom teeth removal"
        content={wtHero}
        crumbs={wtCrumbs}
        strong={[0, 1, 2]}
        track="wt"
        aside={<ImpactedXray />}
      />
      <WisdomSigns />
      <NowLaterNever />
      <AgeBand />
      <UnderAnHour />
      <FirstDays />
      <Cost id="wt-cost-title" cost={wtCost} />
      <FaqAccordion id="wt-faq-title" faqs={wtFaqs} track="wt" />
      <ClosingCta id="wt-cta-title" content={wtCta} track="wt_final" />
    </>
  );
}
