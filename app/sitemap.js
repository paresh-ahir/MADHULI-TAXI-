import { blogs } from "@/lib/blogs";
import { destinations, routes, tours } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const staticPaths = ["", "/destinations", "/tours", "/services", "/fleet", "/blog", "/about", "/faq", "/contact"];
  const pages = [
    ...staticPaths.map((path) => ({ url: `${site.url}${path || "/"}`, lastModified: now, changeFrequency: "weekly", priority: path === "" ? 1 : 0.8 })),
    ...destinations.map((item) => ({ url: `${site.url}/destinations/${item.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
    ...routes.map((item) => ({ url: `${site.url}/routes/${item.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
    ...tours.map((item) => ({ url: `${site.url}/tours/${item.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
    ...blogs.map((item) => ({ url: `${site.url}/blog/${item.slug}`, lastModified: item.date, changeFrequency: "monthly", priority: 0.6 })),
  ];
  return pages;
}
