export default function Logo({ light = false }) {
  return (
    <span className="brand" style={light ? { color: "white" } : undefined}>
      <span className="brand-mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3 14.2 9.2H20l-4.6 3.4 1.8 5.6L12 15.2 6.8 18.2 8.6 12.6 4 9.2h5.8L12 3Z" fill="white"/>
          <path d="M5 20h14" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </span>
      <span>
        <b>MADHULI</b>
        <small>TAXI · SOMNATH</small>
      </span>
    </span>
  );
}
