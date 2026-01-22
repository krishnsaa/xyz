"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBadgeModel = void 0;
const mongoose_1 = require("mongoose");
const UserBadgeSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    badges: { type: [String], default: [] },
}, { timestamps: true });
exports.UserBadgeModel = (0, mongoose_1.model)("UserBadge", UserBadgeSchema);
