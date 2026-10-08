function Events() {
  const events = [
    {
      name: "Coding Challenge",
      date: "10 October 2026",
      time: "10:00 AM",
      venue: "Computer Lab"
    },
    {
      name: "Dance Competition",
      date: "11 October 2026",
      time: "2:00 PM",
      venue: "Main Auditorium"
    },
    {
      name: "Singing Competition",
      date: "12 October 2026",
      time: "11:00 AM",
      venue: "Open Stage"
    },
    {
      name: "Photography Contest",
      date: "13 October 2026",
      time: "10:00 AM",
      venue: "College Campus"
    }
  ];

  return (
    <section className="page-section">

      <h1>🎉 Event Listings</h1>

      <div className="event-grid">

        {events.map((event, index) => (
          <div className="event-card" key={index}>

            <h2>{event.name}</h2>

            <p>📅 {event.date}</p>
            <p>⏰ {event.time}</p>
            <p>📍 {event.venue}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Events;