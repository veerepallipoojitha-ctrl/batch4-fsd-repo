import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const response = await fetch(
        `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setWeather(data);

    } catch (error) {
      setError("Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchWeather();
    }
  };

  return (
    <div className="weather-page">

      <div className="weather-card">

        <h1>Weather Dashboard</h1>

        <p className="subtitle">
          Search for the current weather of any city
        </p>

        <div className="search-container">

          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={searchWeather}>
            Search
          </button>

        </div>

        {loading && (
          <p className="loading">
            Loading...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {weather && (
          <div className="weather-result">

            <h2>
              {weather.city}, {weather.country}
            </h2>

            <div className="weather-grid">

              <div className="weather-box">
                <div className="weather-icon">🌡️</div>
                <h3>Temperature</h3>
                <p>{weather.temperature} °C</p>
              </div>

              <div className="weather-box">
                <div className="weather-icon">💧</div>
                <h3>Humidity</h3>
                <p>{weather.humidity}%</p>
              </div>

              <div className="weather-box">
                <div className="weather-icon">💨</div>
                <h3>Wind Speed</h3>
                <p>{weather.windSpeed} km/h</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;