import { LegalDocument, LegalHero } from "@/components/sections/legal/Legal";
import { NoticeSheet } from "@/components/sections/legal/LegalVisuals";
import { JsonLd } from "@/components/ui/JsonLd";
import { disclaimer } from "@/content/pages/legal/disclaimer";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(disclaimer.meta);

/** Handoff 3a: WebPage + BreadcrumbList, the practice as publisher by @id */
const schema = graph(
  legalPage({ path: disclaimer.meta.path, name: disclaimer.meta.title, description: disclaimer.meta.description }),
  breadcrumbList(disclaimer.meta.path, disclaimer.crumbs),
);

/** Section order follows 02 Content.md. No marketing blocks or appointment CTAs (handoff). */
export default function DisclaimerPage() {
  return (
    <div data-legal-doc>
      <JsonLd data={schema} />
      <LegalHero page={disclaimer} aside={<NoticeSheet />} />
      <LegalDocument page={disclaimer} />
    </div>
  );
}
