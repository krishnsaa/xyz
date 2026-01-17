import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../api/api";
import { useAuth } from "../auth/AuthContext";

export interface Question {
  _id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

type AnswerState = "idle" | "correct" | "wrong";

export default function Quiz() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const domain = new URLSearchParams(location.search).get("domain");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [locked, setLocked] = useState(false);

  const startTimeRef = useRef<number>(performance.now());
  useEffect(() => {
    if (!domain) return;

    api
      .get(`/quiz/start?domain=${domain}`)
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
        startTimeRef.current = performance.now();
      })
      .catch(() => {
        setLoading(false);
      });
  }, [domain]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading quiz...</p>;
  }

  if (!questions.length) {
    return <p style={{ textAlign: "center" }}>No questions found</p>;
  }

  const question = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);

  const handleAnswer = async (optionIndex: number) => {
    if (locked) return;

    setLocked(true);

    const correct = optionIndex === question.correctIndex;
    setAnswerState(correct ? "correct" : "wrong");

    const reactionTimeMs = Math.round(
      performance.now() - startTimeRef.current
    );

    await api.post("/session/answer", {
      userId: user.userId,
      questionId: question._id.toString(),
      correct,
      reactionTimeMs,
    });

    setTimeout(() => {
      if (index + 1 >= questions.length) {
        navigate("/dashboard");
        return;
      }

      setIndex(i => i + 1);
      setAnswerState("idle");
      setLocked(false);
      startTimeRef.current = performance.now();
    }, 900);
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      {/* Progress Bar */}
      <div
        style={{
          height: 8,
          background: "#334155",
          borderRadius: 6,
          marginBottom: 20,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: "100%",
            borderRadius: 6,
            background: "linear-gradient(90deg,#38bdf8,#22c55e)",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question._id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.35 }}
        >
          <h2 style={{ marginBottom: 20 }}>{question.text}</h2>

          {question.options.map((opt, i) => {
            let bg = "#334155";

            if (locked) {
              if (i === question.correctIndex) bg = "#22c55e";
              else if (answerState === "wrong") bg = "#ef4444";
            }

            return (
              <motion.button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={locked}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  marginBottom: 12,
                  padding: 14,
                  borderRadius: 12,
                  background: bg,
                  color: "white",
                  fontSize: 16,
                  border: "none",
                  cursor: locked ? "default" : "pointer",
                }}
              >
                {opt}
              </motion.button>
            );
          })}

          <p style={{ marginTop: 12, opacity: 0.7 }}>
            Question {index + 1} of {questions.length}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}