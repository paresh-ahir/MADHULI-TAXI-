"use client";

import { useEffect, useState } from "react";

const blank = { name: "", category: "Economy", body: "Hatchback", seats: "3+1", luggage: "2 small bags", description: "", tags: "", image: "", active: true };

export default function CarManager() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function load() {
    const res = await fetch("/api/cars");
    if (res.ok) setCars(await res.json());
  }
  useEffect(() => { load(); }, []);

  function edit(car) {
    setEditing(car.id);
    setForm({ ...car, tags: (car.tags || []).join(", "), active: car.active !== false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: data });
    const json = await res.json();
    setBusy(false);
    if (!res.ok) { setError(json.error || "Upload failed."); return; }
    setForm((prev) => ({ ...prev, image: json.url }));
  }

  async function save(event) {
    event.preventDefault();
    setError("");
    const payload = {
      ...form,
      tags: String(form.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean),
    };
    const res = await fetch(editing ? `/api/cars/${editing}` : "/api/cars", {
      method: editing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) { setError(json.error || "Could not save the car."); return; }
    setForm(blank);
    setEditing(null);
    load();
  }

  async function remove(id) {
    if (!confirm("Remove this car from the fleet?")) return;
    await fetch(`/api/cars/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="stack">
      <form className="white-card car-form" onSubmit={save}>
        <h2 style={{ gridColumn: "1 / -1", fontFamily: "inherit", fontSize: 22 }}>{editing ? "Edit car" : "Add a car"}</h2>
        <label className="field"><span>Name</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Maruti Ertiga" /></label>
        <label className="field"><span>Category label</span><input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Family" /></label>
        <label className="field"><span>Body</span><input value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="MPV" /></label>
        <label className="field"><span>Seats</span><input value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })} placeholder="6+1" /></label>
        <label className="field"><span>Luggage</span><input value={form.luggage} onChange={(e) => setForm({ ...form, luggage: e.target.value })} /></label>
        <label className="field" style={{ gridColumn: "1 / -1" }}><span>Description</span><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label>
        <label className="field"><span>Tags, comma separated</span><input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Family tours, Weekend" /></label>
        <label className="field"><span>Photo</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={onFile} /></label>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}><input type="checkbox" checked={form.active !== false} onChange={(e) => setForm({ ...form, active: e.target.checked })} /> Show on website</label>
        {form.image ? <img src={form.image} alt="" style={{ width: 180, height: 110, objectFit: "cover", borderRadius: 12 }} /> : null}
        {error ? <p className="error" style={{ gridColumn: "1 / -1" }}>{error}</p> : null}
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" disabled={busy} type="submit">{busy ? "Uploading…" : editing ? "Save car" : "Add car"}</button>
          {editing ? <button className="btn-line" type="button" onClick={() => { setEditing(null); setForm(blank); }}>Cancel</button> : null}
        </div>
      </form>
      <div className="fleet-grid">
        {cars.map((car) => (
          <article key={car.id} className="white-card" style={{ padding: 0, overflow: "hidden" }}>
            <img src={car.image} alt="" style={{ height: 140, width: "100%", objectFit: "cover" }} />
            <div style={{ padding: 12 }}>
              <b>{car.name}</b>
              <div className="muted">{car.seats} seats · {car.active === false ? "Hidden" : "Live"}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button className="btn-line" type="button" onClick={() => edit(car)}>Edit</button>
                <button className="btn-line" type="button" onClick={() => remove(car.id)}>Delete</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
