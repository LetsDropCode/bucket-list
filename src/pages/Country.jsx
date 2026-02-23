import { useParams } from "react-router-dom";
import { countries } from "../data";
import { Link } from "react-router-dom";

export default function Country() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return <div className="country-page">Country not found.</div>;
  }

return (
  <div>
    <div
      className="country-hero"
      style={{ backgroundImage: `url(${country.image})` }}
    ></div>

    <div className="country-page">
      <Link to="/" className="back-link">
        ← Back to Bucket List
      </Link>

      <h1>{country.name}</h1>
      <p>{country.note}</p>

      <h3>Recommended Dish</h3>
      <p>{country.recipeTitle}</p>

      <div style={{ marginTop: "20px" }}>
        <div className="recipe-text">{country.content}</div>
      </div>
    </div>
  </div>
);
}