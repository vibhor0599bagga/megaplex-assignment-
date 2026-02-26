import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../context/ContentContext";
import "./Admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { content, updateSection, fetchContent } = useContent();
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  useEffect(() => {
    if (content && content[activeTab]) {
      setFormData(JSON.parse(JSON.stringify(content[activeTab])));
    }
  }, [activeTab, content]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const handleSave = async () => {
    setSaving(true);
    const success = await updateSection(activeTab, formData);
    setSaving(false);
    if (success) {
      setSavedMsg("✅ Saved successfully!");
      setTimeout(() => setSavedMsg(""), 3000);
    } else {
      setSavedMsg("❌ Failed to save. Is the backend running?");
      setTimeout(() => setSavedMsg(""), 4000);
    }
  };

  const setNestedValue = (obj, path, value) => {
    const keys = path.split(".");
    const result = { ...obj };
    let curr = result;
    for (let i = 0; i < keys.length - 1; i++) {
      curr[keys[i]] = Array.isArray(curr[keys[i]])
        ? [...curr[keys[i]]]
        : { ...curr[keys[i]] };
      curr = curr[keys[i]];
    }
    curr[keys[keys.length - 1]] = value;
    return result;
  };

  const handleChange = (path, value) => {
    setFormData((prev) => setNestedValue(prev, path, value));
  };

  const handleArrayChange = (arrayKey, index, field, value) => {
    setFormData((prev) => {
      const arr = [...(prev[arrayKey] || [])];
      arr[index] = { ...arr[index], [field]: value };
      return { ...prev, [arrayKey]: arr };
    });
  };

  const addArrayItem = (arrayKey, template) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: [...(prev[arrayKey] || []), template],
    }));
  };

  const removeArrayItem = (arrayKey, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: prev[arrayKey].filter((_, i) => i !== index),
    }));
  };

  const tabs = [
    { key: "hero", label: "🏠 Hero" },
    { key: "aboutProject", label: "📋 About Project" },
    { key: "amenities", label: "🏊 Amenities" },
    { key: "aboutDeveloper", label: "👷 Developer" },
    { key: "constructionUpdates", label: "🏗️ Construction" },
    { key: "faq", label: "❓ FAQ" },
  ];

  const renderHeroForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <h3>Banner Text</h3>
        <Field
          label="Line 1 (italic)"
          value={formData.heading1}
          onChange={(v) => handleChange("heading1", v)}
        />
        <Field
          label="Line 2"
          value={formData.heading2}
          onChange={(v) => handleChange("heading2", v)}
        />
        <Field
          label="Line 3 (bold green)"
          value={formData.heading3}
          onChange={(v) => handleChange("heading3", v)}
        />
        <Field
          label="Feature 1"
          value={formData.feature1}
          onChange={(v) => handleChange("feature1", v)}
        />
        <Field
          label="Feature 2"
          value={formData.feature2}
          onChange={(v) => handleChange("feature2", v)}
        />
      </div>
      <div className="form-section">
        <h3>Branding</h3>
        <Field
          label="Brand Subtitle"
          value={formData.brandSubtitle}
          onChange={(v) => handleChange("brandSubtitle", v)}
        />
        <Field
          label="Brand Title"
          value={formData.brandTitle}
          onChange={(v) => handleChange("brandTitle", v)}
        />
      </div>
      <div className="form-section">
        <h3>1 BHK Pricing</h3>
        <Field
          label="Title"
          value={formData.bhk1?.title}
          onChange={(v) => handleChange("bhk1.title", v)}
        />
        <Field
          label="Original Price (strikethrough)"
          value={formData.bhk1?.originalPrice}
          onChange={(v) => handleChange("bhk1.originalPrice", v)}
        />
        <Field
          label="Current Price"
          value={formData.bhk1?.currentPrice}
          onChange={(v) => handleChange("bhk1.currentPrice", v)}
        />
      </div>
      <div className="form-section">
        <h3>2 BHK Pricing</h3>
        <Field
          label="Title"
          value={formData.bhk2?.title}
          onChange={(v) => handleChange("bhk2.title", v)}
        />
        <Field
          label="Original Price (strikethrough)"
          value={formData.bhk2?.originalPrice}
          onChange={(v) => handleChange("bhk2.originalPrice", v)}
        />
        <Field
          label="Current Price"
          value={formData.bhk2?.currentPrice}
          onChange={(v) => handleChange("bhk2.currentPrice", v)}
        />
      </div>
      <div className="form-section">
        <h3>Location</h3>
        <Field
          label="Location Line 1"
          value={formData.locationLine1}
          onChange={(v) => handleChange("locationLine1", v)}
        />
        <Field
          label="Location Line 2"
          value={formData.locationLine2}
          onChange={(v) => handleChange("locationLine2", v)}
        />
      </div>
    </div>
  );

  const renderAboutProjectForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <Field
          label="Section Title"
          value={formData.title}
          onChange={(v) => handleChange("title", v)}
        />
        <Field
          label="Paragraph 1"
          value={formData.paragraph1}
          onChange={(v) => handleChange("paragraph1", v)}
          textarea
        />
        <Field
          label="Paragraph 2 (quote)"
          value={formData.paragraph2}
          onChange={(v) => handleChange("paragraph2", v)}
          textarea
        />
        <Field
          label="Button Text"
          value={formData.buttonText}
          onChange={(v) => handleChange("buttonText", v)}
        />
      </div>
    </div>
  );

  const renderAmenitiesForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <Field
          label="Section Title"
          value={formData.title}
          onChange={(v) => handleChange("title", v)}
        />
        <Field
          label="Subtitle"
          value={formData.subtitle}
          onChange={(v) => handleChange("subtitle", v)}
          textarea
        />
        <Field
          label="View More Button Text"
          value={formData.viewMoreText}
          onChange={(v) => handleChange("viewMoreText", v)}
        />
      </div>
      <div className="form-section">
        <h3>Amenity Items</h3>
        {(formData.items || []).map((item, i) => (
          <div key={i} className="array-item">
            <span className="array-index">#{i + 1}</span>
            <input
              value={item.label}
              onChange={(e) =>
                handleArrayChange("items", i, "label", e.target.value)
              }
              placeholder="Label"
            />
            <select
              value={item.icon}
              onChange={(e) =>
                handleArrayChange("items", i, "icon", e.target.value)
              }
            >
              {["gymnasium", "kids", "kids2", "jogging", "yoga", "yoga2"].map(
                (ic) => (
                  <option key={ic} value={ic}>
                    {ic}
                  </option>
                ),
              )}
            </select>
            <button
              className="remove-btn"
              onClick={() => removeArrayItem("items", i)}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          className="add-btn"
          onClick={() =>
            addArrayItem("items", { icon: "gymnasium", label: "New Amenity" })
          }
        >
          + Add Amenity
        </button>
      </div>
    </div>
  );

  const renderDeveloperForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <Field
          label="Section Title"
          value={formData.title}
          onChange={(v) => handleChange("title", v)}
        />
        <Field
          label="Description"
          value={formData.description}
          onChange={(v) => handleChange("description", v)}
          textarea
        />
      </div>
      <div className="form-section">
        <h3>Stats</h3>
        {(formData.stats || []).map((stat, i) => (
          <div key={i} className="array-item">
            <span className="array-index">#{i + 1}</span>
            <input
              value={stat.number}
              onChange={(e) =>
                handleArrayChange("stats", i, "number", e.target.value)
              }
              placeholder="Number"
            />
            <input
              value={stat.label}
              onChange={(e) =>
                handleArrayChange("stats", i, "label", e.target.value)
              }
              placeholder="Label"
            />
            <button
              className="remove-btn"
              onClick={() => removeArrayItem("stats", i)}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          className="add-btn"
          onClick={() =>
            addArrayItem("stats", { number: "0", label: "New Stat" })
          }
        >
          + Add Stat
        </button>
      </div>
    </div>
  );

  const renderConstructionForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <Field
          label="Section Title"
          value={formData.title}
          onChange={(v) => handleChange("title", v)}
        />
      </div>
      <div className="form-section">
        <h3>Updates</h3>
        {(formData.updates || []).map((update, i) => (
          <div key={i} className="array-item vertical">
            <span className="array-index">Card #{i + 1}</span>
            <input
              value={update.status}
              onChange={(e) =>
                handleArrayChange("updates", i, "status", e.target.value)
              }
              placeholder="Status (e.g. Completed)"
            />
            <input
              value={update.label}
              onChange={(e) =>
                handleArrayChange("updates", i, "label", e.target.value)
              }
              placeholder="Label (e.g. Tower 4)"
            />
            <input
              value={update.cta}
              onChange={(e) =>
                handleArrayChange("updates", i, "cta", e.target.value)
              }
              placeholder="Button text (e.g. Know More)"
            />
            <button
              className="remove-btn"
              onClick={() => removeArrayItem("updates", i)}
            >
              ✕ Remove
            </button>
          </div>
        ))}
        <button
          className="add-btn"
          onClick={() =>
            addArrayItem("updates", {
              status: "Completed",
              label: "",
              cta: "Know More",
            })
          }
        >
          + Add Update Card
        </button>
      </div>
    </div>
  );

  const renderFAQForm = () => (
    <div className="form-sections">
      <div className="form-section">
        <Field
          label="Section Title"
          value={formData.title}
          onChange={(v) => handleChange("title", v)}
        />
      </div>
      <div className="form-section">
        <h3>FAQ Items</h3>
        {(formData.items || []).map((item, i) => (
          <div key={i} className="array-item vertical">
            <span className="array-index">Q#{i + 1}</span>
            <input
              value={item.question}
              onChange={(e) =>
                handleArrayChange("items", i, "question", e.target.value)
              }
              placeholder="Question"
            />
            <textarea
              value={item.answer}
              onChange={(e) =>
                handleArrayChange("items", i, "answer", e.target.value)
              }
              placeholder="Answer"
              rows={3}
            />
            <button
              className="remove-btn"
              onClick={() => removeArrayItem("items", i)}
            >
              ✕ Remove
            </button>
          </div>
        ))}
        <button
          className="add-btn"
          onClick={() =>
            addArrayItem("items", {
              question: "New question?",
              answer: "Answer here.",
            })
          }
        >
          + Add FAQ
        </button>
      </div>
    </div>
  );

  const renderForm = () => {
    switch (activeTab) {
      case "hero":
        return renderHeroForm();
      case "aboutProject":
        return renderAboutProjectForm();
      case "amenities":
        return renderAmenitiesForm();
      case "aboutDeveloper":
        return renderDeveloperForm();
      case "constructionUpdates":
        return renderConstructionForm();
      case "faq":
        return renderFAQForm();
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>⚙️ Admin</h2>
          <p>Content Manager</p>
        </div>
        <nav className="sidebar-nav">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`sidebar-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <a href="/" target="_blank" className="view-site-btn">
            👁 View Site
          </a>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-topbar">
          <h2>{tabs.find((t) => t.key === activeTab)?.label} — Edit Content</h2>
          <div className="admin-actions">
            {savedMsg && <span className="save-msg">{savedMsg}</span>}
            <button className="save-btn" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "💾 Save Changes"}
            </button>
          </div>
        </div>

        <div className="admin-form-area">
          {content && formData ? (
            renderForm()
          ) : (
            <p className="loading-msg">Loading content...</p>
          )}
        </div>
      </main>
    </div>
  );
};

const Field = ({ label, value, onChange, textarea }) => (
  <div className="form-group">
    <label>{label}</label>
    {textarea ? (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    ) : (
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

export default AdminDashboard;
