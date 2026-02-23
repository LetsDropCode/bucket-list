import { Link } from "react-router-dom";
import { countries } from "../data";

export default function Home() {
  return (
    <div className="home">
      <h1>Lindsay & Kendall</h1>
      <h2>Our Travel Bucket List</h2>
      <p className="wedding-date">Established 26 March 2026</p>
      <p>Tap a destination to discover the dish we want to try.</p>

      <div className="destinations">
        {countries.map((country) => (
          <Link
            key={country.slug}
            to={`/country/${country.slug}`}
            className="destination-card"
            style={{ backgroundImage: `url(${country.image})` }}
          >
            <div className="destination-overlay">
              <h3>{country.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}