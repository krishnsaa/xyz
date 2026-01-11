import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from "../api/api";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
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
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        fontFamily: "system-ui, sans-serif",
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
        <h2
          style={{
            marginBottom: 20,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          🎓 Student Login
        </h2>

        {/* USER SELECT */}
        <label style={{ fontWeight: 600, fontSize: 14 }}>
          Select Student
        </label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{
            width: "100%",
            marginTop: 6,
            padding: "12px 14px",
            borderRadius: 14,
            border: "1px solid #e5e7eb",
            fontSize: 15,
            outline: "none",
          }}
        >
          <option value="">Choose your name</option>
          <option value="user1">Krishna</option>
          <option value="user2">Aryan</option>
          <option value="user3">Abhi</option>
          <option value="user4">Arpita</option>
        </select>

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
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginTop: 6,
            padding: "12px 14px",
            borderRadius: 14,
            border: "1px solid #e5e7eb",
            fontSize: 15,
            outline: "none",
          }}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={login}
          disabled={!userId || !password}
          style={{
            width: "100%",
            marginTop: 24,
            padding: "14px 0",
            borderRadius: 16,
            border: "none",
            background: !userId || !password
              ? "#c7d2fe"
              : "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: !userId || !password ? "not-allowed" : "pointer",
            boxShadow:
              !userId || !password
                ? "none"
                : "0 10px 25px rgba(79,70,229,0.35)",
          }}
        >
          Login
        </button>

        {/* ERROR */}
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
  );
}