import { QuestionAnsweredEvent } from "../types/events";

export const eventStore: QuestionAnsweredEvent[] = [];

export const userStats: Record<
  string,
  {
    totalXP: number;
    total: number;
    correct: number;
    totalTime: number;
    streak: number;
  }
> = {};

export const userBadges: Record<string, string[]> = {};