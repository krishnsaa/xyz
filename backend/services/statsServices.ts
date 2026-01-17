import { QuestionAnsweredEvent } from "../types/events";
import { UserStatsModel } from "../models/UserStats.model";

export class StatsService {
  static async update(event: QuestionAnsweredEvent) {
    const stats =
      (await UserStatsModel.findOne({ userId: event.userId })) ??
      (await UserStatsModel.create({ userId: event.userId }));

    stats.total++;
    stats.totalTime += event.reactionTimeMs;

    if (event.correct) {
      stats.correct++;
      stats.streak++;
      stats.totalXP += Math.max(5, 20 - Math.floor(event.reactionTimeMs / 500));
    } else {
      stats.streak = 0;
    }

    await stats.save();
  }
}