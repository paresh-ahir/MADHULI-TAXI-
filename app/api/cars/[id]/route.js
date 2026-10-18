import { NextResponse } from "next/server";
import { readSession } from "@/lib/auth";
import { deleteCar, readCars, replaceCar } from "@/lib/store";

export async function PATCH(request, { params }) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const cars = await readCars();
  const index = cars.findIndex((car) => car.id === params.id);
  if (index < 0) return NextResponse.json({ error: "Car not found." }, { status: 404 });
  const current = { ...cars[index] };
  delete current.pricePerKm;
  const next = {
    ...current,
    name: String(body.name ?? cars[index].name).trim().slice(0, 80),
    category: String(body.category ?? cars[index].category).slice(0, 40),
    body: String(body.body ?? cars[index].body).slice(0, 40),
    seats: String(body.seats ?? cars[index].seats).slice(0, 20),
    luggage: String(body.luggage ?? cars[index].luggage).slice(0, 40),
    description: String(body.description ?? cars[index].description).trim().slice(0, 400),
    image: String(body.image ?? cars[index].image).slice(0, 200),
    tags: Array.isArray(body.tags) ? body.tags.map((tag) => String(tag).slice(0, 30)).slice(0, 6) : cars[index].tags,
    active: body.active !== false,
  };
  await replaceCar(params.id, next);
  return NextResponse.json(next);
}

export async function DELETE(_request, { params }) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await deleteCar(params.id);
  return NextResponse.json({ ok: true });
}
