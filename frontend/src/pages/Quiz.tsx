import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../api/api";
import { questions } from "../data/questions";
import { useAuth } from "../auth/AuthContext";
type AnswerState = "idle" | "correct" | "wrong";

export default function Quiz() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [locked, setLocked] = useState(false);

  const startTimeRef = useRef<number>(performance.now());

  const question = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);

  /* ---------- Handle Answer ---------- */
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
      questionId: question.id,
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

  useEffect(() => {
    startTimeRef.current = performance.now();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
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

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.35 }}
        >
          <h2 style={{ marginBottom: 20 }}>{question.text}</h2>

          {question.options.map((opt, i) => {
            const isCorrect = i === question.correctIndex;
            const isSelected = answerState !== "idle" && locked;

            let bg = "#334155";
            if (isSelected && isCorrect) bg = "#22c55e";
            if (isSelected && !isCorrect && i === question.correctIndex)
              bg = "#22c55e";
            if (isSelected && !isCorrect && !isCorrect)
              bg = "#ef4444";

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