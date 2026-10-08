import { LeaveReview, NewPatientsBanner, RecentReviews, ReviewDeck } from "@/components/sections/reviews/ReviewsPage";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { reviewsCrumbs, reviewsCta, reviewsHero, reviewsMeta } from "@/content/pages/reviews";
import { breadcrumbList, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(reviewsMeta);

/** Handoff 3a: plain WebPage about the practice + breadcrumb. No Review or AggregateRating anywhere. */
const schema = graph(
  innerPage({ type: "WebPage", path: reviewsMeta.path, name: reviewsMeta.title, description: reviewsMeta.description }),
  breadcrumbList(reviewsMeta.path, reviewsCrumbs),
);

/** Section order follows 02 Content.md. */
export default function PatientReviewsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="reviews-title"
        label="Patient reviews"
        content={reviewsHero}
        crumbs={reviewsCrumbs}
        strong={[0, 1, 2, 3, 4]}
        track="reviews"
        aside={<ReviewDeck />}
      />
      <RecentReviews />
      <LeaveReview />
      <NewPatientsBanner />
      <ClosingCta id="reviews-cta-title" content={reviewsCta} track="reviews_final" />
    </>
  );
}
