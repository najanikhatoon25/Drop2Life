import "../styles/Dashboard.css";

function Dashboard() {
  const weeklyData = [
    { day: "Mon", value: 25 },
    { day: "Tue", value: 32 },
    { day: "Wed", value: 20 },
    { day: "Thu", value: 38 },
    { day: "Fri", value: 30 },
    { day: "Sat", value: 42 },
    { day: "Sun", value: 35 },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <span className="brand-mark">💧</span>
          <div>
            <h2>Drop2Life</h2>
            <p>Second Life Water</p>
          </div>
        </div>

        <nav className="sidebar-menu">

          <a href="#" className="active">
            🏠
            <span>Dashboard</span>
          </a>

          <a href="#">
            💧
            <span>Live Data</span>
          </a>

          <a href="#">
            🕐
            <span>History</span>
          </a>

          <a href="#">
            ⚙️
            <span>Settings</span>
          </a>

        </nav>

      </aside>


      {/* Main Content */}
      <main className="dashboard-main">

        <header className="topbar">
          <button className="topbar-menu" aria-label="Open navigation">☰</button>
          <div className="topbar-user">
            <button className="notification" aria-label="Notifications">♧<i /></button>
            <span className="avatar">D2L</span>
          </div>
        </header>

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Monitor collected and reused water</p>
          </div>

          <div className="location">
            📍 Railway Station
            <span>|</span>
            📅 18 Sep 2026
          </div>
        </header>


        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon water">💧</div>

            <div>
              <p>Water Collected</p>
              <h2>35 L</h2>
              <small>Today</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon reuse">♻️</div>

            <div>
              <p>Water Reused</p>
              <h2>28 L</h2>
              <small>Today</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon users">👥</div>

            <div>
              <p>Total Users</p>
              <h2>145</h2>
              <small>Registered</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon bottle">🍼</div>

            <div>
              <p>Bottles Collected</p>
              <h2>180</h2>
              <small>Today</small>
            </div>
          </div>

        </section>


        {/* Middle Section */}
        <section className="dashboard-grid">

          {/* Tank Level */}
          <div className="card tank-card">

            <div className="card-title">
              <h3>Tank Level</h3>
              <span>72%</span>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="tank-info">
              <span>36 L / 50 L</span>
              <span className="status">● Working</span>
            </div>

            <div className="tank-icon">
              💧
            </div>

          </div>


          {/* Weekly Chart */}
          <div className="card chart-card">

            <div className="card-title">
              <h3>Daily Water Recovery</h3>
              <strong>35 L</strong>
            </div>

            <div className="chart">

              {weeklyData.map((item) => (
                <div className="bar-wrapper" key={item.day}>

                  <div
                    className="bar"
                    style={{
                      height: `${item.value * 2.2}px`,
                    }}
                  ></div>

                  <span>{item.day}</span>

                </div>
              ))}

            </div>

          </div>


          {/* Impact Card */}
          <div className="card impact-card">

            <div className="impact-icon">
              🌱
            </div>

            <h3>Small drops.</h3>
            <h3>Big impact.</h3>

            <p>
              Every reused litre helps reduce unnecessary water waste.
            </p>

            <div className="impact-value">
              <span>Total Water Saved</span>
              <strong>850 L</strong>
              <small>This Month</small>
            </div>

          </div>

        </section>


        {/* Bottom Section */}
        <section className="bottom-grid">

          <div className="card reuse-card">

            <div className="card-title">
              <h3>Water Reuse</h3>
              <span>28 L Today</span>
            </div>

            <div className="reuse-items">

              <div>
                <span>🌱 Gardening</span>
                <strong>10 L</strong>
              </div>

              <div>
                <span>🧹 Cleaning</span>
                <strong>8 L</strong>
              </div>

              <div>
                <span>🚽 Toilet Flushing</span>
                <strong>6 L</strong>
              </div>

              <div>
                <span>🐕 Animal Water</span>
                <strong>4 L</strong>
              </div>

            </div>

          </div>


          <div className="card activity-card">

            <div className="card-title">
              <h3>Recent Activity</h3>
            </div>

            <div className="activity">
              <span>💧</span>
              <div>
                <strong>Water collected</strong>
                <p>5 L collected at Railway Station</p>
              </div>
              <small>10 min</small>
            </div>

            <div className="activity">
              <span>♻️</span>
              <div>
                <strong>Water reused</strong>
                <p>3 L used for gardening</p>
              </div>
              <small>25 min</small>
            </div>

            <div className="activity">
              <span>📊</span>
              <div>
                <strong>Sensor updated</strong>
                <p>Tank level is 72%</p>
              </div>
              <small>40 min</small>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;