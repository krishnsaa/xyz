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
exports.EventService = void 0;
const Event_model_1 = require("../models/Event.model");
const statsServices_1 = require("./statsServices");
const achievementServices_1 = require("./achievementServices");
class EventService {
    static record(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, questionId, correct, reactionTimeMs } = params;
            yield Event_model_1.EventModel.create({
                userId,
                questionId,
                correct,
                reactionTimeMs,
            });
            yield statsServices_1.StatsService.update({
                userId,
                questionId,
                correct,
                reactionTimeMs,
            });
            yield achievementServices_1.AchievementService.check(userId);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Event_model_1.EventModel.find().sort({ createdAt: -1 });
        });
    }
    static getByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Event_model_1.EventModel.find({ userId }).sort({ createdAt: -1 });
        });
    }
}
exports.EventService = EventService;
