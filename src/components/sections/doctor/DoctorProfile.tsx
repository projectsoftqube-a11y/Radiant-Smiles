import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import type { DoctorPage } from "@/content/pages/doctors";
import { breadcrumbList, dentistPeople, faqPage, graph, ids, innerPage } from "@/lib/schema";
import { DoctorAbout, DoctorApproach, DoctorEducation, DoctorOutside, DoctorPortrait } from "./Doctor";

/**
 * A dentist's bio page: ProfilePage + breadcrumb + the Person node (handoff 3a) and the
 * FAQPage for the visible questions (3b). Section order follows 02 Content.md.
 */
export function DoctorProfile({ page }: { page: DoctorPage }) {
  const { path } = page.meta;
  const person = dentistPeople({ [page.key]: true }).find((node) => node["@id"] === ids.person(path));
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us/" },
    { name: page.crumbName, path },
  ];
  const schema = graph(
    innerPage({
      type: "ProfilePage",
      path,
      name: page.meta.title,
      description: page.meta.description,
      about: { "@id": ids.person(path) },
      mainEntity: { "@id": ids.person(path) },
    }),
    breadcrumbList(path, crumbs),
    person ? [person] : [],
  );
  const faqSchema = graph(faqPage({ path, items: page.faqs.items }));

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id={`${page.key}-title`}
        label="Your dentist"
        content={page.hero}
        crumbs={crumbs}
        strong={[1, 2]}
        track={page.key}
        aside={<DoctorPortrait page={page} />}
      />
      <DoctorAbout page={page} />
      <DoctorEducation page={page} />
      <DoctorApproach page={page} />
      <DoctorOutside page={page} />
      <FaqAccordion id={`${page.key}-faq-title`} faqs={page.faqs} track={page.key} />
      <ClosingCta id={`${page.key}-cta-title`} content={page.cta} track={`${page.key}_final`} />
    </>
  );
}
