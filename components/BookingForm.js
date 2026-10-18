"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, waLink } from "@/lib/site";

const empty = { name: "", phone: "", pickup: "Somnath", destination: "", date: "", time: "", vehicle: "", note: "", company: "" };

export default function BookingForm({ heading = "Plan your ride", preset = {} }) {
  const params = useSearchParams();
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({ ...empty, ...preset, vehicle: params.get("vehicle") || preset.vehicle || "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const vehicle = params.get("vehicle");
    const destination = params.get("destination");
    if (vehicle || destination) {
      setForm((prev) => ({ ...prev, vehicle: vehicle || prev.vehicle, destination: destination || prev.destination }));
    }
  }, [params]);

  useEffect(() => {
    fetch("/api/cars").then((res) => res.json()).then(setCars).catch(() => setCars([]));
  }, []);

  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send the enquiry.");
      const text = [
        "*NEW TAXI INQUIRY — MADHULI TAXI*",
        "Somnath desk",
        "",
        `Name: ${form.name}`,
        `Mobile: ${form.phone}`,
        `Pickup: ${form.pickup}`,
        `Destination: ${form.destination}`,
        `Travel date: ${form.date || "-"}`,
        `Pickup time: ${form.time || "-"}`,
        `Vehicle: ${form.vehicle || "Please suggest"}`,
        `Note: ${form.note || "-"}`,
      ].join("\n");
      window.location.href = waLink(text);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="book-card" id="book" onSubmit={submit}>
      <h2>{heading}</h2>
      <p className="live">● Replies from the Somnath desk</p>
      <div className="form-grid">
        <label className="field"><span>Pickup</span><input required value={form.pickup} onChange={(e) => set("pickup", e.target.value)} placeholder="Somnath hotel or temple" /></label>
        <label className="field"><span>Destination</span><input required value={form.destination} onChange={(e) => set("destination", e.target.value)} placeholder="Dwarka, Diu, Gir..." /></label>
        <label className="field"><span>Travel date</span><input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} /></label>
        <label className="field"><span>Pickup time</span><input type="time" value={form.time} onChange={(e) => set("time", e.target.value)} /></label>
        <label className="field"><span>Full name</span><input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" /></label>
        <label className="field"><span>Mobile</span><input required inputMode="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="10-digit mobile" /></label>
        <label className="field full"><span>Vehicle</span>
          <select value={form.vehicle} onChange={(e) => set("vehicle", e.target.value)}>
            <option value="">Suggest a car for me</option>
            {cars.map((car) => <option key={car.id} value={car.name}>{car.name} · {car.seats} seats</option>)}
          </select>
        </label>
        <label className="field full"><span>Note</span><textarea value={form.note} onChange={(e) => set("note", e.target.value)} placeholder="People, luggage, aarti time, flight number" /></label>
      </div>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.company} onChange={(e) => set("company", e.target.value)} aria-hidden="true" />
      <button className="btn" type="submit" disabled={busy}>{busy ? "Opening WhatsApp..." : "Submit enquiry"}</button>
      {error ? <p className="error">{error}</p> : null}
      <div className="form-note"><span>100% secure — no spam</span><a href={`tel:${site.phoneTel}`}>Or call {site.phoneDisplay}</a></div>
    </form>
  );
}
