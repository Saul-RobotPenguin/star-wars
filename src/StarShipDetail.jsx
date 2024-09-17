import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./services/sw-api";

function StarshipDetail() {
  const { name } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const allStarships = await fetchData();
        const selectedStarship = allStarships.find((s) => s.name === name);
        setStarship(selectedStarship);
      } catch (err) {
        console.log("oopsd");
      }
    };

    fetchStarship();
  }, [name]);

  if (!starship) return <div>No Starship Found</div>;

  return (
    <div className="starship-detail">
      <h1>{starship.name}</h1>
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
  );
}

export default StarshipDetail;
