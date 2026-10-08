import { GuideShelf, GuideStack, LatestGuides } from "@/components/sections/patient/Education";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { eduCrumbs, eduCta, eduHero, eduItemList, eduMeta } from "@/content/pages/patient/education";
import { breadcrumbList, graph, innerPage, pageItemList } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(eduMeta);

/** Handoff 3a: CollectionPage + breadcrumb + ItemList of the static guide links. */
const schema = graph(
  innerPage({
    type: "CollectionPage",
    path: eduMeta.path,
    name: eduMeta.title,
    description: eduMeta.description,
    mainEntity: { "@id": `${absoluteUrl(eduMeta.path)}#itemlist` },
  }),
  breadcrumbList(eduMeta.path, eduCrumbs),
  pageItemList(eduMeta.path, eduItemList),
);

/** Section order follows 02 Content.md. */
export default function PatientEducationPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="edu-title"
        label="Patient education"
        content={eduHero}
        crumbs={eduCrumbs}
        strong={[0, 1]}
        track="edu"
        aside={<GuideStack />}
      />
      <LatestGuides />
      <GuideShelf />
      <ClosingCta id="edu-cta-title" content={eduCta} track="edu_final" />
    </>
  );
}
