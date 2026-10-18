"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { destinations, routes } from "@/lib/content";
import { site } from "@/lib/site";

export default function Footer() {
  const path = usePathname();
  if (path.startsWith("/admin")) return null;
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <Logo light />
          <p className="muted" style={{ color: "#c8c2ba", marginTop: 12, maxWidth: 320 }}>
            {site.legalName} runs AC cabs from Somnath for darshan, Diu, Gir, Dwarka, and the longer Gujarat roads.
          </p>
          <p style={{ marginTop: 12 }}><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></p>
          <p>WhatsApp {site.phoneDisplay}</p>
          <p>{site.city}, Gujarat {site.pin}</p>
          <p style={{ marginTop: 8 }}><a href={site.googleUrl} target="_blank" rel="noreferrer">{site.googleRating} · {site.googleReviewCount} Google reviews</a></p>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li><Link href="/fleet">Fleet</Link></li>
            <li><Link href="/blog">Taxi guides</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>From Somnath</h3>
          <ul>
            {destinations.slice(2, 8).map((item) => (
              <li key={item.slug}><Link href={`/destinations/${item.slug}`}>{item.name} taxi</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Popular routes</h3>
          <ul>
            {routes.slice(0, 6).map((item) => (
              <li key={item.slug}><Link href={`/routes/${item.slug}`}>{item.from} to {item.to}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} {site.legalName}. Somnath, Gujarat.</span>
        <span>Call or WhatsApp {site.phoneDisplay}</span>
      </div>
    </footer>
  );
}
