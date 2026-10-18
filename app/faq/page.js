import { faqs } from "@/lib/content";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Somnath taxi FAQ",
  description: "Booking, fares, one-way cabs, Veraval station pickup, Gir permits and night taxis with Madhuli Taxi in Somnath.",
  alternates: { canonical: "/faq" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <JsonLd data={faqLd} />
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="page-hero">
          <h1>Questions the desk hears every day.</h1>
        </div>
        <div className="faq" style={{ marginTop: 18 }}>
          {faqs.map((item) => (
            <details key={item.q} open>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
