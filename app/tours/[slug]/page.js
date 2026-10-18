import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { getTour, tours } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return tours.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const tour = getTour(params.slug);
  if (!tour) return {};
  return {
    title: tour.name,
    description: `${tour.summary} Duration ${tour.duration}. Book with Madhuli Taxi, Somnath on ${site.phoneDisplay}.`,
    alternates: { canonical: `/tours/${tour.slug}` },
  };
}

export default function TourPage({ params }) {
  const tour = getTour(params.slug);
  if (!tour) notFound();
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs"><Link href="/tours">Tours</Link> / {tour.name}</div>
          <h1>{tour.name}</h1>
          <p className="lede">{tour.duration} · {tour.distance}. {tour.summary}</p>
        </div>
        <div className="split" style={{ marginTop: 18 }}>
          <div>
            <img src={tour.image} alt={tour.name} style={{ width: "100%", borderRadius: 24, aspectRatio: "16/10", objectFit: "cover" }} />
            <div className="prose" style={{ marginTop: 14 }}>{tour.paragraphs.map((para) => <p key={para}>{para}</p>)}</div>
            <div className="spot-list" style={{ marginTop: 12 }}>{tour.stops.map((stop) => <span key={stop}>{stop}</span>)}</div>
          </div>
          <Suspense fallback={null}>
            <BookingForm heading="Plan this tour" preset={{ destination: tour.name }} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
