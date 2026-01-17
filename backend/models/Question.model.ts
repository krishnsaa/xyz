import { Schema, model } from "mongoose";

const QuestionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length === 4,
        message: "Options must contain exactly 4 items",
      },
    },

    correctIndex: {
      type: Number,
      required: true,
    },

    domain: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const QuestionModel = model("Question", QuestionSchema);