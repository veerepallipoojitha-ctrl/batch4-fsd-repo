function EmployeeSearch({ search, setSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search employee by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

    </div>
  );
}

export default EmployeeSearch;