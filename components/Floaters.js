"use client";

import { usePathname } from "next/navigation";
import { defaultWaText, site, waLink } from "@/lib/site";

export default function Floaters() {
  const path = usePathname();
  if (path.startsWith("/admin")) return null;
  return (
    <div className="floaters">
      <a className="wa" href={waLink(defaultWaText)} aria-label="Chat on WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.18c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.32.02.51-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.13-.28.28-.12.55.16.26.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.18 1.35.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.54.73 1.8.86.26.13.44.2.5.31.07.11.07.66-.17 1.34Z"/></svg>
      </a>
      <a className="call" href={`tel:${site.phoneTel}`} aria-label={`Call Madhuli Taxi at ${site.phoneDisplay}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1L6.6 10.8Z"/></svg>
      </a>
    </div>
  );
}
