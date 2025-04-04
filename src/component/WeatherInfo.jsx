import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ weather }) => {
  console.log("weather:", weather);
  return (
    <div className="card">
      <p className="cityname">{weather?.name}</p>
      <p className="temp">{weather?.main.temp} &#8451; / 22.82 &#8457;</p>
      <p className="weatherdiscription">{weather?.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
