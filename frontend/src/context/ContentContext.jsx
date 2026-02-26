import { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext(null);

const defaultContent = {
  hero: {
    heading1: "THINKING",
    heading2: "OF A",
    heading3: "FANTASTIC VICINITY?",
    feature1: "20+ PODIUM LUXURIOUS AMENITIES",
    feature2: "SPACIOUS BALCONY HOMES*",
    brandSubtitle: "VIGHNAHARTA",
    brandTitle: "INFINITY",
    bhk1: {
      title: "SMART 1 BHK",
      originalPrice: "74.99 Lacs",
      currentPrice: "69.99 Lacs*",
    },
    bhk2: {
      title: "PREMIUM 2 BHK",
      originalPrice: "1.05 CR",
      currentPrice: "96.99 Lacs*",
    },
    locationLine1: "BLDG. NO. 223/224,",
    locationLine2: "CIRCLE KANNAMWAR NAGAR 1, VIKHROLI (EAST)",
  },
  aboutProject: {
    title: "About Project",
    paragraph1:
      "At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.",
    paragraph2:
      '"The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve.',
    buttonText: "Download Brochure",
  },
  amenities: {
    title: "Amenities",
    subtitle: "20+ Podium Luxurious Amenities",
    items: [
      { icon: "pool", label: "Swimming Pool" },
      { icon: "gym", label: "Gymnasium" },
      { icon: "garden", label: "Landscaped Garden" },
      { icon: "clubhouse", label: "Clubhouse" },
      { icon: "play", label: "Children's Play Area" },
      { icon: "security", label: "24/7 Security" },
    ],
    viewMoreText: "View More",
  },
  aboutDeveloper: {
    title: "About Developer",
    description:
      "Vighnaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living.",
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "5000+", label: "Happy Families" },
      { number: "10+", label: "Awards Won" },
    ],
  },
  constructionUpdates: {
    title: "Construction Updates",
    updates: [
      { status: "Completed", label: "", cta: "Know More" },
      { status: "Completed", label: "", cta: "Know More" },
      { status: "Completed", label: "Tower 5", cta: "Know More" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question:
          "What makes Vighnaharta a trusted name in real estate in Vikhroli?",
        answer:
          "Vighnaharta has established itself as a trusted name through consistent quality construction, timely delivery, and customer-centric approach in the Vikhroli area.",
      },
      {
        question:
          "What types of residential projects does Vighnaharta offer in Vikhroli?",
        answer:
          "Vighnaharta offers a range of residential projects including 1 BHK, 2 BHK, and premium apartments with modern amenities and spacious layouts.",
      },
      {
        question:
          "Why should I invest in Vighnaharta's new projects in Vikhroli?",
        answer:
          "Vikhroli is a rapidly developing area with excellent connectivity, infrastructure, and appreciation potential.",
      },
      {
        question:
          "How does Vighnaharta ensure quality and sustainability in its projects?",
        answer:
          "Vighnaharta follows strict quality standards, uses premium materials, and incorporates sustainable design practices in all their projects.",
      },
      {
        question:
          "How can I learn about upcoming residential projects by Vighnaharta in Vikhroli?",
        answer:
          "You can stay updated by visiting our website, following us on social media, or contacting our sales team for the latest project information.",
      },
    ],
  },
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(false);

  const fetchContent = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/content");
      const data = await res.json();
      setContent(data);
    } catch (err) {
      console.error("Failed to load content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const updateSection = async (section, newData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/content/${section}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      if (result.success) {
        setContent((prev) => ({ ...prev, [section]: result.data }));
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to update section:", err);
      return false;
    }
  };

  return (
    <ContentContext.Provider
      value={{ content, loading, updateSection, fetchContent }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
