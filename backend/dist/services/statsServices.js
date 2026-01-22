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
exports.StatsService = void 0;
const UserStats_model_1 = require("../models/UserStats.model");
class StatsService {
    static update(event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const stats = (_a = (yield UserStats_model_1.UserStatsModel.findOne({ userId: event.userId }))) !== null && _a !== void 0 ? _a : (yield UserStats_model_1.UserStatsModel.create({ userId: event.userId }));
            stats.total++;
            stats.totalTime += event.reactionTimeMs;
            if (event.correct) {
                stats.correct++;
                stats.streak++;
                stats.totalXP += Math.max(5, 20 - Math.floor(event.reactionTimeMs / 500));
            }
            else {
                stats.streak = 0;
            }
            yield stats.save();
        });
    }
}
exports.StatsService = StatsService;
