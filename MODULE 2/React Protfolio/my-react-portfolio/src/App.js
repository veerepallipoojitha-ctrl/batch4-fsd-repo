import About from "./components/about";
import Skills from "./components/skills";
import "./App.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm Poojitha</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I create modern, responsive and user-friendly web applications
            using React, JavaScript and Node.js.
          </p>

          <a href="#about" className="hero-button">
            Know More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>

        <p>
          I am interested in learning, building projects and exploring
          new opportunities.
        </p>

        <p>Email: poojitha@example.com</p>

        <button className="contact-button">Get In Touch</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
