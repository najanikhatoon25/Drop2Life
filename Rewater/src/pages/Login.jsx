import "../styles/Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Left Side */}
        <div className="auth-brand">
          <div className="brand-logo">
            💧
          </div>

          <h1>Drop2Life</h1>

          <p className="brand-tagline">
            Give Every Drop a Second Life
          </p>

          <p className="brand-description">
            Together, we can reduce water waste and give leftover
            water a meaningful second life.
          </p>

          <div className="brand-points">
            <div>
              <span>✓</span>
              Save Every Drop
            </div>

            <div>
              <span>✓</span>
              Reduce Water Waste
            </div>

            <div>
              <span>✓</span>
              Build a Sustainable Future
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="auth-form-section">

          <div className="form-header">
            <span className="mobile-logo">💧</span>

            <h2>Welcome Back!</h2>

            <p>
              Sign in to continue to Drop2Life
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <a href="#forgot-password">
                  Forgot Password?
                </a>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="remember-row">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button type="submit" className="auth-button">
              Sign In
              <span>→</span>
            </button>

          </form>

          {/* Signup Link */}
          <div className="switch-auth">
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                Create Account
              </Link>
            </p>
          </div>

          <div className="security-note">
            🔐 Your information is kept secure
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;