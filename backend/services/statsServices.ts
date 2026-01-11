import { QuestionAnsweredEvent } from "../types/events";
import { userStats } from "../store/memoryStore";

export class StatsService {
  static update(event: QuestionAnsweredEvent) {
    const stats =
      userStats[event.userId] ??
      (userStats[event.userId] = {
        totalXP: 0,
        total: 0,
        correct: 0,
        totalTime: 0,
        streak: 0,
      });

    stats.total++;
    stats.totalTime += event.reactionTimeMs;

    if (event.correct) {
      stats.correct++;
      stats.streak++;
      stats.totalXP += Math.max(5, 20 - Math.floor(event.reactionTimeMs / 500));
    } else {
      stats.streak = 0;
    }
  }
}