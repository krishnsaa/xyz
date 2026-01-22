"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatsModel = void 0;
const mongoose_1 = require("mongoose");
const UserStatsSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    totalXP: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    totalTime: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
}, { timestamps: true });
exports.UserStatsModel = (0, mongoose_1.model)("UserStats", UserStatsSchema);
