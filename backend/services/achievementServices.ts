import { UserStatsModel } from "../models/UserStats.model";
import { UserBadgeModel } from "../models/UserBadge.model";

export class AchievementService {
  static async check(userId: string) {
    const stats = await UserStatsModel.findOne({ userId });
    if (!stats) return;

    const badgeDoc =
      (await UserBadgeModel.findOne({ userId })) ??
      (await UserBadgeModel.create({ userId, badges: [] }));

    if (stats.streak >= 5 && !badgeDoc.badges.includes("Streak Master")) {
      badgeDoc.badges.push("Streak Master");
    }

    if (stats.totalXP >= 100 && !badgeDoc.badges.includes("XP Hunter")) {
      badgeDoc.badges.push("XP Hunter");
    }

    await badgeDoc.save();
  }
}