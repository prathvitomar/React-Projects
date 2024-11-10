import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherSearch from "./WeatherSearch";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  async function search() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const resData = await res.json();
      setWeatherData(resData);
    } catch (error) {
        alert(error.message);
    }
  }

  console.log(weatherData);

  return (
    <>
      <div>
        <div>
          <div>
            <WeatherSearch
              city={city}
              onCityChange={(e) => setCity(e.target.value)}
              search={search}
            />
          </div>
          <div>
            <WeatherCard data={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
