import React from "react";
import "./CityButtons.css";

const CityButtons = () => {
  return (
    <div className="buttons">
      <button className="city-button">Current Location</button>
      <button className="city-button">Seoul</button>
      <button className="city-button">Lodon</button>
      <button className="city-button">Sydney</button>
      <button className="city-button">Hanoi</button>
    </div>
  );
};

export default CityButtons;
