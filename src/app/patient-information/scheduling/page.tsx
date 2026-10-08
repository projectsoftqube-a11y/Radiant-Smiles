import { BeforeVisit, EmergencyCard, HoursSection, RequestDesk } from "@/components/sections/patient/Scheduling";
import { WeekPlanner } from "@/components/sections/patient/SchedulingLive";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { schedCrumbs, schedCta, schedFaqs, schedHero, schedMeta } from "@/content/pages/patient/scheduling";
import { breadcrumbList, faqPage, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(schedMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb; 3b: FAQPage. */
const schema = graph(
  innerPage({ type: "WebPage", path: schedMeta.path, name: schedMeta.title, description: schedMeta.description }),
  breadcrumbList(schedMeta.path, schedCrumbs),
);
const faqSchema = graph(faqPage({ path: schedMeta.path, items: schedFaqs.items }));

/** The site's main conversion page. Section order follows 02 Content.md. */
export default function SchedulingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="sched-title"
        label="Scheduling"
        content={schedHero}
        crumbs={schedCrumbs}
        strong={[0, 1, 2]}
        track="sched"
        aside={<WeekPlanner />}
      />
      <RequestDesk />
      <HoursSection />
      <EmergencyCard />
      <BeforeVisit />
      <FaqAccordion id="sched-faq-title" faqs={schedFaqs} track="sched" />
      <ClosingCta id="sched-cta-title" content={schedCta} track="sched_final" />
    </>
  );
}
