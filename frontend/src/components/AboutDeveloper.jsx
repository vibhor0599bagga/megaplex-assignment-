import { useContent } from "../context/ContentContext";
import "../styles/AboutDeveloper.css";

const AboutDeveloper = () => {
  const { content, loading } = useContent();
  const d = content?.aboutDeveloper;

  if (loading || !d)
    return (
      <section
        id="developer"
        className="about-developer"
        style={{ minHeight: 300 }}
      />
    );

  return (
    <section id="developer" className="about-developer">
      <div className="developer-container">
        <h2>{d.title}</h2>
        <p className="developer-description">{d.description}</p>
        <div className="stats-bar">
          {d.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;
