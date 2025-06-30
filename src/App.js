import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    searchCity(city);
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    return `${day} ${hours}:${minutes}`;
  }

  function searchCity(city) {
    const apiKey = "303634af30at1e0bobd77c2b1f682f81";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setWeatherData({
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        time: formatDate(response.data.time),
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weather-app">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-form-input"
            value={city}
            onChange={handleInputChange}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        {weatherData && <Weather data={weatherData} />}
      </main>
      <footer>
        Coded by{" "}
        <a href="https://github.com/kromer52" target="_blank" rel="noreferrer">
          Ilona
        </a>
        , code hosted on{" "}
        <a
          href="https://github.com/kromer52/reacthomeworkweek4"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and website hosted on{" "}
        <a
          href="https://reacthomeworkweek4.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
      </footer>
    </div>
  );
}
