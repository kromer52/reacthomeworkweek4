import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "303634af30at1e0bobd77c2b1f682f81";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

   axios.get(apiUrl)
  .then((response) => {
    const data = response.data;
    setWeatherData({
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      city: data.name,
    });
  })
  .catch((error) => {
    console.error("Error fetching weather:", error);
    setWeatherData(null);
  });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}
