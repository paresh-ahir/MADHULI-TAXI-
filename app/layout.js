import "./globals.css";
import { DM_Sans, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import Intro from "@/components/Intro";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-serif" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Somnath Taxi | Madhuli Taxi Services",
    template: "%s | Madhuli Taxi",
  },
  description: "Somnath taxi from Madhuli Taxi Services. AC cabs for Somnath darshan, Veraval, Diu, Gir, Dwarka, Rajkot and Ahmedabad. Call or WhatsApp 8140204231. Open 24/7.",
  keywords: ["Somnath taxi", "Somnath cab", "taxi in Somnath", "Somnath to Dwarka taxi", "Somnath to Diu taxi", "Veraval taxi", "Madhuli Taxi", "Gir Somnath cab"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Madhuli Taxi",
    title: "Somnath Taxi | Madhuli Taxi Services",
    description: "Somnath taxi from Madhuli Taxi Services. AC cabs for darshan, Diu, Gir and Dwarka. Call or WhatsApp 8140204231.",
    images: [{ url: "/images/hero-somnath.jpg", width: 1200, height: 675, alt: "Somnath temple coast, home of Madhuli Taxi" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero-somnath.jpg"] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const business = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: site.legalName,
  image: `${site.url}/images/hero-somnath.jpg`,
  url: site.url,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Somnath",
    addressRegion: "Gujarat",
    postalCode: site.pin,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: ["Somnath", "Veraval", "Diu", "Dwarka", "Sasan Gir", "Junagadh", "Porbandar", "Rajkot", "Ahmedabad", "Gujarat"],
  openingHours: "Mo-Su 00:00-23:59",
  currenciesAccepted: "INR",
  sameAs: [site.googleUrl],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={business} />
        <Intro />
        <Header />
        {children}
        <Footer />
        <Floaters />
      </body>
    </html>
  );
}
