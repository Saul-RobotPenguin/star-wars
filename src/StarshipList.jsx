import { Link } from "react-router-dom";

function StarshipList({ starships }) {
  return (
    <div className="starship-list">
      {starships.map((starship, index) => (
        <div key={index} className="starship-card">
          <h2>
            <Link to={`/${starship.name}`}>{starship.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
export default StarshipList;
