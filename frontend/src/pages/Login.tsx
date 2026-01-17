import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api, setAuthToken } from "../api/api";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    if (!userId || !password || loading) return;

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", {
        userId,
        password,
      });

      setAuthToken(res.data.token);

      setUser({
        userId: res.data.user.userId,
        name: res.data.user.name,
        token: res.data.token,
      });

      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Invalid credentials");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* REGISTER BUTTON */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #4f46e5",
            background: "#fff",
            color: "#4f46e5",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>

      {/* LOGIN CARD */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: 380,
            padding: 28,
            borderRadius: 24,
            background: "#ffffff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: 20, textAlign: "center", fontWeight: 700 }}>
            🎓 Student Login
          </h2>

          {/* USER ID */}
          <label style={{ fontWeight: 600, fontSize: 14 }}>Student ID</label>
          <input
            type="text"
            placeholder="Enter userId"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setError("");
            }}
            style={{
              width: "98%",
              marginTop: 6,
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid #e5e7eb",
              fontSize: 15,
              outline: "none",
            }}
          />

          {/* PASSWORD */}
          <label
            style={{
              fontWeight: 600,
              fontSize: 14,
              marginTop: 16,
              display: "block",
            }}
          >
            Password
          </label>

          <div style={{ position: "relative", marginTop: 6 }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              style={{
                width: "90%",
                padding: "12px 44px 12px 14px",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                fontSize: 15,
                outline: "none",
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            disabled={!userId || !password || loading}
            style={{
              width: "100%",
              marginTop: 24,
              padding: "14px 0",
              borderRadius: 16,
              border: "none",
              background:
                !userId || !password || loading
                  ? "#c7d2fe"
                  : "linear-gradient(135deg, #4f46e5, #6366f1)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              cursor:
                !userId || !password || loading
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p
              style={{
                marginTop: 16,
                textAlign: "center",
                color: "#dc2626",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}