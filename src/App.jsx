import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from "./services/sw-api";
function App() {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    fetchData().then((results) => {
      setStarships(results);
      console.log(results);
    });
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div>
        {starships.map((starship, index) => (
          <div key={index}>
            <h2>{starship.name}</h2>
            <p>
              <strong>Model:</strong> {starship.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {starship.manufacturer}
            </p>
            <p>
              <strong>Cost in Credits:</strong> {starship.cost_in_credits}
            </p>
            <p>
              <strong>Passengers:</strong> {starship.passengers}
            </p>
            <p>
              <strong>Starship Class:</strong> {starship.starship_class}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
