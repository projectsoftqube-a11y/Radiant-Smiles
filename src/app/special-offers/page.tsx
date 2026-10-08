import { DiscountOffers, NewPatientSpecial, NoInsurance, OfferBoard, OfferTerms } from "@/components/sections/offers/OffersPage";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { offersCrumbs, offersCta, offersFaqs, offersHero, offersMeta } from "@/content/pages/offers";
import { breadcrumbList, faqPage, graph, innerPage, offerList, specialOffers } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(offersMeta);

const OFFER_KEYS = ["new-patient", "implants", "invisalign", "whitening", "membership"];

/** Handoff 3a: WebPage with an ItemList of the five Offers (prices from site.ts) + breadcrumb. */
const schema = graph(
  innerPage({
    type: "WebPage",
    path: offersMeta.path,
    name: offersMeta.title,
    description: offersMeta.description,
    mainEntity: offerList(offersMeta.path, OFFER_KEYS),
  }),
  breadcrumbList(offersMeta.path, offersCrumbs),
  specialOffers(offersMeta.path),
);

/** Handoff 3b: FAQPage, identical to the visible questions. */
const faqSchema = graph(faqPage({ path: offersMeta.path, items: offersFaqs.items }));

/** Section order follows 02 Content.md. */
export default function SpecialOffersPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <PageHero
        id="offers-title"
        label="Special offers"
        content={offersHero}
        crumbs={offersCrumbs}
        strong={[0, 1]}
        track="offers"
        aside={<OfferBoard />}
      />
      <NewPatientSpecial />
      <DiscountOffers />
      <NoInsurance />
      <OfferTerms />
      <FaqAccordion id="offers-faq-title" faqs={offersFaqs} track="offers" />
      <ClosingCta id="offers-cta-title" content={offersCta} track="offers_final" />
    </>
  );
}
