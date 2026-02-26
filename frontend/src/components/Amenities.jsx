import { useContent } from "../context/ContentContext";
import { useState } from "react";
import "../styles/Amenities.css";

const amenitiesList = [
  { icon: "gymnasium", label: "Gymnasium" },
  { icon: "kids", label: "Kids Play Area" },
  { icon: "kids2", label: "Kids Play Area" },
  { icon: "jogging", label: "Jogging Track" },
  { icon: "yoga", label: "Yoga Deck" },
  { icon: "yoga2", label: "Yoga Deck" },
];

const AmenityIcon = ({ type }) => {
  const iconStyle = { fontSize: "2.5rem", color: "#2e7d32" };
  switch (type) {
    case "gymnasium":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          stroke="#2e7d32"
          strokeWidth="2"
        >
          <circle cx="25" cy="12" r="5" />
          <line x1="25" y1="17" x2="25" y2="32" />
          <line x1="15" y1="22" x2="35" y2="22" />
          <line x1="25" y1="32" x2="18" y2="44" />
          <line x1="25" y1="32" x2="32" y2="44" />
          <line x1="10" y1="18" x2="40" y2="18" strokeWidth="3" />
          <line x1="10" y1="15" x2="10" y2="21" strokeWidth="2" />
          <line x1="40" y1="15" x2="40" y2="21" strokeWidth="2" />
        </svg>
      );
    case "kids":
    case "kids2":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          stroke="#2e7d32"
          strokeWidth="2"
        >
          <line x1="10" y1="45" x2="25" y2="10" />
          <line x1="25" y1="10" x2="40" y2="45" />
          <line x1="15" y1="35" x2="35" y2="35" />
          <line x1="25" y1="10" x2="40" y2="10" />
          <circle cx="36" cy="6" r="4" />
          <line x1="33" y1="10" x2="28" y2="20" />
          <line x1="38" y1="10" x2="43" y2="18" />
        </svg>
      );
    case "jogging":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          stroke="#2e7d32"
          strokeWidth="2"
        >
          <circle cx="30" cy="8" r="5" />
          <path d="M 22 18 L 28 14 L 34 22 L 28 30 L 20 34" />
          <path d="M 28 30 L 36 40 L 40 38" />
          <path d="M 20 34 L 14 44" />
          <path d="M 34 22 L 40 18" />
        </svg>
      );
    case "yoga":
    case "yoga2":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          stroke="#2e7d32"
          strokeWidth="2"
        >
          <circle cx="25" cy="10" r="5" />
          <line x1="25" y1="15" x2="25" y2="30" />
          <path d="M 10 25 L 25 20 L 40 25" />
          <path d="M 15 35 Q 25 28 35 35" />
          <line x1="15" y1="35" x2="10" y2="42" />
          <line x1="35" y1="35" x2="40" y2="42" />
        </svg>
      );
    default:
      return null;
  }
};

const Amenities = () => {
  const { content, loading } = useContent();
  const d = content?.amenities;
  const amenitiesList = d?.items || [];

  if (loading || !d)
    return (
      <section
        id="amenities"
        className="amenities"
        style={{ minHeight: 300 }}
      />
    );

  return (
    <section id="amenities" className="amenities">
      <div className="amenities-container">
        <div className="amenities-header">
          <h2>{d.title}</h2>
          <p>{d.subtitle}</p>
        </div>

        <div className="amenities-content">
          <div className="amenities-image">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop"
              alt="Amenities View"
            />
          </div>

          <div className="amenities-grid">
            {amenitiesList.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">
                  <AmenityIcon type={amenity.icon} />
                </div>
                <p>{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="view-more-btn">{d.viewMoreText}</button>
      </div>
    </section>
  );
};

export default Amenities;
