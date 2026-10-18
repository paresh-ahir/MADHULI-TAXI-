import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { destinations, getDestination, routes } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = getDestination(params.slug);
  if (!item) return {};
  const title = item.slug === "somnath" ? "Taxi in Somnath" : `${item.name} taxi from Somnath`;
  return {
    title,
    description: `${item.summary} Book Madhuli Taxi on ${site.phoneDisplay}.`,
    alternates: { canonical: `/destinations/${item.slug}` },
    openGraph: { images: [item.image], title, description: item.summary },
  };
}

export default function DestinationPage({ params }) {
  const item = getDestination(params.slug);
  if (!item) notFound();
  const linked = routes.filter((route) => route.to === item.name || route.from === item.name).slice(0, 4);
  const ld = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: item.name,
    description: item.summary,
    image: `${site.url}${item.image}`,
    touristType: "Pilgrims and families",
  };
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <JsonLd data={ld} />
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs"><Link href="/">Home</Link> / <Link href="/destinations">Destinations</Link> / {item.name}</div>
          <h1>{item.slug === "somnath" ? "Taxi in Somnath" : `${item.name} taxi from Somnath`}</h1>
          <p className="lede">{item.km ? `About ${item.km} km · ${item.time}. ` : ""}{item.summary}</p>
        </div>
        <div className="split" style={{ marginTop: 22 }}>
          <div>
            <img src={item.image} alt={item.title} style={{ borderRadius: 24, width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
            <div className="prose" style={{ marginTop: 16 }}>
              {item.paragraphs.map((para) => <p key={para}>{para}</p>)}
            </div>
            <div className="spot-list" style={{ marginTop: 14 }}>{item.spots.map((spot) => <span key={spot}>{spot}</span>)}</div>
            <div style={{ marginTop: 18 }}>
              <h2 style={{ fontSize: 28, marginBottom: 8 }}>Routes through {item.name}</h2>
              <ul>{linked.map((route) => <li key={route.slug}><Link href={`/routes/${route.slug}`}>{route.from} to {route.to} taxi</Link></li>)}</ul>
            </div>
          </div>
          <Suspense fallback={null}>
            <BookingForm heading={`Cab to ${item.name}`} preset={{ destination: item.name, pickup: item.slug === "somnath" ? "Somnath" : "Somnath" }} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
