import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { blogs, getBlog, relatedBlogs } from "@/lib/blogs";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogs.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlog(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", images: [post.image] },
  };
}

export default function BlogPost({ params }) {
  const post = getBlog(params.slug);
  if (!post) notFound();
  const more = relatedBlogs(post.slug);
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <JsonLd data={ld} />
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="page-hero">
          <div className="crumbs"><Link href="/blog">Guides</Link> / {post.category}</div>
          <h1>{post.title}</h1>
          <p className="lede">{post.description}</p>
        </div>
        <img src={post.image} alt="" style={{ width: "100%", borderRadius: 24, aspectRatio: "16/9", objectFit: "cover", marginTop: 16 }} />
        <div className="prose" style={{ marginTop: 18 }}>
          {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="spot-list" style={{ marginTop: 16 }}>
          <Link href="/contact">Send an enquiry</Link>
          <Link href={`/destinations/${post.dest}`}>{post.place} taxi</Link>
          {post.route ? <Link href={`/routes/${post.route}`}>Route page</Link> : null}
          <Link href="/fleet">See the fleet</Link>
        </div>
        <h2 style={{ fontSize: 32, margin: "28px 0 12px" }}>More from the desk</h2>
        <ul>
          {more.map((item) => (
            <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
