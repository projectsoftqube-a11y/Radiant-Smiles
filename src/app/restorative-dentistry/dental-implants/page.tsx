import {
  HealingTimeline,
  ImplantCost,
  ImplantExploded,
  ImplantOptions,
  ImplantRecovery,
  Imaging,
  OfferCallout,
  RightForYou,
  ThreeWay,
  WhyImplant,
  YouGet,
} from "@/components/sections/restorative/Implants";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  imCrumbs,
  imCta,
  imFaqs,
  imHero,
  imMeta,
  imProcedureDescription,
} from "@/content/pages/restorative/replace";
import {
  breadcrumbList,
  faqPage,
  graph,
  medicalProcedure,
  treatmentPage,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(imMeta);

/** Handoff 3a: MedicalWebPage + MedicalProcedure (dental implants) + breadcrumb; 3b: FAQPage. No net price anywhere. */
const schema = graph(
  treatmentPage({
    path: imMeta.path,
    name: imMeta.title,
    description: imMeta.description,
    main: "procedure",
    mainEntity: "procedure",
  }),
  medicalProcedure({
    path: imMeta.path,
    name: "Dental implants",
    description: imProcedureDescription,
    specialty: true,
  }),
  breadcrumbList(imMeta.path, imCrumbs),
);
const faqSchema = graph(faqPage({ path: imMeta.path, items: imFaqs.items }));

/** Section order follows 02 Content.md. Offer line + consult and call buttons stay in the first screen on mobile. */
export default function DentalImplantsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="im-title"
        label="Dental implants"
        content={imHero}
        crumbs={imCrumbs}
        strong={[0, 1]}
        track="im"
        callout={<OfferCallout />}
        aside={<ImplantExploded />}
      />
      <WhyImplant />
      <RightForYou />
      <HealingTimeline />
      <Imaging />
      <ImplantOptions />
      <ImplantCost />
      <ThreeWay />
      <ImplantRecovery />
      <YouGet />
      <FaqAccordion id="im-faq-title" faqs={imFaqs} track="im" />
      <ClosingCta id="im-cta-title" content={imCta} track="im_final" />
    </>
  );
}
