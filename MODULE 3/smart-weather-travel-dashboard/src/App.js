import { useState } from "react";
import SearchBar from "./components/searchbar";
import WeatherCard from "./components/weathercard";
import TravelSuggestions from "./components/travelsuggestions";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Step 1: Find city coordinates
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Unable to find city");
      }

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found");
      }

      const location = locationData.results[0];

      // Step 2: Get weather
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather");
      }

      const weatherData = await weatherResponse.json();

      setWeather(weatherData.current);

      // Display proper city name
      setCity(location.name);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">

      <header className="header">

        <h1>🌤️ Smart Weather & Travel Dashboard</h1>

        <p>
          Check the weather and get smart travel suggestions
        </p>

      </header>

      <main className="container">

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={searchWeather}
        />

        {loading && (
          <p className="loading">
            Loading weather...
          </p>
        )}

        {error && (
          <p className="error">
            ❌ {error}
          </p>
        )}

        {weather && (
          <>
            <WeatherCard
              weather={weather}
              city={city}
            />

            <TravelSuggestions
              weather={weather}
            />
          </>
        )}

      </main>

      <footer>
        <p>© 2026 Smart Weather Dashboard</p>
      </footer>

    </div>
  );
}

export default App;
