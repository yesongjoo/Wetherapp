import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = () => {
  return (
    <div className="card">
      <p className="cityname">Toronto</p>
      <p className="temp">5.1 &#8451; / 22.82 &#8457;</p>
      <p className="weatherdiscription">Clear sky</p>
    </div>
  );
};

export default WeatherInfo;
