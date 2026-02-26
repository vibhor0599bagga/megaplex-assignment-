import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="4" fill="#2e7d32" />
              <text x="8" y="15" fill="white" fontSize="7" fontWeight="bold">
                LIME
              </text>
              <text x="5" y="24" fill="white" fontSize="5">
                DEVELOPER
              </text>
              <rect x="8" y="28" width="24" height="2" fill="#81c784" />
              <rect x="12" y="32" width="16" height="2" fill="#81c784" />
            </svg>
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#connectivities">Connectivities</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
          <li>
            <a href="#floorplans">Floor Plans</a>
          </li>
          <li>
            <a href="#developer">Developer</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#enquiry" className="enquiry-btn">
          Enquiry Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
