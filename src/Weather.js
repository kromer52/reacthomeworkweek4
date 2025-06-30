import React from "react";

export default function Weather({ data }) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city">{data.city}</h1>
        <p className="weather-app-details">
          <span>{data.time}</span>, <span>{data.description}</span>
          <br />
          Humidity: <strong>{data.humidity}%</strong>, Wind:{" "}
          <strong>{data.wind} km/h</strong>
        </p>
      </div>
      <div className="weather-app-temperature-container">
        {/* Icon placeholder — can be added later */}
        <div id="icon"></div>
        <div className="weather-app-temperature">{data.temperature}</div>
        <div className="weatehr-app-unit">°C</div>
      </div>
    </div>
  );
}
