"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    questionId: { type: String, required: true },
    correct: { type: Boolean, required: true },
    reactionTimeMs: { type: Number, required: true },
}, { timestamps: true });
exports.EventModel = (0, mongoose_1.model)("Event", EventSchema);
