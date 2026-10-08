function TravelSuggestions({ weather }) {
  if (!weather) {
    return null;
  }

  const temperature = weather.temperature_2m;
  const code = weather.weather_code;

  let suggestion = "";
  let activity = "";

  if (code >= 95) {
    suggestion =
      "Thunderstorms are expected. It is better to avoid outdoor travel.";

    activity = "🏠 Indoor activities are recommended.";
  } else if (code >= 51 && code <= 82) {
    suggestion =
      "Rain is expected. Carry an umbrella and consider indoor attractions.";

    activity = "☔ Museums, cafes and shopping malls are good choices.";
  } else if (temperature >= 30) {
    suggestion =
      "The weather is hot. Carry water, sunscreen and light clothing.";

    activity = "🏖️ Beaches and early-morning activities are recommended.";
  } else if (temperature >= 20) {
    suggestion =
      "The weather looks comfortable for travelling.";

    activity = "🚶 Parks, sightseeing and outdoor activities are recommended.";
  } else {
    suggestion =
      "The weather is cool. Carry a light jacket when travelling.";

    activity = "🏔️ Hill stations and scenic places are good options.";
  }

  return (
    <div className="travel-card">

      <h2>✈️ Travel Suggestions</h2>

      <p>{suggestion}</p>

      <p>{activity}</p>

    </div>
  );
}

export default TravelSuggestions;