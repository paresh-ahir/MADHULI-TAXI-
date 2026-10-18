import { NextResponse } from "next/server";
import { verifySession } from "./lib/session";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin") || pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }
  const token = request.cookies.get("madhuli_session")?.value;
  const session = await verifySession(token);
  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
