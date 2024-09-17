import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchData } from "./services/sw-api";
import StarshipDetail from "./StarshipDetail";
import StarshipList from "./StarshipList";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetchData()
      .then((results) => {
        setStarships(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="container">
        <h1>Star Wars Starships</h1>
        <Routes>
          <Route path="/" element={<StarshipList starships={starships} />} />
          <Route path="/:name" element={<StarshipDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
