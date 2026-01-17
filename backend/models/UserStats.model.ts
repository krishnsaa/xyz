import { Schema, model } from "mongoose";

const UserStatsSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    totalXP: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    totalTime: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const UserStatsModel = model("UserStats", UserStatsSchema);