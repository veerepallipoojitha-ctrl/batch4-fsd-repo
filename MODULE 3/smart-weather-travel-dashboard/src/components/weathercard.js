function getWeatherIcon(code) {
  if (code === 0) {
    return "☀️";
  }

  if (code >= 1 && code <= 3) {
    return "⛅";
  }

  if (code >= 45 && code <= 48) {
    return "🌫️";
  }

  if (code >= 51 && code <= 67) {
    return "🌧️";
  }

  if (code >= 71 && code <= 77) {
    return "❄️";
  }

  if (code >= 80 && code <= 82) {
    return "🌦️";
  }

  if (code >= 95) {
    return "⛈️";
  }

  return "🌤️";
}

function getWeatherDescription(code) {
  if (code === 0) {
    return "Clear Sky";
  }

  if (code >= 1 && code <= 3) {
    return "Partly Cloudy";
  }

  if (code >= 45 && code <= 48) {
    return "Foggy";
  }

  if (code >= 51 && code <= 67) {
    return "Rainy";
  }

  if (code >= 71 && code <= 77) {
    return "Snowy";
  }

  if (code >= 80 && code <= 82) {
    return "Rain Showers";
  }

  if (code >= 95) {
    return "Thunderstorm";
  }

  return "Cloudy";
}

function WeatherCard({ weather, city }) {
  if (!weather) {
    return null;
  }

  const icon = getWeatherIcon(weather.weather_code);
  const description = getWeatherDescription(weather.weather_code);

  return (
    <div className="weather-card">

      <h2>Weather in {city}</h2>

      <div className="weather-icon">
        {icon}
      </div>

      <h1>{Math.round(weather.temperature_2m)}°C</h1>

      <h3>{description}</h3>

      <div className="weather-details">

        <div>
          <strong>💧 Humidity</strong>
          <p>{weather.relative_humidity_2m}%</p>
        </div>

        <div>
          <strong>💨 Wind</strong>
          <p>{weather.wind_speed_10m} km/h</p>
        </div>

        <div>
          <strong>🌡️ Feels Like</strong>
          <p>{Math.round(weather.apparent_temperature)}°C</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;