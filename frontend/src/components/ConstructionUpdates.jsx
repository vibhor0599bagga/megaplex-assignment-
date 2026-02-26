import { useContent } from "../context/ContentContext";
import "../styles/ConstructionUpdates.css";

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=350&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=350&fit=crop",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=350&fit=crop",
];

const ConstructionUpdates = () => {
  const { content, loading } = useContent();
  const d = content?.constructionUpdates;

  if (loading || !d)
    return (
      <section className="construction-updates" style={{ minHeight: 300 }} />
    );

  return (
    <section className="construction-updates">
      <div className="construction-container">
        <h2>{d.title}</h2>
        <div className="updates-grid">
          {d.updates.map((update, index) => (
            <div key={index} className="update-card">
              <div className="update-image">
                <img src={images[index]} alt={update.status} />
                <div className="update-overlay">
                  <span className="update-status">{update.status}</span>
                  {update.label && (
                    <span className="update-label">{update.label}</span>
                  )}
                  <button className="update-cta">{update.cta}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionUpdates;
