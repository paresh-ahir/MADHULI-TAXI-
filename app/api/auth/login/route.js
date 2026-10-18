import { NextResponse } from "next/server";
import { ADMIN_USER, passwordMatches, userMatches } from "@/lib/auth";
import { signSession } from "@/lib/session";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  if (!userMatches(body.username) || !passwordMatches(body.password || "")) {
    return NextResponse.json({ error: "Those details do not match." }, { status: 401 });
  }
  const token = await signSession(ADMIN_USER);
  const response = NextResponse.json({ ok: true });
  response.cookies.set("madhuli_session", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
