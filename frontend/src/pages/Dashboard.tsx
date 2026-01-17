import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const MOTIVATION_QUOTES = {
  start: [
    "Every expert was once a beginner. Start today and build your streak 🔥",
    "One small step today creates a powerful habit tomorrow 🌱",
    "Don’t wait for motivation — action creates motivation 💪",
  ],
  low: [
    "Progress matters more than perfection. Keep going 💙",
    "Every attempt makes you better than yesterday 🚶‍♂️",
    "Learning grows through effort, not instant success 📘",
  ],
  mid: [
    "Great progress! A little more focus will take you far 🚀",
    "You’re improving steadily — consistency is your superpower 📈",
  ],
  high: [
    "Excellent accuracy! Maintain the precision 🎯",
    "You’re mastering this — stay sharp and consistent 🏆",
  ],
};

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    api.get("/dashboard/summary").then((r) => setSummary(r.data));
  }, []);

  const getMotivationQuote = () => {
    if (!summary) return "";
    const accuracy = summary.accuracy ?? 0;
    let pool: string[];

    if (accuracy === 0) pool = MOTIVATION_QUOTES.start;
    else if (accuracy < 50) pool = MOTIVATION_QUOTES.low;
    else if (accuracy < 90) pool = MOTIVATION_QUOTES.mid;
    else pool = MOTIVATION_QUOTES.high;

    return pool[Math.floor(Math.random() * pool.length)];
  };

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <button
          onClick={() => navigate("/quiz")}
          style={{
            padding: "12px 20px",
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(79,70,229,0.3)",
          }}
        >
          ▶ Start Quiz
        </button>

        <div
          style={{
            padding: "10px 16px",
            borderRadius: 14,
            background: "#f1f5f9",
            fontWeight: 600,
          }}
        >
          👤 {user.userId}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 20,
            borderRadius: 20,
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0, color: "#4f46e5" }}>⭐ Total XP</h3>
          <p style={{ fontSize: 32, fontWeight: 700, marginTop: 12 }}>
            {summary?.totalXP ?? 0}
          </p>
        </div>

        <div
          style={{
            padding: 20,
            borderRadius: 20,
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0, color: "#16a34a" }}>🎯 Accuracy</h3>
          <p style={{ fontSize: 32, fontWeight: 700, marginTop: 12 }}>
            {summary?.accuracy ? summary.accuracy.toFixed(1) : 0}%
          </p>
        </div>

        <div
          style={{
            padding: 20,
            borderRadius: 20,
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0, color: "#ea580c" }}>⏱ Avg Reaction Time</h3>
          <p style={{ fontSize: 32, fontWeight: 700, marginTop: 12 }}>
            {summary?.avgReactionTime
              ? summary.avgReactionTime.toFixed(0)
              : 0}{" "}
            ms
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          padding: 22,
          borderRadius: 22,
          background: "linear-gradient(135deg, #f0f9ff, #eef2ff)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 600,
            color: "#1e293b",
          }}
        >
          💡 {getMotivationQuote()}
        </p>
      </div>
    </div>
  );
}