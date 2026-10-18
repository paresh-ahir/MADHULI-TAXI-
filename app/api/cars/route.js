import { NextResponse } from "next/server";
import { readSession } from "@/lib/auth";
import { insertCar, readCars } from "@/lib/store";

function slugify(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40);
}

function publicCar(car) {
  const rest = { ...car };
  delete rest.pricePerKm;
  return rest;
}

export async function GET() {
  const session = await readSession();
  const cars = (await readCars()).map(publicCar);
  return NextResponse.json(session ? cars : cars.filter((car) => car.active !== false));
}

export async function POST(request) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim().slice(0, 80);
  if (!name) {
    return NextResponse.json({ error: "Car name is required." }, { status: 400 });
  }
  const cars = await readCars();
  let id = slugify(body.id || name) || `car-${Date.now().toString(36)}`;
  if (cars.some((car) => car.id === id)) id = `${id}-${Date.now().toString(36).slice(-4)}`;
  const car = {
    id,
    name,
    category: String(body.category || "Fleet").slice(0, 40),
    body: String(body.body || "Cab").slice(0, 40),
    seats: String(body.seats || "").slice(0, 20),
    luggage: String(body.luggage || "").slice(0, 40),
    description: String(body.description || "").trim().slice(0, 400),
    image: String(body.image || "/images/car-swift.jpg").slice(0, 200),
    tags: Array.isArray(body.tags) ? body.tags.map((tag) => String(tag).slice(0, 30)).slice(0, 6) : [],
    active: body.active !== false,
  };
  await insertCar(car);
  return NextResponse.json(car);
}
