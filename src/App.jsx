import { useState, useEffect } from "react";
import WeatherInfo from "./component/WeatherInfo";
import CityButtons from "./component/CityButtons";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=01c89473860f305743dca34a3b6c5842`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);

  return (
    <>
      <div className="background">
        <div className="container">
          <WeatherInfo weather={weather} />
          <CityButtons />
        </div>
      </div>
    </>
  );
}

export default App;
