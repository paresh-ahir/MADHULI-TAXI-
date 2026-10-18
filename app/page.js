import Link from "next/link";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import FleetCard from "@/components/FleetCard";
import { destinations, faqs, routes, services, steps, tours } from "@/lib/content";
import { activeCars } from "@/lib/store";
import { googleReviews, site, waLink, defaultWaText } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const cars = await activeCars();
  const loop = [...routes.slice(0, 8), ...routes.slice(0, 8)];
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-copy">
              <span className="eyebrow">Madhuli Taxi · Somnath</span>
              <h1>Taxi in Somnath. <em>The road, handled.</em></h1>
              <p className="lede">AC cabs from the temple town for darshan, Diu, Gir, Dwarka and the longer Gujarat runs. Send the route and the Somnath desk confirms the car on WhatsApp.</p>
              <div className="pills">
                <span>Verified drivers</span>
                <span>AC cars and tempos</span>
                <span>Open 24/7</span>
                <span>Somnath, Gujarat</span>
              </div>
            </div>
            <Suspense fallback={<div className="book-card">Loading the booking desk…</div>}>
              <BookingForm />
            </Suspense>
          </div>
          <div className="hero-photo">
            <img src="/images/hero-somnath.jpg" alt="Somnath temple on the Arabian Sea, the home ground of Madhuli Taxi" />
            <div className="orbit">SOMNATH<br />DIU · GIR<br />DWARKA</div>
            <div className="loc">Somnath, Gir Somnath</div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Popular taxi routes">
        <div className="marquee-label">Popular routes</div>
        <div className="track">
          {loop.map((item, index) => (
            <Link key={`${item.slug}-${index}`} href={`/routes/${item.slug}`}>{item.from} <span>→</span> {item.to}</Link>
          ))}
        </div>
      </section>

      <section className="road">
        <div className="wrap">
          <h2>The coast from Somnath, <em>done properly.</em></h2>
          <div className="stats">
            <div><b>24/7</b><span>Desk</span></div>
            <div><b>{cars.length}</b><span>Fleet types</span></div>
            <div><b>{destinations.length}</b><span>Places we run</span></div>
            <div><b>{site.googleRating}★</b><span>{site.googleReviewCount} Google reviews</span></div>
          </div>
          <div className="road-layout">
            <div className="spine" />
            <div className="hub"><small>Your pickup</small><b>Somnath</b></div>
            <div className="car-dot" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M5 16v2h2v-2H5Zm12 0v2h2v-2h-2ZM6.2 6l-1.5 5H3v2h1l1 6h14l1-6h1v-2h-1.7l-1.5-5H6.2Zm1.3 2h9l1 3H6.5l1-3Z"/></svg>
            </div>
            {services.slice(0, 4).map((item, i) => (
              <article key={item.title} className={`feature ${i % 2 === 0 ? "left" : "right"} ${i < 2 ? "a" : "b"}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="cta-band">
            <div>
              <h3 className="serif" style={{ fontSize: 32 }}>Ready when you are.</h3>
              <p>Call or WhatsApp and the Somnath desk will confirm the cab.</p>
            </div>
            <div className="phones">
              <a className="btn" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              <a className="btn-dark" href={waLink(defaultWaText)}>Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our fleet</span>
              <h2>Pick the car, not just a taxi.</h2>
            </div>
            <p>Every cab is AC. The label on the photo is the car, the seats, and the luggage it can take. The desk confirms the car on WhatsApp.</p>
          </div>
          <div className="fleet-grid">
            {cars.map((car) => <FleetCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Route network</span>
              <h2>Gujarat, from the Somnath desk.</h2>
            </div>
            <Link className="btn-line" href="/destinations">All destinations</Link>
          </div>
          <div className="card-grid">
            {destinations.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/destinations/${item.slug}`} className="place-card">
                <img src={item.image} alt={`${item.name}, a taxi destination from Somnath`} />
                <div className="pad">
                  <div className="km">{item.km ? `${item.km} km · ${item.time}` : item.time}</div>
                  <h3 style={{ fontSize: 28, margin: "6px 0" }}>{item.name}</h3>
                  <p>{item.title}</p>
                  <div className="spot-list">{item.spots.map((spot) => <span key={spot}>{spot}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Tours</span>
              <h2>Days built around the temple.</h2>
            </div>
            <Link className="btn-line" href="/tours">All tours</Link>
          </div>
          <div className="tour-grid">
            {tours.slice(0, 3).map((tour) => (
              <Link key={tour.slug} href={`/tours/${tour.slug}`} className="tour-card">
                <img src={tour.image} alt={tour.name} />
                <div className="pad">
                  <div className="km">{tour.duration}</div>
                  <h3 style={{ fontSize: 28, margin: "6px 0" }}>{tour.name}</h3>
                  <p>{tour.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="steps" style={{ marginTop: 28 }}>
            {steps.map((step) => (
              <article key={step.n} className="step"><b>{step.n}</b><h3 style={{ fontFamily: "inherit", fontSize: 18, margin: "8px 0" }}>{step.title}</h3><p>{step.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Google · {site.googleRating} from {site.googleReviewCount} reviews</span>
              <h2>What riders wrote.</h2>
            </div>
            <a className="btn-line" href={site.googleUrl} target="_blank" rel="noreferrer">See Madhuli on Google</a>
          </div>
          <div className="review-grid">
            {googleReviews.map((text) => (
              <blockquote key={text} className="review-card">
                <div className="stars" aria-label="5 stars">★★★★★</div>
                <p style={{ marginTop: 10 }}>{text}</p>
                <footer className="muted" style={{ marginTop: 12, fontSize: 13 }}>Google review · Madhuli Taxi Service, Somnath</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Questions</span>
            <h2 style={{ fontSize: "clamp(36px,4vw,56px)", margin: "8px 0 16px" }}>Before you call.</h2>
            <div className="faq">
              {faqs.slice(0, 5).map((item) => (
                <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
              ))}
            </div>
            <Link className="btn" href="/faq" style={{ marginTop: 8 }}>Read all FAQ</Link>
          </div>
          <div className="band" style={{ display: "block" }}>
            <h2>Somnath desk, open all night.</h2>
            <p style={{ margin: "10px 0 16px" }}>Same number for the call and the WhatsApp chat.</p>
            <a className="btn" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
