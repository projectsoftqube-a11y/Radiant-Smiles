import { LegalDocument, LegalHero } from "@/components/sections/legal/Legal";
import { FormPreview } from "@/components/sections/legal/LegalVisuals";
import { JsonLd } from "@/components/ui/JsonLd";
import { privacy } from "@/content/pages/legal/privacy";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(privacy.meta);

/** Handoff 3a: WebPage + BreadcrumbList, the practice as publisher by @id */
const schema = graph(
  legalPage({ path: privacy.meta.path, name: privacy.meta.title, description: privacy.meta.description }),
  breadcrumbList(privacy.meta.path, privacy.crumbs),
);

/** Section order follows 02 Content.md. No marketing blocks or appointment CTAs (handoff). */
export default function PrivacyPage() {
  return (
    <div data-legal-doc>
      <JsonLd data={schema} />
      <LegalHero page={privacy} aside={<FormPreview />} />
      <LegalDocument page={privacy} />
    </div>
  );
}
