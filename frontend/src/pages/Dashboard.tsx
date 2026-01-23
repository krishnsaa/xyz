import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

import { CSSProperties } from "react";

const MOTIVATION_QUOTES = {
  start: [
    "Every expert was once a beginner 🔥",
    "Start today. Progress follows 🌱",
  ],
  low: [
    "Progress beats perfection 💙",
    "Effort builds mastery 🚶‍♂️",
  ],
  mid: [
    "Great progress — keep pushing 🚀",
    "Consistency is your strength 📈",
  ],
  high: [
    "Excellent accuracy! 🎯",
    "You’re mastering this 🏆",
  ],
};

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [summary, setSummary] = useState<any>(null);
  const [badges, setBadges] = useState<string[]>([]);
  const [history, setHistory] = useState<any[]>([]);
  const [domain, setDomain] = useState("");

const startQuiz = () => {
  navigate(`/quiz?domain=${domain}`);
};

const DOMAINS = [
  { value: "c", label: "C Programming" },
  { value: "cpp", label: "C++ Programming" },
  { value: "java", label: "Java" },
  { value: "dsa", label: "Data Structures & Algorithms" },
  { value: "ai", label: "Artificial Intelligence" },
  { value: "python", label: "Python" },
  { value: "data_analytics", label: "Data Analytics" },
  { value: "react", label: "React" },
  { value: "mern", label: "MERN Stack" },
  { value: "java_app_dev", label: "Java Application Development" },
  { value: "flutter", label: "Flutter" },
];

  useEffect(() => {
    const load = async () => {
      const [s, b, h] = await Promise.all([
        api.get("/dashboard/summary"),
        api.get("/dashboard/badges"),
        api.get("/dashboard/history"),
      ]);

      setSummary(s.data);
      setBadges(b.data.earned);
      setHistory(h.data);
    };

    load();
  }, []);
  const quoteBox: CSSProperties = {
  marginTop: 20,
  padding: 15,
  borderRadius: 8,
  background: "#e5d1d1",
  textAlign: "center",
  fontSize: 27,
  fontWeight: 600,
};

  const getQuote = () => {
    if (!summary) return "";
    const acc = summary.accuracy ?? 0;
    if (acc === 0) return random(MOTIVATION_QUOTES.start);
    if (acc < 50) return random(MOTIVATION_QUOTES.low);
    if (acc < 90) return random(MOTIVATION_QUOTES.mid);
    return random(MOTIVATION_QUOTES.high);
  };

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  }}
>
  <div style={{ display: "flex", gap: 12 }}>
    <select
      value={domain}
      onChange={e => setDomain(e.target.value)}
      style={{
        padding: "10px 14px",
        borderRadius: 40,
        border: "5px solid #cbd5f5",
        fontWeight: 600,
      }}
    >
      <option 
      style={{
        padding: "10px 14px",
        borderRadius: 40,
        border: "5px solid #cbd5f5",
        fontWeight: 600,

      }}
      value="">Select domain</option>
      {DOMAINS.map(d => (
        <option key={d.value} value={d.value}>
          {d.label}
        </option>
      ))}
    </select>

    <button
      onClick={startQuiz}
      disabled={!domain}
      style={{
        ...primaryBtn,
        opacity: domain ? 1 : 0.6,
        cursor: domain ? "pointer" : "not-allowed",
      }}
    >
      Start Quiz
    </button>
  </div>
  console.log("user:",userId);

  <div style={userBadge}>👤 {user?.userId}</div>
</div>

      {/* Stats */}
      <div style={grid}>
        <StatCard title="⭐ Total XP" value={summary?.totalXP ?? 0} />
        <StatCard
          title="🎯 Accuracy"
          value={`${summary?.accuracy?.toFixed(1) ?? 0}%`}
        />
        <StatCard
          title="⏱ Avg Reaction"
          value={`${summary?.avgReactionTime?.toFixed(0) ?? 0} ms`}
        />
      </div>

      {/* Badges */}
      <Section title="🏅 Badges">
        {badges.length === 0
          ? "No badges yet"
          : badges.map(b => <Badge key={b}>{b}</Badge>)}
      </Section>

      {/* History */}
      {/* <Section title="📜 Recent Activity">
        {history.slice(0, 5).map(e => (
          <div key={e._id}>
            {e.questionId} • {e.correct ? "✅" : "❌"} •{" "}
            {e.reactionTimeMs} ms
          </div>
        ))}
      </Section> */}

      {/* Motivation */}
      <div style={quoteBox}>💡 {getQuote()}</div>
    </div>
  );
}

/* ---------- Helpers ---------- */

const random = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const primaryBtn = {
  padding: "12px 20px",
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg,#4f46e5,#6366f1)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const userBadge = {
  padding: "10px 16px",
  borderRadius: 14,
  background: "#f1f5f9",
  fontWeight: 600,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: 20,
  marginTop: 24,
};

const StatCard = ({ title, value }: any) => (
  <div style={card}>
    <h3>{title}</h3>
    <p style={{ fontSize: 32, fontWeight: 700 }}>{value}</p>
  </div>
);

const card = {
  padding: 20,
  borderRadius: 20,
  background: "#fff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const Section = ({ title, children }: any) => (
  <div style={{ marginTop: 28 }}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const Badge = ({ children }: any) => (
  <span
    style={{
      display: "inline-block",
      marginRight: 10,
      padding: "8px 14px",
      borderRadius: 14,
      background: "#22c55e",
      color: "white",
      fontWeight: 600,
    }}
  >
    {children}
  </span>
);

const quoteBox = {
  marginTop: 30,
  padding: 22,
  borderRadius: 22,
  background: "linear-gradient(135deg,#f0f9ff,#eef2ff)",
  textAlign: "center",
  fontSize: 18,
  fontWeight: 600,
};