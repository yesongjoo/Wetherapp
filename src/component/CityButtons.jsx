import React from "react";
import "./CityButtons.css";
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const CityButtons = ({
  cities,
  setWeather,
  getCurrentLocation,
  setLoading,
}) => {
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div className="buttons">
      <button className="city-button" onClick={getCurrentLocation}>
        Current Location
      </button>
      {cities.map((city) => (
        <button
          key={city}
          className="city-button"
          onClick={() => getWeatherByCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityButtons;
