function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;