import { useState } from "react";
import "./App.css"; 

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "0874fb2af0642fe2b47cfd00633138e5";

  const fetchWeather = async () => {
    if (!city) {
      setError("Enter name of city , please ");
      return;
    }
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError("City is not found , please try again ");
        setWeather(null);
      }
    } catch (error) {
      setError("Error !");
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <h2>🌤️ Search for a city </h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter name of city "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>🔍</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h3>🌍 {weather.name}, {weather.sys.country}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>🌡️ Temperature degree : <span>{weather.main.temp}°C</span></p>
          <p>🌥️ Description : <span>{weather.weather[0].description}</span></p>
          <p>💨 Wind speed : <span>{weather.wind.speed} Km/h </span></p>
        </div>
      )}
    </div>
  );
};

export default Weather;

