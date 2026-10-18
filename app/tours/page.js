import Link from "next/link";
import { tours } from "@/lib/content";

export const metadata = {
  title: "Somnath taxi tours",
  description: "Day and multi-day cab tours from Somnath: darshan, Gir, Diu, Dwarka, the Saurashtra circuit and Kutch.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs">Home / Tours</div>
          <h1>Tours the Somnath car can hold.</h1>
          <p className="lede">Same driver, a written plan, and a fare that matches the days you actually need.</p>
        </div>
        <div className="tour-grid" style={{ marginTop: 22 }}>
          {tours.map((tour) => (
            <Link key={tour.slug} href={`/tours/${tour.slug}`} className="tour-card">
              <img src={tour.image} alt={tour.name} />
              <div className="pad">
                <div className="km">{tour.duration} · {tour.distance}</div>
                <h2 style={{ fontSize: 30, margin: "6px 0" }}>{tour.name}</h2>
                <p>{tour.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
