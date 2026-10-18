import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="wrap">
        <h1>That page is not on the route.</h1>
        <p className="lede" style={{ margin: "12px 0 18px" }}>Try the Somnath destinations, or send the desk a message.</p>
        <Link className="btn" href="/">Back home</Link>
      </div>
    </main>
  );
}
