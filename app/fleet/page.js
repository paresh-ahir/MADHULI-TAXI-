import FleetCard from "@/components/FleetCard";
import { activeCars } from "@/lib/store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Somnath taxi fleet",
  description: "Somnath taxi fleet from Madhuli: Swift, Dzire, Ertiga, Innova Crysta, Force Traveller and Urbania. AC cabs for darshan and outstation trips.",
  alternates: { canonical: "/fleet" },
};

export default async function FleetPage() {
  const cars = await activeCars();
  return (
    <main id="main" className="section" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <div className="page-hero">
          <h1>The Somnath fleet.</h1>
          <p className="lede">Pick by seats and luggage. The Somnath desk confirms the car on WhatsApp after you send the route.</p>
        </div>
        <div className="fleet-grid" style={{ marginTop: 20 }}>
          {cars.map((car) => <FleetCard key={car.id} car={car} />)}
        </div>
      </div>
    </main>
  );
}
