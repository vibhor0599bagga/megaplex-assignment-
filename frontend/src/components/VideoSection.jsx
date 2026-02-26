import "../styles/VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&h=500&fit=crop"
          alt="City Skyline"
          className="video-bg"
        />
        <div className="video-overlay">
          <button className="play-button" aria-label="Play Video">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle
                cx="40"
                cy="40"
                r="38"
                stroke="white"
                strokeWidth="3"
                fill="transparent"
              />
              <polygon points="32,24 60,40 32,56" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
