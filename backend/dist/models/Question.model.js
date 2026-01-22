"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModel = void 0;
const mongoose_1 = require("mongoose");
const QuestionSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
        validate: {
            validator: (v) => v.length === 4,
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
}, { timestamps: true });
exports.QuestionModel = (0, mongoose_1.model)("Question", QuestionSchema);
