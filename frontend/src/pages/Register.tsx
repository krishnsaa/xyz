import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../api/api";
import { CSSProperties } from "react";


export default function Register() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!userId || !password || loading) return;

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/register", {
        userId,
        password,
      });

      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Registration failed");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  const errorStyle: CSSProperties = {
  marginTop: 10,
  textAlign: "center",
  color: "red",
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          width: 400,
          background: "#fff",
          padding: 28,
          borderRadius: 24,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          📝 Register
        </h2>


        <input
          placeholder="Name"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={register}
          disabled={!userId || !password || loading}
          style={buttonStyle}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <p style={errorStyle}>{error}</p>}

        <p style={{ textAlign: "center", marginTop: 12 }}>
          Already have an account?{" "}
          <span
            style={{ color: "#4f46e5", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
      <div
  style={{
    marginBottom: 20,
    textAlign: "center",
    color: "#4f46e5",
  }}
>
  <p
    style={{
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.5px",
    }}
  >
    A Domain Based Quiz System
  </p>
  <p
    style={{
      fontSize: 13,
      color: "#6b7280",
      marginTop: 4,
    }}
  >
    by Krishan Pal Singh
  </p>
</div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: 12,
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg, #4f46e5, #6366f1)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const errorStyle = {
  marginTop: 12,
  textAlign: "center",
  color: "#dc2626",
};