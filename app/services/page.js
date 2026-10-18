import { services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata = {
  title: "Somnath cab services",
  description: "Somnath taxi services: local darshan, outstation one way, round trips, airport pickup, pilgrimage cabs and group travellers. Madhuli Taxi, 8140204231.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>Services from the Somnath desk.</h1>
          <p className="lede">One number covers the temple loop and the highway. Call {site.phoneDisplay}.</p>
        </div>
        <div className="card-grid" style={{ marginTop: 22 }}>
          {services.map((item) => (
            <article key={item.title} className="info-card pad">
              <h2 style={{ fontSize: 30, marginBottom: 8 }}>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
