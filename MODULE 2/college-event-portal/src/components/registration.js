import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("Coding Challenge");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registration successful!\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`
    );

    setName("");
    setEmail("");
    setEvent("Coding Challenge");
  };

  return (
    <section className="page-section">

      <h1>📝 Event Registration</h1>

      <form className="registration-form" onSubmit={handleSubmit}>

        <label>Student Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Select Event</label>

        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option>Coding Challenge</option>
          <option>Dance Competition</option>
          <option>Singing Competition</option>
          <option>Photography Contest</option>
        </select>

        <button type="submit" className="primary-button">
          Register Now
        </button>

      </form>

    </section>
  );
}

export default Registration;