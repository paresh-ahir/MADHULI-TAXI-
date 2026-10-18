import Link from "next/link";

export default function FleetCard({ car }) {
  return (
    <article className="car-card">
      <div className="shot">
        <img src={car.image} alt={`${car.name} ${car.body} available with Madhuli Taxi in Somnath`} />
        <span className="shot-cat">{car.category}</span>
        <span className="shot-brand">Madhuli</span>
        <div className="shot-label">
          <div>
            <b>{car.name}</b>
            <small>{car.seats} seats · {car.luggage}</small>
          </div>
          <em>{car.body}</em>
        </div>
      </div>
      <div className="car-body">
        <div className="meta">
          <span>{car.body}</span>
          <span>AC</span>
          <span>{car.seats}</span>
        </div>
        <p>{car.description}</p>
        <div className="tags">{(car.tags || []).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link className="btn" href={`/contact?vehicle=${encodeURIComponent(car.name)}#book`}>Reserve now</Link>
      </div>
    </article>
  );
}
