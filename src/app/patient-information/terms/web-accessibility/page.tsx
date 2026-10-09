import { LegalDocument, LegalHero } from "@/components/sections/legal/Legal";
import { FocusDemo } from "@/components/sections/legal/LegalVisuals";
import { JsonLd } from "@/components/ui/JsonLd";
import { accessibility } from "@/content/pages/legal/accessibility";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(accessibility.meta);

/** Handoff 3a: WebPage + BreadcrumbList, the practice as publisher by @id */
const schema = graph(
  legalPage({ path: accessibility.meta.path, name: accessibility.meta.title, description: accessibility.meta.description }),
  breadcrumbList(accessibility.meta.path, accessibility.crumbs),
);

/** Section order follows 02 Content.md. No marketing blocks or appointment CTAs (handoff). */
export default function AccessibilityPage() {
  return (
    <div data-legal-doc>
      <JsonLd data={schema} />
      <LegalHero page={accessibility} aside={<FocusDemo />} />
      <LegalDocument page={accessibility} />
    </div>
  );
}
