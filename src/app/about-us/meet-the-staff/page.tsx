import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { StaffHeroCards, StaffRoles, StaffTeam } from "@/components/sections/staff/Staff";
import { JsonLd } from "@/components/ui/JsonLd";
import { staffCrumbs, staffCta, staffHero, staffMeta } from "@/content/pages/staff";
import { breadcrumbList, graph, ids, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(staffMeta);

/** Handoff 3a: AboutPage + breadcrumb. No staff Person nodes until real names are published. */
const schema = graph(
  innerPage({
    type: "AboutPage",
    path: staffMeta.path,
    name: staffMeta.title,
    description: staffMeta.description,
    mainEntity: { "@id": ids.dentist },
  }),
  breadcrumbList(staffMeta.path, staffCrumbs),
);

/** Section order follows 02 Content.md. */
export default function MeetTheStaffPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="staff-title"
        label="Meet the staff"
        content={staffHero}
        crumbs={staffCrumbs}
        strong={[2, 3, 4, 5]}
        track="staff"
        aside={<StaffHeroCards />}
      />
      <StaffTeam />
      <StaffRoles />
      <ClosingCta id="staff-cta-title" content={staffCta} track="staff_final" />
    </>
  );
}
