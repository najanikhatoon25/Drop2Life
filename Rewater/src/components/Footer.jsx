import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            💧 Drop2Life
          </a>

          <p>
            Give every drop a second life through smart collection,
            reuse and community action.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#impact">Impact</a>
          </div>

          <div>
            <h4>Account</h4>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Drop2Life. Built for a sustainable future.</p>
        <p>💧 Collect • Measure • Reuse</p>
      </div>
    </footer>
  );
}

export default Footer;