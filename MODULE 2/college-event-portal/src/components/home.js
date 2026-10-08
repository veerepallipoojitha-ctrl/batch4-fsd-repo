function Home({ setActivePage }) {
  return (
    <section className="home-section">

      <div className="hero-content">
        <h1>Welcome to Campus Fest 2026</h1>

        <p>
          Celebrate talent, creativity, technology and culture
          with students from across the college.
        </p>

        <button
          className="primary-button"
          onClick={() => setActivePage("events")}
        >
          Explore Events
        </button>
      </div>

      <div className="announcement">
        <h2>📢 Latest Announcement</h2>

        <p>
          Registrations are now open! Register for your
          favorite events before the deadline.
        </p>
      </div>

    </section>
  );
}

export default Home;