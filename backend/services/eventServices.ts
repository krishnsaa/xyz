import { EventModel } from "../models/Event.model";
import { StatsService } from "./statsServices";
import { AchievementService } from "./achievementServices";

export class EventService {
  static async record(params: {
    userId: string;
    questionId: string;
    correct: boolean;
    reactionTimeMs: number;
  }) {
    const { userId, questionId, correct, reactionTimeMs } = params;

    await EventModel.create({
      userId,
      questionId,
      correct,
      reactionTimeMs,
    });

    await StatsService.update({
  userId,
  questionId,
  correct,
  reactionTimeMs,
});
    await AchievementService.check(userId);
  }

  static async getAll() {
    return EventModel.find().sort({ createdAt: -1 });
  }

  static async getByUser(userId: string) {
    return EventModel.find({ userId }).sort({ createdAt: -1 });
  }
}