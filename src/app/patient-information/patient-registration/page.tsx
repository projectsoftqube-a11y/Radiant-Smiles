import { Clipboard, DetailCards, GettingForms, PrivacyBanner } from "@/components/sections/patient/Registration";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { regCrumbs, regCta, regHero, regMeta } from "@/content/pages/patient/registration";
import { breadcrumbList, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(regMeta);

/** Handoff 3a: WebPage about the practice + breadcrumb. No tracking pixels on this page. */
const schema = graph(
  innerPage({ type: "WebPage", path: regMeta.path, name: regMeta.title, description: regMeta.description }),
  breadcrumbList(regMeta.path, regCrumbs),
);

/** Launch version (no online form). Section order follows 02 Content.md. */
export default function PatientRegistrationPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="reg-title"
        label="Patient registration"
        content={regHero}
        crumbs={regCrumbs}
        strong={[2, 3]}
        track="reg"
        aside={<Clipboard />}
      />
      <GettingForms />
      <DetailCards />
      <PrivacyBanner />
      <ClosingCta id="reg-cta-title" content={regCta} track="reg_final" />
    </>
  );
}
