import { Schema, model } from "mongoose";

const UserBadgeSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    badges: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const UserBadgeModel = model("UserBadge", UserBadgeSchema);