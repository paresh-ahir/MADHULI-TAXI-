export const site = {
  name: "Madhuli Taxi",
  legalName: "Madhuli Taxi Services",
  tagline: "Taxi service in Somnath",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://madhulitaxi.com",
  phoneDisplay: "+91 81402 04231",
  phoneTel: "+918140204231",
  phoneRaw: "8140204231",
  whatsapp: "918140204231",
  city: "Somnath",
  region: "Gir Somnath, Gujarat",
  pin: "362268",
  geo: { lat: 20.888, lng: 70.4012 },
  hours: "Open 24/7",
  googleUrl: "https://maps.google.com/?cid=11367502158257908346",
  googleRating: "5.0",
  googleReviewCount: 15,
};

export const googleReviews = [
  "Awesome experience, really reasonable price and friendly price.",
  "Very good experience, skilled driver, management on time.",
  "Best taxi service airport pickup and drop.",
];

export function waLink(text) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const defaultWaText =
  "Hello Madhuli Taxi, I want a cab from Somnath. Please share the fare and availability.";
