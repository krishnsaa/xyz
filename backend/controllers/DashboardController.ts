import { JsonController, Get, Req, UseBefore } from "routing-controllers";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { UserStatsModel } from "../models/UserStats.model";
import { UserBadgeModel } from "../models/UserBadge.model";
import { EventModel } from "../models/Event.model";

@JsonController("/dashboard")
@UseBefore(AuthMiddleware)
export class DashboardController {
@Get("/summary")
async summary(@Req() req: any) {
  console.log("DASHBOARD req.user =", req.user);

console.log("REQ USER ID:", req.user?.userId);

const stats = await UserStatsModel.findOne({
  userId: req.user?.userId,
});

    if (!stats) {
      return { totalXP: 0, accuracy: 0, avgReactionTime: 0 };
    }

    return {
      totalXP: stats.totalXP,
      accuracy: stats.total
        ? (stats.correct / stats.total) * 100
        : 0,
      avgReactionTime: stats.total
        ? stats.totalTime / stats.total
        : 0,
    };
  }

  @Get("/badges")
  async badges(@Req() req: any) {
    const badgeDoc = await UserBadgeModel.findOne({
      userId: req.user.userId,
    });

    return { earned: badgeDoc?.badges ?? [] };
  }

  @Get("/history")
  async history(@Req() req: any) {
    return EventModel.find({ userId: req.user.userId }).sort({
      createdAt: -1,
    });
  }
}