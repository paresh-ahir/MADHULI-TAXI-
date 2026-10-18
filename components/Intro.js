"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Intro() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (path.startsWith("/admin")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("madhuli_intro")) return;
    setShow(true);
    const timer = setTimeout(() => {
      sessionStorage.setItem("madhuli_intro", "1");
      setShow(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);
  if (!show || path.startsWith("/admin")) return null;
  return (
    <div className="intro" role="status">
      <div>
        <span className="eyebrow">Somnath</span>
        <strong>Madhuli <em>Taxi</em></strong>
        <div className="bar"><i /></div>
      </div>
    </div>
  );
}
