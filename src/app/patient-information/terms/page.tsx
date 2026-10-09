import { LegalDocument, LegalHero } from "@/components/sections/legal/Legal";
import { PolicyFolder } from "@/components/sections/legal/LegalVisuals";
import { JsonLd } from "@/components/ui/JsonLd";
import { terms } from "@/content/pages/legal/terms";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(terms.meta);

/** Handoff 3a: WebPage + BreadcrumbList, the practice as publisher by @id */
const schema = graph(
  legalPage({ path: terms.meta.path, name: terms.meta.title, description: terms.meta.description }),
  breadcrumbList(terms.meta.path, terms.crumbs),
);

/** Section order follows 02 Content.md. No marketing blocks or appointment CTAs (handoff). */
export default function TermsPage() {
  return (
    <div data-legal-doc>
      <JsonLd data={schema} />
      <LegalHero page={terms} aside={<PolicyFolder />} />
      <LegalDocument page={terms} />
    </div>
  );
}
