import { useState } from "react";
import "./App.css";
import Report from "./Report";

function App() {

  const [showReport, setShowReport] = useState(false);

  if (showReport) {
    return <Report />;
  }

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          🛣️ RoadWatch AI
        </div>

        <div className="nav-links">

          <a href="#">
            Home
          </a>

          <a href="#">
            How It Works
          </a>

          <a href="#">
            Reports
          </a>

          <button className="login-btn">
            Login
          </button>

        </div>

      </nav>


      <section className="hero">

        <div className="hero-content">

          <h1 className="hero-title">
            AI-Powered
            <br />
            Road Monitoring
          </h1>

          <p className="hero-subtitle">
            Report potholes, cracks and other road
            problems. RoadWatch AI uses intelligent
            detection to help identify and track
            road damage.
          </p>

          <button
            className="report-btn"
            onClick={() => setShowReport(true)}
          >
            📷 Report Road Damage
          </button>

        </div>


        <div className="hero-card">

          <div>

            <div className="road-icon">
              🛣️
            </div>

            <h3>
              Smarter Roads
            </h3>

            <p>
              Detect • Report • Resolve
            </p>

          </div>

        </div>

      </section>


      <section className="features">

        <h2 className="features-title">
          How RoadWatch Helps
        </h2>

        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              AI Detection
            </h3>

            <p>
              Automatically identify road
              damage from uploaded images.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📍
            </div>

            <h3>
              GPS Location
            </h3>

            <p>
              Record the location of reported
              road problems.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Track Reports
            </h3>

            <p>
              Monitor reported problems and
              their resolution status.
            </p>

          </div>

        </div>

      </section>


      <footer className="footer">

        <p>
          © 2026 RoadWatch AI | AI-Powered Road Monitoring
        </p>

      </footer>

    </div>
  );
}

export default App;