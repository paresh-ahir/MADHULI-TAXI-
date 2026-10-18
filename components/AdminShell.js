"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  ["/admin", "Overview"],
  ["/admin/inquiries", "Enquiries"],
  ["/admin/cars", "Cars"],
];

export default function AdminShell({ children }) {
  const path = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-body">
      <div className="admin-shell">
        <aside className="side">
          <strong style={{ letterSpacing: ".14em" }}>MADHULI</strong>
          <div className="muted" style={{ fontSize: 13 }}>Somnath desk</div>
          <nav>
            {links.map(([href, label]) => (
              <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>
            ))}
            <a href="/" target="_blank" rel="noreferrer">View website</a>
            <button type="button" onClick={logout}>Log out</button>
          </nav>
        </aside>
        <div className="admin-main">{children}</div>
      </div>
    </div>
  );
}
