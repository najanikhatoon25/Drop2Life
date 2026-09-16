import { useEffect, useState } from "react";
import waterImage from "../assets/image.png";
import reuseImage from "../assets/image copy.png";
import communityImage from "../assets/image copy 2.png";
import natureImage from "../assets/image copy 3.png";
import "./Home.css";

const heroImages = [waterImage, reuseImage, communityImage, natureImage];

function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(imageTimer);
  }, []);

  return (
    <main>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-background" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              className={`hero-background-image ${index === activeImage ? "is-active" : ""}`}
              key={image}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-badge">
              💧 Smart Water Reuse
            </span>

            <h1>
              Give Every Drop
              <span> a Second Life.</span>
            </h1>

            <p>
              We collect leftover drinking water, measure it,
              and help give it a suitable second use instead
              of letting it go to waste.
            </p>

            <div className="hero-buttons">
              <a href="#how-it-works" className="primary-btn">
                See How It Works →
              </a>

              <a href="#impact" className="secondary-btn">
                Explore Impact
              </a>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>100%</strong>
                <small>Reuse Mindset</small>
              </div>

              <div>
                <strong>♻️</strong>
                <small>Less Waste</small>
              </div>

              <div>
                <strong>🌱</strong>
                <small>Better Future</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="water-circle">
              <div className="drop-icon">💧</div>
              <h3>Every Drop Matters</h3>
              <p>Collect • Measure • Reuse</p>
            </div>

            <div className="floating-card card-one">
              <span>💧</span>
              <div>
                <strong>245 L</strong>
                <small>Water Collected</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>♻️</span>
              <div>
                <strong>198 L</strong>
                <small>Water Reused</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section">
        <div className="section-container">

          <div className="section-heading">
            <span>THE PROBLEM</span>
            <h2>Small amounts of water add up.</h2>
            <p>
              Every day, people leave drinking water in bottles at
              stations, colleges, offices and events. Much of it is
              simply poured away.
            </p>
          </div>

          <div className="problem-grid">
            <div className="info-card">
              <div className="card-icon">🧴</div>
              <h3>Leftover Water</h3>
              <p>
                Water remains unused in bottles after people finish
                drinking.
              </p>
            </div>

            <div className="info-card">
              <div className="card-icon">🗑️</div>
              <h3>Often Wasted</h3>
              <p>
                Without a collection system, leftover water is often
                discarded.
              </p>
            </div>

            <div className="info-card">
              <div className="card-icon">🌱</div>
              <h3>Reuse Opportunity</h3>
              <p>
                Suitable water can support useful non-drinking
                activities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      {/* HOW IT WORKS */}
<section className="how-section" id="how-it-works">
  <div className="section-container">

    <div className="section-heading center">
      <span>HOW IT WORKS</span>
      <h2>From leftover to useful.</h2>
      <p>
        Drop2Life creates a simple journey for every recovered drop.
      </p>
    </div>

    <div className="steps">

      {/* COLLECT */}
      <div className="step">
        <div className="step-number">01</div>
        <div className="step-icon">🧴</div>

        <h3>Collect</h3>

        <p>
          Leftover drinking water is collected at a Drop2Life point.
        </p>

        <button className="learn-more-btn">
          Learn More →
        </button>
      </div>

      <div className="step-arrow">→</div>

      {/* STORE */}
      <div className="step">
        <div className="step-number">02</div>
        <div className="step-icon">🛢️</div>

        <h3>Store</h3>

        <p>
          Collected water moves into a dedicated collection tank.
        </p>

        <button className="learn-more-btn">
          Learn More →
        </button>
      </div>

      <div className="step-arrow">→</div>

      {/* MEASURE */}
      <div className="step">
        <div className="step-number">03</div>
        <div className="step-icon">📏</div>

        <h3>Measure</h3>

        <p>
          Sensors help measure the amount of recovered water.
        </p>

        <button className="learn-more-btn">
          Learn More →
        </button>
      </div>

      <div className="step-arrow">→</div>

      {/* REUSE */}
      <div className="step">
        <div className="step-number">04</div>
        <div className="step-icon">♻️</div>

        <h3>Reuse</h3>

        <p>
          Suitable water is directed towards approved non-drinking uses.
        </p>

        <button className="learn-more-btn">
          Learn More →
        </button>
      </div>

    </div>

  </div>
</section>

      {/* IMPACT */}
      <section className="impact-section" id="impact">
        <div className="section-container">

          <div className="impact-heading">
            <span>OUR IMPACT</span>
            <h2>Every recovered litre counts.</h2>
            <p>
              Drop2Life turns small actions into measurable
              community impact.
            </p>
          </div>

          <div className="impact-grid">

            <div className="impact-card">
              <span>💧</span>
              <strong>245 L</strong>
              <small>Water Collected</small>
            </div>

            <div className="impact-card">
              <span>♻️</span>
              <strong>198 L</strong>
              <small>Water Reused</small>
            </div>

            <div className="impact-card">
              <span>🧴</span>
              <strong>620</strong>
              <small>Bottles Participated</small>
            </div>

            <div className="impact-card">
              <span>📍</span>
              <strong>4</strong>
              <small>Active Locations</small>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <div>
            <span>MAKE EVERY DROP COUNT</span>
            <h2>Don't waste the leftover.</h2>
            <p>Give every drop a second life. 💧</p>
          </div>

          <a href="/signup" className="cta-btn">
            Join the Movement →
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;