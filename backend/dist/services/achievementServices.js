"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementService = void 0;
const UserStats_model_1 = require("../models/UserStats.model");
const UserBadge_model_1 = require("../models/UserBadge.model");
class AchievementService {
    static check(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const stats = yield UserStats_model_1.UserStatsModel.findOne({ userId });
            if (!stats)
                return;
            const badgeDoc = (_a = (yield UserBadge_model_1.UserBadgeModel.findOne({ userId }))) !== null && _a !== void 0 ? _a : (yield UserBadge_model_1.UserBadgeModel.create({ userId, badges: [] }));
            if (stats.streak >= 5 && !badgeDoc.badges.includes("Streak Master")) {
                badgeDoc.badges.push("Streak Master");
            }
            if (stats.totalXP >= 100 && !badgeDoc.badges.includes("XP Hunter")) {
                badgeDoc.badges.push("XP Hunter");
            }
            yield badgeDoc.save();
        });
    }
}
exports.AchievementService = AchievementService;
