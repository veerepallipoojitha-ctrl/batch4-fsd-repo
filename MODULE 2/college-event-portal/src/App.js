import { useState } from "react";
import Home from "./components/home";
import Events from "./components/event";
import Registration from "./components/registration";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const showPage = () => {
    if (activePage === "home") {
      return <Home setActivePage={setActivePage} />;
    }

    if (activePage === "events") {
      return <Events />;
    }

    if (activePage === "registration") {
      return <Registration />;
    }

    if (activePage === "gallery") {
      return <Gallery />;
    }

    if (activePage === "contact") {
      return <Contact />;
    }
  };

  return (
    <div className="App">

      <nav className="navbar">
        <h2 className="logo">Campus Fest 2026</h2>

        <div className="nav-links">
          <button onClick={() => setActivePage("home")}>
            Home
          </button>

          <button onClick={() => setActivePage("events")}>
            Events
          </button>

          <button onClick={() => setActivePage("registration")}>
            Register
          </button>

          <button onClick={() => setActivePage("gallery")}>
            Gallery
          </button>

          <button onClick={() => setActivePage("contact")}>
            Contact
          </button>
        </div>
      </nav>

      <main>
        {showPage()}
      </main>

      <footer>
        <p>© 2026 Campus Fest. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;