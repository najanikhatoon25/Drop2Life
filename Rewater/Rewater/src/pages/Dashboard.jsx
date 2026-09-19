
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">💧</div>
          <div>
            <h2>Drop2Life</h2>
            <span>Every Drop Matters</span>
          </div>
        </div>

        <nav className="dashboard-nav">

          <Link to="/dashboard" className="dashboard-nav-item active">
            <span>🏠</span>
            Dashboard
          </Link>

          <Link to="/report-water" className="dashboard-nav-item">
            <span>💧</span>
            Report Water
          </Link>

          <Link to="/activity" className="dashboard-nav-item">
            <span>📋</span>
            My Activity
          </Link>

          <Link to="/impact" className="dashboard-nav-item">
            <span>🌱</span>
            My Impact
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <div className="sidebar-help">
            <span>💡</span>
            <div>
              <strong>Every drop counts!</strong>
              <p>Help us reduce water waste.</p>
            </div>
          </div>

          <Link to="/login" className="logout-button">
            <span>↪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* Main Content */}
      <main className="dashboard-main">

        {/* Top Bar */}
        <header className="dashboard-header">

          <div>
            <p className="dashboard-small-text">Welcome back 👋</p>
            <h1>Your Water Dashboard</h1>
          </div>

          <div className="profile-section">
            <div className="notification-icon">
              🔔
            </div>

            <div className="profile-avatar">
              N
            </div>

            <div className="profile-info">
              <strong>Najni</strong>
              <span>Eco Member</span>
            </div>
          </div>

        </header>


        {/* Welcome Card */}
        <section className="welcome-card">

          <div className="welcome-content">
            <span className="welcome-badge">
              🌊 Make an Impact
            </span>

            <h2>
              Give Every Drop
              <br />
              <span>A Second Life.</span>
            </h2>

            <p>
              Track your water-saving journey and see
              how your small actions are creating a
              bigger environmental impact.
            </p>

            <button className="primary-dashboard-button">
              💧 Report Leftover Water
              <span>→</span>
            </button>
          </div>

          <div className="welcome-visual">
            <div className="water-circle">
              💧
            </div>

            <div className="floating-drop drop-one">
              💧
            </div>

            <div className="floating-drop drop-two">
              💧
            </div>

            <div className="floating-leaf">
              🌱
            </div>
          </div>

        </section>


        {/* Stats */}
        <section className="stats-section">

          <div className="section-heading">
            <div>
              <h2>Your Impact</h2>
              <p>See how you're helping save valuable resources.</p>
            </div>
          </div>

          <div className="stats-grid">

            <div className="dashboard-stat-card">

              <div className="stat-card-top">
                <div className="stat-icon water-icon">
                  💧
                </div>

                <span className="stat-growth">
                  +12%
                </span>
              </div>

              <h3>24.5 L</h3>
              <p>Water Collected</p>

              <div className="stat-progress">
                <span style={{ width: "72%" }}></span>
              </div>

              <small>72% of monthly goal</small>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-top">
                <div className="stat-icon reuse-icon">
                  ♻️
                </div>

                <span className="stat-growth">
                  +18%
                </span>
              </div>

              <h3>18.2 L</h3>
              <p>Water Reused</p>

              <div className="stat-progress">
                <span style={{ width: "64%" }}></span>
              </div>

              <small>64% reuse rate</small>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-top">
                <div className="stat-icon nature-icon">
                  🌱
                </div>

                <span className="stat-growth">
                  +8%
                </span>
              </div>

              <h3>12.8 kg</h3>
              <p>Waste Reduced</p>

              <div className="stat-progress">
                <span style={{ width: "58%" }}></span>
              </div>

              <small>58% of monthly goal</small>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-top">
                <div className="stat-icon impact-icon">
                  🌍
                </div>

                <span className="stat-growth">
                  +25%
                </span>
              </div>

              <h3>36</h3>
              <p>Eco Actions</p>

              <div className="stat-progress">
                <span style={{ width: "80%" }}></span>
              </div>

              <small>80% of monthly goal</small>

            </div>

          </div>

        </section>


        {/* Bottom Grid */}
        <section className="dashboard-bottom-grid">

          {/* Recent Activity */}
          <div className="activity-card">

            <div className="card-header">
              <div>
                <h2>Recent Activity</h2>
                <p>Your latest water-saving actions.</p>
              </div>

              <Link to="/activity">
                View All
              </Link>
            </div>


            <div className="activity-list">

              <div className="activity-item">

                <div className="activity-item-icon">
                  💧
                </div>

                <div className="activity-details">
                  <strong>Water Collected</strong>
                  <span>Leftover drinking water</span>
                </div>

                <div className="activity-value">
                  +2.5 L
                  <small>Today</small>
                </div>

              </div>


              <div className="activity-item">

                <div className="activity-item-icon">
                  ♻️
                </div>

                <div className="activity-details">
                  <strong>Water Reused</strong>
                  <span>Used for gardening</span>
                </div>

                <div className="activity-value">
                  1.8 L
                  <small>Yesterday</small>
                </div>

              </div>


              <div className="activity-item">

                <div className="activity-item-icon">
                  🌱
                </div>

                <div className="activity-details">
                  <strong>Eco Action</strong>
                  <span>Reduced water waste</span>
                </div>

                <div className="activity-value">
                  +1
                  <small>Sep 14</small>
                </div>

              </div>

            </div>

          </div>


          {/* Quick Action */}
          <div className="quick-action-card">

            <div className="quick-action-icon">
              💧
            </div>

            <h2>Have leftover water?</h2>

            <p>
              Don't throw it away. Report it and
              help give that water a second life.
            </p>

            <button className="quick-action-button">
              Report Water
              <span>→</span>
            </button>

            <div className="quick-tip">
              💡 Small action, big impact.
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;

