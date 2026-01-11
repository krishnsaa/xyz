import { QuestionAnsweredEvent } from "../types/events";
import { eventStore } from "../store/memoryStore";
import { StatsService } from "./statsServices";
import { AchievementService } from "./achievementServices";

export class EventService {
  static record(event: Omit<QuestionAnsweredEvent, "timestamp">) {
    const fullEvent = { ...event, timestamp: Date.now() };
    eventStore.push(fullEvent);

    StatsService.update(fullEvent);
    AchievementService.check(event.userId);
  }

  static getAll() {
    return eventStore;
  }

  static getByUser(userId: string) {
    return eventStore.filter(e => e.userId === userId);
  }
}