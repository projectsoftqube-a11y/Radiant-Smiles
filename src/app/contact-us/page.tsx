import { ContactCard, ContactDirections, ContactHours, ContactNotes, ContactRequest } from "@/components/sections/contact/Contact";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { contactCrumbs, contactCta, contactHero, contactMeta } from "@/content/pages/contact";
import { breadcrumbList, dentistContact, graph, ids, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(contactMeta);

/**
 * Handoff 3a: ContactPage + breadcrumb + a short Dentist node (same @id as the home
 * page, so they merge) with the visible NAP, hours and an appointments ContactPoint.
 */
const schema = graph(
  innerPage({
    type: "ContactPage",
    path: contactMeta.path,
    name: contactMeta.title,
    description: contactMeta.description,
    mainEntity: { "@id": ids.dentist },
  }),
  breadcrumbList(contactMeta.path, contactCrumbs),
  dentistContact(),
);

/** Section order follows 02 Content.md. */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="contact-title"
        label="Contact"
        content={contactHero}
        crumbs={contactCrumbs}
        strong={[0, 1, 2, 3]}
        track="contact"
        aside={<ContactCard />}
      />
      <ContactRequest />
      <ContactHours />
      <ContactDirections />
      <ContactNotes />
      <ClosingCta id="contact-cta-title" content={contactCta} track="contact_final" />
    </>
  );
}
