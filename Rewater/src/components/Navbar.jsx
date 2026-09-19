import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a
          href="/home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-drop">💧</span>
          <span>Drop2Life</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a
            href="/home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="/home#how-it-works"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>

          <a
            href="/home#impact"
            onClick={() => setMenuOpen(false)}
          >
            Impact
          </a>

          {/* Login / Signup */}
          <div className="nav-buttons">

            <a
              href="/login"
              className="login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="/signup"
              className="signup-btn"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;