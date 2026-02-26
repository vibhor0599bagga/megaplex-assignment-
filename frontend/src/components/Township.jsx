import { useState } from "react";
import "../styles/Township.css";

const buildings = [
  {
    name: "Vighnaharta Aaradhya",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=500&fit=crop",
  },
  {
    name: "Vighnaharta Enclave",
    tag: "Newly Launched",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop",
  },
  {
    name: "Vighnaharta Infinity",
    tag: "Newly Launched",
    image:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400&h=500&fit=crop",
  },
];

const Township = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : buildings.length - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < buildings.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="township">
      <div className="township-container">
        <h2>Explore More Buildings in the Township</h2>

        <div className="township-carousel">
          <button className="carousel-arrow left" onClick={handlePrev}>
            ❮
          </button>

          <div className="carousel-track">
            {buildings.map((building, index) => (
              <div key={index} className="building-card">
                <div className="building-image">
                  <img src={building.image} alt={building.name} />
                  {building.tag && (
                    <div className="building-tag">
                      <span className="tag-gradient">
                        {building.tag} - {building.name}
                      </span>
                    </div>
                  )}
                </div>
                <p className="building-name">{building.name}</p>
              </div>
            ))}
          </div>

          <button className="carousel-arrow right" onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Township;
