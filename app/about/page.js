import { site } from "@/lib/site";

export const metadata = {
  title: "About Madhuli Taxi Somnath",
  description: "Madhuli Taxi Services is a Somnath cab desk for darshan, Diu, Gir, Dwarka and outstation Gujarat. Phone and WhatsApp 8140204231.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap split">
        <div className="prose">
          <span className="eyebrow">About</span>
          <h1>A taxi desk that lives in Somnath.</h1>
          <p>Madhuli Taxi Services keeps its cars in Somnath, Gir Somnath. Guests call when they land at Veraval, when the aarti time changes, or when the family decides Dwarka should happen tomorrow.</p>
          <p>The work is simple. You send the route. We name the car and the fare, including anything extra, before the driver is assigned. The same phone number, {site.phoneDisplay}, is the call line and the WhatsApp line, day and night.</p>
          <p>Fleet runs from a Swift for a couple up to an Urbania for a full group. Drivers on the pilgrimage roads already know the temple lanes, the Gir gate, and the Porbandar halt that makes a Dwarka day kinder.</p>
          <p>We are not a marketplace of unknown cars. An enquiry on this website reaches the Madhuli desk, and a person replies.</p>
          <p>On Google, Madhuli Taxi Service in Somnath is listed at {site.googleRating} from {site.googleReviewCount} reviews. <a href={site.googleUrl} target="_blank" rel="noreferrer">Read them on the listing.</a></p>
        </div>
        <img src="/images/place-somnath.jpg" alt="Somnath shore, where Madhuli Taxi is based" style={{ borderRadius: 28, width: "100%", objectFit: "cover", minHeight: 360 }} />
      </div>
    </main>
  );
}
