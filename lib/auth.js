import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { verifySession } from "./session";

export const ADMIN_USER = process.env.ADMIN_USER || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "madhuli8140";

export function passwordMatches(input) {
  const a = createHash("sha256").update(String(input)).digest();
  const b = createHash("sha256").update(ADMIN_PASSWORD).digest();
  return timingSafeEqual(a, b);
}

export function userMatches(input) {
  const a = createHash("sha256").update(String(input || "").trim()).digest();
  const b = createHash("sha256").update(ADMIN_USER).digest();
  return timingSafeEqual(a, b);
}

export function readSession() {
  const token = cookies().get("madhuli_session")?.value;
  return verifySession(token);
}
