import { NextResponse } from "next/server";
import { readSession } from "@/lib/auth";
import { deleteInquiry, updateInquiryStatus } from "@/lib/store";

const statuses = ["new", "contacted", "confirmed", "closed"];

export async function PATCH(request, { params }) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  if (!statuses.includes(body.status)) return NextResponse.json({ error: "Unknown status." }, { status: 400 });
  const updated = await updateInquiryStatus(params.id, body.status);
  if (!updated) return NextResponse.json({ error: "Enquiry not found." }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_request, { params }) {
  if (!(await readSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await deleteInquiry(params.id);
  return NextResponse.json({ ok: true });
}
