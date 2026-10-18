import Link from "next/link";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Somnath taxi guides",
  description: "100 taxi guides from Madhuli Taxi in Somnath: timing, cars, darshan, Diu, Gir, Dwarka, airports and family travel. No rates on the page. Enquire on WhatsApp.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const categories = [...new Set(blogs.map((item) => item.category))];
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <div className="crumbs">Home / Guides</div>
          <h1>Somnath taxi guides.</h1>
          <p className="lede">{blogs.length} notes from the Madhuli desk: when to leave, which car fits, and how a temple day actually runs. Rates are not listed. The enquiry opens WhatsApp.</p>
        </div>
        {categories.map((category) => (
          <section key={category} style={{ marginTop: 28 }}>
            <h2 style={{ fontSize: 32, marginBottom: 12 }}>{category}</h2>
            <div className="blog-list">
              {blogs.filter((item) => item.category === category).map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="blog-item">
                  <img src={item.image} alt="" />
                  <div className="pad">
                    <div className="km">{item.place} · {item.date}</div>
                    <h3 style={{ fontSize: 26, margin: "6px 0" }}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
