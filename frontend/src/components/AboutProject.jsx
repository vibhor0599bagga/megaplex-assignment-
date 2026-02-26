import { useContent } from "../context/ContentContext";
import "../styles/AboutProject.css";

const AboutProject = () => {
  const { content, loading } = useContent();
  const d = content?.aboutProject;

  if (loading || !d)
    return (
      <section
        id="overview"
        className="about-project"
        style={{ minHeight: 400 }}
      />
    );

  return (
    <section id="overview" className="about-project">
      <div className="about-container">
        <div className="about-images">
          <div className="circle-image circle-large">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"
              alt="Interior"
            />
          </div>
          <div className="circle-image circle-small">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop"
              alt="Exterior"
            />
          </div>
        </div>
        <div className="about-content">
          <h2>{d.title}</h2>
          <p>{d.paragraph1}</p>
          <p className="quote">{d.paragraph2}</p>
          <button className="download-brochure-btn">{d.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
