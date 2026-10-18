import InquiryBoard from "@/components/InquiryBoard";

export const metadata = { title: "Enquiries", robots: { index: false, follow: false } };

export default function InquiriesPage() {
  return (
    <div>
      <div className="admin-top">
        <div>
          <h1 style={{ fontSize: 36 }}>Enquiries</h1>
          <p className="muted">Update the status after you call the guest.</p>
        </div>
      </div>
      <InquiryBoard />
    </div>
  );
}
