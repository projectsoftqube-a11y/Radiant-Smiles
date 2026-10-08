import { AboutApproach, AboutDentists, AboutGlance, AboutBento, AboutStaff, AboutTechnology, AboutVisit } from "@/components/sections/about/About";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { aboutCrumbs, aboutCta, aboutHero, aboutMeta } from "@/content/pages/about";
import { dentists } from "@/content/site";
import { breadcrumbList, graph, ids, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(aboutMeta);

/** Handoff 3a: AboutPage about the practice (by @id), mentioning both dentists, + breadcrumb. */
const schema = graph(
  innerPage({
    type: "AboutPage",
    path: aboutMeta.path,
    name: aboutMeta.title,
    description: aboutMeta.description,
    mainEntity: { "@id": ids.dentist },
    mentions: [{ "@id": ids.person(dentists.bhalala.path) }, { "@id": ids.person(dentists.gadria.path) }],
  }),
  breadcrumbList(aboutMeta.path, aboutCrumbs),
);

/** Section order follows 02 Content.md. */
export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="about-title"
        label="About us"
        content={aboutHero}
        crumbs={aboutCrumbs}
        strong={[1, 2, 3, 4, 5]}
        track="about"
        aside={<AboutBento />}
      />
      <AboutGlance />
      <AboutApproach />
      <AboutDentists />
      <AboutStaff />
      <AboutTechnology />
      <AboutVisit />
      <ClosingCta id="about-cta-title" content={aboutCta} track="about_final" />
    </>
  );
}
