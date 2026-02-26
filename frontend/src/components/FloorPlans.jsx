import { useState } from "react";
import "../styles/FloorPlans.css";

const FloorPlans = () => {
  const [activeWing, setActiveWing] = useState("East Wing");
  const [activeBHK, setActiveBHK] = useState("1 bhk");

  const wings = ["East Wing", "West Wing", "North Wing", "South Wing"];
  const bhkOptions = ["1 bhk", "2 bhk", "5.6 bhk"];

  const floorData = {
    "1 bhk": { type: "1Bhk", area: "380-411 RCA Sq.ft" },
    "2 bhk": { type: "2Bhk", area: "580-620 RCA Sq.ft" },
    "5.6 bhk": { type: "5.6Bhk", area: "1200-1400 RCA Sq.ft" },
  };

  return (
    <section id="floorplans" className="floor-plans">
      <div className="floor-plans-container">
        {/* Wing Tabs */}
        <div className="wing-tabs">
          {wings.map((wing) => (
            <button
              key={wing}
              className={`wing-tab ${activeWing === wing ? "active" : ""}`}
              onClick={() => setActiveWing(wing)}
            >
              {wing}
            </button>
          ))}
        </div>

        <div className="floor-plan-content">
          {/* Floor Plan Image */}
          <div className="floor-plan-image">
            <div className="floor-plan-placeholder">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="300" fill="#f5f5f5" rx="12" />
                {/* Apartment layout */}
                <rect
                  x="30"
                  y="30"
                  width="240"
                  height="240"
                  fill="#fff"
                  stroke="#ddd"
                  strokeWidth="2"
                />
                {/* Room 1 - Bedroom */}
                <rect
                  x="30"
                  y="30"
                  width="120"
                  height="130"
                  fill="#f8e8e8"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <rect
                  x="60"
                  y="60"
                  width="60"
                  height="40"
                  fill="#e57373"
                  rx="4"
                  opacity="0.6"
                />
                <text x="75" y="85" fontSize="10" fill="#333">
                  Bed
                </text>
                {/* Room 2 - Kitchen */}
                <rect
                  x="150"
                  y="30"
                  width="120"
                  height="70"
                  fill="#e8f5e9"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="185" y="70" fontSize="10" fill="#333">
                  Kitchen
                </text>
                {/* Room 3 - Living */}
                <rect
                  x="150"
                  y="100"
                  width="120"
                  height="100"
                  fill="#e3f2fd"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="185" y="155" fontSize="10" fill="#333">
                  Living
                </text>
                {/* Room 4 - Bath */}
                <rect
                  x="30"
                  y="160"
                  width="60"
                  height="50"
                  fill="#e0f7fa"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="38" y="190" fontSize="9" fill="#333">
                  Bath
                </text>
                {/* Balcony */}
                <rect
                  x="30"
                  y="210"
                  width="120"
                  height="60"
                  fill="#f1f8e9"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="60" y="245" fontSize="10" fill="#333">
                  Balcony
                </text>
                {/* Hall */}
                <rect
                  x="90"
                  y="160"
                  width="60"
                  height="50"
                  fill="#fff3e0"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="100" y="190" fontSize="9" fill="#333">
                  Hall
                </text>
                {/* Door markers */}
                <rect
                  x="150"
                  y="200"
                  width="120"
                  height="70"
                  fill="#fce4ec"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text x="180" y="240" fontSize="10" fill="#333">
                  Dining
                </text>
              </svg>
            </div>
          </div>

          {/* Floor Plan Details */}
          <div className="floor-plan-details">
            {/* BHK Tabs */}
            <div className="bhk-tabs">
              {bhkOptions.map((bhk) => (
                <button
                  key={bhk}
                  className={`bhk-tab ${activeBHK === bhk ? "active" : ""}`}
                  onClick={() => setActiveBHK(bhk)}
                >
                  {bhk}
                </button>
              ))}
            </div>

            <div className="plan-info">
              <p>
                <strong>Type-</strong> {floorData[activeBHK].type}
              </p>
              <p>
                <strong>Area-</strong> {floorData[activeBHK].area}
              </p>
              <p>
                <strong>Price -</strong>Click for price
              </p>
            </div>

            <button className="download-plan-btn">Download Floor Plan</button>

            {/* Thumbnails */}
            <div className="plan-thumbnails">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="thumbnail">
                  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" fill="#f0f0f0" rx="4" />
                    <rect
                      x="10"
                      y="10"
                      width="60"
                      height="60"
                      fill="#e0e0e0"
                      stroke="#ccc"
                    />
                    <line x1="10" y1="40" x2="70" y2="40" stroke="#ccc" />
                    <line x1="40" y1="10" x2="40" y2="70" stroke="#ccc" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
