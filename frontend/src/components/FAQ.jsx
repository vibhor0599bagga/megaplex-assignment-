import { useState } from "react";
import { useContent } from "../context/ContentContext";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { content, loading } = useContent();
  const d = content?.faq;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading || !d)
    return <section className="faq-section" style={{ minHeight: 300 }} />;

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>{d.title}</h2>
        <div className="faq-list">
          {d.items.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "minus" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
