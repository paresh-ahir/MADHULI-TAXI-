import CarManager from "@/components/CarManager";

export const metadata = { title: "Cars", robots: { index: false, follow: false } };

export default function CarsPage() {
  return (
    <div>
      <div className="admin-top">
        <div>
          <h1 style={{ fontSize: 36 }}>Cars</h1>
          <p className="muted">Add a photo. The site prints the name, seats, and luggage on it.</p>
        </div>
      </div>
      <CarManager />
    </div>
  );
}
