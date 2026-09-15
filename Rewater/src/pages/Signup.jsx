import "../styles/Signup.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Terms Accepted:", agreeTerms);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Side */}
        <div className="signup-brand">
          <div className="brand-logo">💧</div>

          <h1>Drop2Life</h1>

          <p className="brand-tagline">Give Every Drop a Second Life</p>

          <p className="brand-description">
            Join a community that believes every drop matters and every leftover
            drop can be reused.
          </p>

          <div className="brand-stats">
            <div className="stat">
              <strong>💧</strong>
              <span>Save Water</span>
            </div>

            <div className="stat">
              <strong>♻</strong>
              <span>Reuse Resources</span>
            </div>

            <div className="stat">
              <strong>🌱</strong>
              <span>Protect Nature</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="signup-form-section">
          <div className="signup-header">
            <span className="mobile-logo">💧</span>

            <h2>Create Account</h2>

            <p>Start your journey with Drop2Life</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="signup-input-group">
              <label htmlFor="name">Full Name</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">👤</span>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="signup-input-group">
              <label htmlFor="signup-email">Email Address</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">✉</span>

                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-input-group">
              <label htmlFor="signup-password">Password</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">🔒</span>

                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="password-hint">
                <p>Password should contain:</p>

                <span>• 8+ characters</span>
                <span>• Uppercase letter</span>
                <span>• Number</span>
                <span>• Special character</span>
              </div>
            </div>

            <div className="google-divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="google-button"
              onClick={() => console.log("Continue with Google clicked")}
            >
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            {/* Confirm Password */}
            <div className="signup-input-group">
              <label htmlFor="confirm-password">Confirm Password</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">🔐</span>

                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />

              <span>I agree to the Terms & Conditions and Privacy Policy.</span>
            </label>

            {/* Signup Button */}
            <button type="submit" className="signup-button">
              Create Account
              <span>→</span>
            </button>
          </form>

          {/* Login Link */}
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>

          <div className="signup-security-note">🔐 Your data matters to us</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
