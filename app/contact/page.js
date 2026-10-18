import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Madhuli Taxi Somnath",
  description: "Call or WhatsApp Madhuli Taxi in Somnath on 8140204231, or send a ride enquiry. The message reaches the admin desk.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap split">
        <div>
          <div className="page-hero">
            <h1>Tell the Somnath desk the route.</h1>
            <p className="lede">The form saves your enquiry for the Madhuli team. Call {site.phoneDisplay} if the car is for today.</p>
          </div>
          <Suspense fallback={<div className="book-card">Loading…</div>}>
            <BookingForm />
          </Suspense>
        </div>
        <div>
          <iframe className="map" title="Madhuli Taxi Service on Google Maps" src="https://maps.google.com/maps?q=MADHULI%20TAXI%20SERVICE%20Somnath&z=14&output=embed" />
          <div className="info-card pad" style={{ marginTop: 14 }}>
            <h2 style={{ fontSize: 28 }}>Madhuli Taxi Services</h2>
            <p>{site.googleRating} on Google · {site.googleReviewCount} reviews</p>
            <p>Somnath, {site.region} {site.pin}</p>
            <p style={{ marginTop: 8 }}><a href={site.googleUrl} target="_blank" rel="noreferrer">Open the Google listing</a></p>
            <p style={{ marginTop: 8 }}><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></p>
            <p>WhatsApp {site.phoneDisplay}</p>
            <p>{site.hours}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
