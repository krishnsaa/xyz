import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [summary, setSummary] = useState<any>();

  useEffect(() => {
    api.get("/dashboard/summary").then(r => setSummary(r.data));
  }, []);

  return (
    <>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate("/quiz")}>▶ Start Quiz</button>
        <div>👤 {user.name}</div>
      </div>

      {/* STATS */}
      <div className="card" style={{ marginTop: 20 }}>
        <h3>Total XP: {summary?.totalXP}</h3>
        <p>Accuracy: {summary?.accuracy?.toFixed(1)}%</p>
        <p>Avg Time: {summary?.avgReactionTime?.toFixed(0)} ms</p>
      </div>
    </>
  );
}