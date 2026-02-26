import { useContent } from "../context/ContentContext";
import "../styles/Hero.css";

const Hero = () => {
  const { content, loading } = useContent();
  const h = content?.hero;

  if (loading || !h)
    return <section id="home" className="hero" style={{ minHeight: 480 }} />;

  return (
    <section id="home" className="hero">
      <div className="hero-row">
        <div className="hero-banner">
          <div className="hero-overlay">
            <div className="hero-text">
              <h1>
                <span className="italic green">{h.heading1}</span>
                <br />
                <span className="thin">{h.heading2} </span>
                <span className="bold green">{h.heading3}</span>
              </h1>
              <div className="hero-features">
                <span>{h.feature1}</span>
                <span className="divider"></span>
                <span>{h.feature2}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-section">
          <div className="pricing-container">
            <div className="project-branding">
              <div className="brand-logo">
                <svg
                  className="tree-icon"
                  viewBox="0 0 80 110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#2e7d32">
                    <rect x="36" y="65" width="8" height="35" rx="4" />
                    <ellipse cx="40" cy="38" rx="28" ry="24" opacity="0.18" />
                    <ellipse cx="30" cy="42" rx="18" ry="16" opacity="0.22" />
                    <ellipse cx="50" cy="42" rx="18" ry="16" opacity="0.22" />
                    <ellipse cx="40" cy="28" rx="20" ry="18" opacity="0.25" />
                    <ellipse cx="34" cy="34" rx="12" ry="10" opacity="0.3" />
                    <ellipse cx="46" cy="34" rx="12" ry="10" opacity="0.3" />
                    <ellipse cx="40" cy="22" rx="14" ry="12" opacity="0.35" />
                  </g>
                </svg>
              </div>
              <p className="brand-subtitle">{h.brandSubtitle}</p>
              <h2 className="brand-title">{h.brandTitle}</h2>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>{h.bhk1.title}</h3>
                <p className="price-original">
                  @{" "}
                  <span className="strikethrough">{h.bhk1.originalPrice}</span>
                </p>
                <p className="price-current">
                  Rs.{" "}
                  <span className="price-amount">{h.bhk1.currentPrice}</span>
                </p>
                <p className="price-suffix">onwards</p>
              </div>
              <div className="pricing-divider"></div>
              <div className="pricing-card">
                <h3>{h.bhk2.title}</h3>
                <p className="price-original">
                  @{" "}
                  <span className="strikethrough">{h.bhk2.originalPrice}</span>
                </p>
                <p className="price-current">
                  Rs.{" "}
                  <span className="price-amount">{h.bhk2.currentPrice}</span>
                </p>
                <p className="price-suffix">onwards</p>
              </div>
            </div>
            <div className="location-info">
              <span className="location-pin">
                <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
                  <path
                    d="M11 0C4.925 0 0 4.925 0 11c0 8.25 11 19 11 19s11-10.75 11-19c0-6.075-4.925-11-11-11z"
                    fill="#e53935"
                  />
                  <circle cx="11" cy="11" r="4" fill="white" />
                </svg>
              </span>
              <p>
                <strong>{h.locationLine1}</strong>
                <br />
                <strong>{h.locationLine2}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
