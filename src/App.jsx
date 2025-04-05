import { useState, useEffect } from "react";
import WeatherInfo from "./component/WeatherInfo";
import CityButtons from "./component/CityButtons";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const cities = ["seoul", "london", "sydney", "hanoi"];

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
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
        {loading ? (
          <div className="container">
            <ClipLoader
              color="#fc39ae"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="container">
            <ClipLoader
              color="#fc39ae"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <WeatherInfo weather={weather} />
            <CityButtons
              cities={cities}
              setWeather={setWeather}
              getCurrentLocation={getCurrentLocation}
              setLoading={setLoading}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
