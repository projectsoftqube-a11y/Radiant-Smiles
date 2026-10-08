import { BringList, FirstVisit, FormsSlip, SpecialBand, WelcomeArch } from "@/components/sections/patient/NewPatients";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import SiteLink from "@/components/ui/SiteLink";
import { npCrumbs, npCta, npFaqs, npFormsLink, npHero, npMeta } from "@/content/pages/patient/new-patients";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(npMeta);

/** Handoff 3a: MedicalWebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "MedicalWebPage", path: npMeta.path, name: npMeta.title, description: npMeta.description }),
  breadcrumbList(npMeta.path, npCrumbs),
);
const faqSchema = graph(faqPage({ path: npMeta.path, items: npFaqs.items }));

/** Section order follows 02 Content.md. */
export default function NewPatientsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="np-title"
        label="New patients"
        content={npHero}
        crumbs={npCrumbs}
        strong={[0, 1]}
        track="np"
        aside={<WelcomeArch />}
      >
        <SiteLink href={npFormsLink.href} className="text-link" data-track="click_patient_forms">
          {npFormsLink.label} <Icon name="arrow" size={16} />
        </SiteLink>
      </PageHero>
      <FirstVisit />
      <BringList />
      <SpecialBand />
      <FormsSlip />
      <FaqAccordion id="np-faq-title" faqs={npFaqs} track="np" />
      <ClosingCta id="np-cta-title" content={npCta} track="np_final" />
    </>
  );
}
