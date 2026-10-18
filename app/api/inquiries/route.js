import { NextResponse } from "next/server";
import { readSession } from "@/lib/auth";
import { insertInquiry, readInquiries } from "@/lib/store";

function phoneDigits(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export async function GET() {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const items = await readInquiries();
  return NextResponse.json(items);
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  if (body.company) return NextResponse.json({ ok: true });
  const name = String(body.name || "").trim().slice(0, 80);
  const phone = phoneDigits(body.phone);
  const pickup = String(body.pickup || "").trim().slice(0, 120);
  const destination = String(body.destination || "").trim().slice(0, 120);
  if (!name || !/^[6-9]\d{9}$/.test(phone) || !pickup || !destination) {
    return NextResponse.json({ error: "Name, a 10-digit mobile, pickup, and destination are required." }, { status: 400 });
  }
  const item = {
    id: `inq_${Date.now().toString(36)}`,
    name,
    phone,
    pickup,
    destination,
    date: String(body.date || "").slice(0, 20),
    time: String(body.time || "").slice(0, 10),
    vehicle: String(body.vehicle || "").slice(0, 80),
    note: String(body.note || "").trim().slice(0, 600),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  await insertInquiry(item);
  return NextResponse.json({ ok: true, id: item.id });
}
