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
    <div className="card" style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>

      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value="">Select User</option>
        <option value="user1">Krishna</option>
        <option value="user2">Aryan</option>
        <option value="user3">Abhi</option>
        <option value="user4">Arpita</option>
      </select>

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login} disabled={!userId || !password}>
        Login
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}