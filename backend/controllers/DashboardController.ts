import { JsonController, Get, Req, UseBefore } from "routing-controllers";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { userStats, userBadges, eventStore } from "../store/memoryStore";

@JsonController("/dashboard")
@UseBefore(AuthMiddleware)
export class DashboardController {
  @Get("/summary")
  summary(@Req() req: any) {
    const stats = userStats[req.user.userId];

    if (!stats) {
      return { totalXP: 0, accuracy: 0, avgReactionTime: 0 };
    }

    return {
      totalXP: stats.totalXP,
      accuracy: (stats.correct / stats.total) * 100,
      avgReactionTime: stats.totalTime / stats.total,
    };
  }

  @Get("/badges")
  badges(@Req() req: any) {
    return { earned: userBadges[req.user.userId] ?? [] };
  }

  @Get("/history")
  history(@Req() req: any) {
    return eventStore.filter(e => e.userId === req.user.userId);
  }
}