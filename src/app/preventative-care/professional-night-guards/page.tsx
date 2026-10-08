import { Cost } from "@/components/sections/general/Cost";
import { DentalWork, GrindSigns, GuardCare, GuardTable, LabJourney, NightArch } from "@/components/sections/general/NightGuards";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ngCost, ngCrumbs, ngCta, ngFaqs, ngHero, ngMeta, ngServiceDescription } from "@/content/pages/general/night-guards";
import { breadcrumbList, faqPage, graph, practiceService, treatmentPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ngMeta);

/** Handoff 3a: MedicalWebPage + Service (custom lab-made night guards) + breadcrumb; 3b: FAQPage. */
const schema = graph(
  treatmentPage({ path: ngMeta.path, name: ngMeta.title, description: ngMeta.description, main: "service" }),
  practiceService({
    path: ngMeta.path,
    name: "Custom night guards",
    serviceType: "Custom lab-made night guards for teeth grinding",
    description: ngServiceDescription,
  }),
  breadcrumbList(ngMeta.path, ngCrumbs),
);
const faqSchema = graph(faqPage({ path: ngMeta.path, items: ngFaqs.items }));

/** Section order follows 02 Content.md. */
export default function NightGuardsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="ng-title"
        label="Night guards"
        content={ngHero}
        crumbs={ngCrumbs}
        strong={[0, 1, 2]}
        track="ng"
        aside={<NightArch />}
      />
      <GrindSigns />
      <GuardTable />
      <LabJourney />
      <DentalWork />
      <GuardCare />
      <Cost id="ng-cost-title" cost={ngCost} />
      <FaqAccordion id="ng-faq-title" faqs={ngFaqs} track="ng" />
      <ClosingCta id="ng-cta-title" content={ngCta} track="ng_final" />
    </>
  );
}
