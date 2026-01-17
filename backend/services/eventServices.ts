import { EventModel } from "../models/Event.model";
import { StatsService } from "./statsServices";
import { AchievementService } from "./achievementServices";

export class EventService {
  static async record(event: {
    userId: string;
    questionId: string;
    correct: boolean;
    reactionTimeMs: number;
  }) {
    await EventModel.create(event);

    await StatsService.update(event);
    await AchievementService.check(event.userId);
  }

  static async getAll() {
    return EventModel.find().sort({ createdAt: -1 });
  }

  static async getByUser(userId: string) {
    return EventModel.find({ userId }).sort({ createdAt: -1 });
  }
}