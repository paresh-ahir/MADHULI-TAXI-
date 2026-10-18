"use client";

import { useEffect, useState } from "react";

const statuses = ["new", "contacted", "confirmed", "closed"];

export default function InquiryBoard({ compact = false }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/inquiries");
    if (!res.ok) {
      setError("Could not load enquiries.");
      return;
    }
    setItems(await res.json());
  }

  useEffect(() => { load(); }, []);

  async function update(id, status) {
    await fetch(`/api/inquiries/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    load();
  }

  async function remove(id) {
    if (!confirm("Remove this enquiry?")) return;
    await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
    load();
  }

  const rows = compact ? items.slice(0, 6) : items;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="white-card" style={{ padding: 0 }}>
      <div className="table-wrap" style={{ border: 0 }}>
        <table>
          <thead>
            <tr>
              <th>When</th><th>Guest</th><th>Route</th><th>Vehicle</th><th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? <tr><td colSpan="6">No enquiries yet. They will appear here when someone uses the booking form.</td></tr> : null}
            {rows.map((item) => (
              <tr key={item.id}>
                <td>{new Date(item.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}<div className="muted">{item.date} {item.time}</div></td>
                <td><b>{item.name}</b><div><a href={`tel:+91${item.phone}`}>{item.phone}</a></div></td>
                <td>{item.pickup} → {item.destination}{item.note ? <div className="muted">{item.note}</div> : null}</td>
                <td>{item.vehicle || "Suggest"}</td>
                <td>
                  <select className={`status ${item.status}`} value={item.status} onChange={(e) => update(item.id, e.target.value)} aria-label={`Status for ${item.name}`}>
                    {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                  </select>
                </td>
                <td>{compact ? null : <button className="btn-line" type="button" onClick={() => remove(item.id)}>Delete</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
