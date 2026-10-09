import { LegalDocument, LegalHero, LegalText } from "@/components/sections/legal/Legal";
import { PrintButton } from "@/components/sections/legal/LegalTools";
import { HipaaCall, NoticeRecord } from "@/components/sections/legal/LegalVisuals";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { hipaa, hipaaPdf } from "@/content/pages/legal/hipaa";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "@/components/sections/legal/Legal.module.css";

export const metadata = buildMetadata(hipaa.meta);

/** Handoff 3a: WebPage + BreadcrumbList, the practice as publisher by @id */
const schema = graph(
  legalPage({ path: hipaa.meta.path, name: hipaa.meta.title, description: hipaa.meta.description }),
  breadcrumbList(hipaa.meta.path, hipaa.crumbs),
);

/**
 * Handoff: the bold header statement directly under the H1, the effective date under the
 * opening paragraph, the PDF button in the hero, the full notice in the HTML (nothing
 * collapsed) and one CTA (the call band at the end). Events: pdf_download, call clicks.
 * No marketing or advertising pixels on this page.
 */
export default function HipaaNoticePage() {
  return (
    <div data-legal-doc>
      <JsonLd data={schema} />
      <LegalHero
        page={hipaa}
        aside={<NoticeRecord />}
        actions={
          <>
            <Button href={hipaaPdf.href} icon="download" track="pdf_download" long>
              {hipaaPdf.label}
            </Button>
            <PrintButton label="Print this notice" className={styles.heroPrint} />
            <LegalText text={hipaaPdf.confirm} />
          </>
        }
      />
      <LegalDocument page={hipaa} newTab after={<HipaaCall />} />
    </div>
  );
}
