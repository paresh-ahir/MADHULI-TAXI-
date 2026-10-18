import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { readSession } from "@/lib/auth";

const types = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export async function POST(request) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const form = await request.formData();
  const file = form.get("file");
  if (!file || typeof file === "string") return NextResponse.json({ error: "Choose a photo." }, { status: 400 });
  const ext = types[file.type];
  if (!ext) return NextResponse.json({ error: "Use a JPG, PNG, or WebP photo." }, { status: 400 });
  if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Photo must be under 5 MB." }, { status: 400 });
  const filename = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ url: `/uploads/${filename}` });
}
