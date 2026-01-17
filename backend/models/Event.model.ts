import { Schema, model } from "mongoose";

const EventSchema = new Schema(
  {
    userId: { type: String, required: true },
    questionId: { type: String, required: true },
    correct: { type: Boolean, required: true },
    reactionTimeMs: { type: Number, required: true },
  },
  { timestamps: true }
);

export const EventModel = model("Event", EventSchema);