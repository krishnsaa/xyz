import { userStats, userBadges } from "../store/memoryStore";

export class AchievementService {
  static check(userId: string) {
    const stats = userStats[userId];
    if (!stats) return;

    const badges = userBadges[userId] ?? (userBadges[userId] = []);

    if (stats.streak >= 5 && !badges.includes("Streak Master")) {
      badges.push("Streak Master");
    }

    if (stats.totalXP >= 100 && !badges.includes("XP Hunter")) {
      badges.push("XP Hunter");
    }
  }
}