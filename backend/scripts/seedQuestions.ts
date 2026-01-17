import "dotenv/config"; // 👈 THIS IS THE KEY LINE
import mongoose from "mongoose";
import { QuestionModel } from "../models/Question.model";

async function seed() {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not defined in environment variables");
  }

  await mongoose.connect(process.env.MONGO_URL);

  await QuestionModel.insertMany([
    {
      text: "What is M in MERN?",
      options: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
      correctIndex: 0,
      domain: "mern",
    },
    {
      text: "TypeScript is a superset of?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctIndex: 2,
      domain: "typescript",
    },
  ]);

  console.log("✅ Questions seeded successfully");
  process.exit(0);
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});