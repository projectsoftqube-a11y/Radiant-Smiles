import { Areas } from "@/components/sections/home/Areas";
import { Doctors } from "@/components/sections/home/Doctors";
import { Emergency } from "@/components/sections/home/Emergency";
import { Family } from "@/components/sections/home/Family";
import { Faq } from "@/components/sections/home/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Hours } from "@/components/sections/home/Hours";
import { Insurance } from "@/components/sections/home/Insurance";
import { Membership } from "@/components/sections/home/Membership";
import { Offers } from "@/components/sections/home/Offers";
import { Reviews } from "@/components/sections/home/Reviews";
import { Services } from "@/components/sections/home/Services";
import { Technology } from "@/components/sections/home/Technology";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeAreas, homeFaqs, homeMeta, homeServices } from "@/content/pages/home";
import { dentistEntity, dentistPeople, faqPage, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(homeMeta);

/** Handoff 3a: the only page that carries the full Dentist entity. */
const coreSchema = graph(
  dentistEntity({ areaServed: homeAreas.schemaAreas, serviceGroups: homeServices.groups }),
  dentistPeople(),
  websiteEntity(),
  webPageEntity({ path: homeMeta.path, name: homeMeta.title, description: homeMeta.description }),
);

/** Handoff 3b: FAQPage, identical to the visible questions and answers. */
const faqSchema = graph(faqPage({ path: homeMeta.path, items: homeFaqs.items }));

/** Section order follows 02 Content.md. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <Family />
      <Hours />
      <Offers />
      <Services />
      <Membership />
      <Insurance />
      <Doctors />
      <Technology />
      <Emergency />
      <Reviews />
      <Areas />
      <Faq />
      <FinalCta />
    </>
  );
}
