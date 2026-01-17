import {
  JsonController,
  UseBefore,
  Post,
  Body,
  Get,
  QueryParam,
  Req,
} from "routing-controllers";
import { EventService } from "../services/eventServices";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

@UseBefore(AuthMiddleware)
@JsonController("/session")
export class SessionController {
  @Post("/answer")
  async answer(
    @Req() req: any,
    @Body()
    body: {
      questionId: string;
      correct: boolean;
      reactionTimeMs: number;
    }
  ) {
    await EventService.record({
      userId: req.user.userId,
      questionId: body.questionId,
      correct: body.correct,
      reactionTimeMs: body.reactionTimeMs,
    });

    return { status: "recorded" };
  }

  @Get("/answers")
  all() {
    return EventService.getAll();
  }

  @Get("/answers/by-user")
  byUser(@QueryParam("userId") userId: string) {
    return EventService.getByUser(userId);
  }
}