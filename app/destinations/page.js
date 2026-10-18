import Link from "next/link";
import { destinations } from "@/lib/content";

export const metadata = {
  title: "Taxi destinations from Somnath",
  description: "Cabs from Somnath to Diu, Dwarka, Gir, Junagadh, Porbandar, Rajkot, Ahmedabad and Kutch with Madhuli Taxi.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs">Home / Destinations</div>
          <h1>Where the Somnath cab goes.</h1>
          <p className="lede">Distances are road estimates from Somnath. The fare is confirmed for your date and car.</p>
        </div>
        <div className="card-grid" style={{ marginTop: 22 }}>
          {destinations.map((item) => (
            <Link key={item.slug} href={`/destinations/${item.slug}`} className="place-card">
              <img src={item.image} alt={`${item.name} taxi from Somnath`} />
              <div className="pad">
                <div className="km">{item.region} · {item.km ? `${item.km} km` : "Local"}</div>
                <h2 style={{ fontSize: 30, margin: "6px 0" }}>{item.name}</h2>
                <p>{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
