"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InquiryBoard from "@/components/InquiryBoard";

export default function AdminHome() {
  const [inquiries, setInquiries] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/inquiries").then((res) => res.json()).then(setInquiries).catch(() => {});
    fetch("/api/cars").then((res) => res.json()).then(setCars).catch(() => {});
  }, []);

  const count = (status) => inquiries.filter((item) => item.status === status).length;

  return (
    <div>
      <div className="admin-top">
        <div>
          <h1 style={{ fontSize: 36 }}>Desk</h1>
          <p className="muted">New ride enquiries from the website land here.</p>
        </div>
        <Link className="btn" href="/admin/cars">Add a car</Link>
      </div>
      <div className="stats-row">
        <div className="stat"><b>{count("new")}</b><span>New</span></div>
        <div className="stat"><b>{count("contacted")}</b><span>Contacted</span></div>
        <div className="stat"><b>{count("confirmed")}</b><span>Confirmed</span></div>
        <div className="stat"><b>{cars.length}</b><span>Cars</span></div>
      </div>
      <InquiryBoard compact />
    </div>
  );
}
