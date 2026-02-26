import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-logo">
            <svg
              viewBox="0 0 80 110"
              width="40"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2e7d32">
                <rect x="36" y="65" width="8" height="35" rx="4" />
                <ellipse cx="40" cy="38" rx="28" ry="24" opacity="0.3" />
                <ellipse cx="40" cy="28" rx="20" ry="18" opacity="0.5" />
                <ellipse cx="40" cy="20" rx="14" ry="12" opacity="0.7" />
              </g>
            </svg>
          </div>
          <h1>Admin Panel</h1>
          <p>Megaplex Content Manager</p>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          {error && <div className="admin-error">{error}</div>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
