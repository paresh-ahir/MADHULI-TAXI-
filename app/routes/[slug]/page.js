import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { getRoute, relatedRoutes, routes } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return routes.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = getRoute(params.slug);
  if (!item) return {};
  const title = `${item.from} to ${item.to} taxi`;
  const description = `${item.intro} About ${item.km} km and ${item.time}. Madhuli Taxi, Somnath — ${site.phoneDisplay}.`;
  return { title, description, alternates: { canonical: `/routes/${item.slug}` }, openGraph: { title, description, images: [item.image] } };
}

export default function RoutePage({ params }) {
  const item = getRoute(params.slug);
  if (!item) notFound();
  const more = relatedRoutes(item.slug);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${item.from} to ${item.to} taxi`,
    provider: { "@type": "TaxiService", name: site.legalName, telephone: site.phoneTel },
    areaServed: item.from + ", " + item.to,
    description: item.intro,
  };
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <JsonLd data={ld} />
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs"><Link href="/">Home</Link> / {item.from} to {item.to}</div>
          <h1>{item.from} to {item.to} taxi</h1>
          <p className="lede">{item.intro}</p>
        </div>
        <div className="split" style={{ marginTop: 20 }}>
          <div>
            <img src={item.image} alt={`${item.from} to ${item.to} cab`} style={{ width: "100%", borderRadius: 24, aspectRatio: "16/10", objectFit: "cover" }} />
            <div className="meta" style={{ marginTop: 14 }}>
              <span>About {item.km} km</span>
              <span>{item.time}</span>
              <span>AC cab</span>
            </div>
            <div className="prose" style={{ marginTop: 12 }}>
              <p>Madhuli Taxi runs this road from the Somnath desk. Share the date, the pickup point, and the group size. The enquiry is saved, then WhatsApp opens with those details so the desk can confirm the car.</p>
              <p>{item.km < 30 ? "This hop stays inside Somnath and Veraval, so tell us the hotel and the train or aarti time." : "Tell us if you want a one-way drop or a driver who waits. Stops such as tea, a temple, or a station should be in the first message."}</p>
            </div>
            <h2 style={{ fontSize: 28, margin: "22px 0 8px" }}>Nearby routes</h2>
            <ul>{more.map((route) => <li key={route.slug}><Link href={`/routes/${route.slug}`}>{route.from} to {route.to} taxi</Link></li>)}</ul>
          </div>
          <Suspense fallback={null}>
            <BookingForm heading="Ask for this route" preset={{ pickup: item.from, destination: item.to }} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
