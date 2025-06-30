import React from "react";

export default function Weather({ data }) {
  return (
    <div className="Weather">
      <h2>{data.city}</h2>
      <ul>
        <li>{data.description}</li>
        <li>🌡️ {data.temperature}°C</li>
        <li>💧 Humidity: {data.humidity}%</li>
        <li>🌬️ Wind: {data.wind} km/h</li>
      </ul>
    </div>
  );
}
