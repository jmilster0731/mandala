import React from "react";
import "./HomePage.css";
import Map from "../../components/Map/Map"

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <h2 className="home-page-title">Explore the world of Mandala</h2>
      <div className="homepage-container">
        <div />
        <Map />
        <div />
      </div>
    </div>
  );
};

export default HomePage;