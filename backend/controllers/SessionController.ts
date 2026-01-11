import { JsonController, Post, Body, Get, QueryParam } from "routing-controllers";
import { EventService } from "../services/eventServices";

@JsonController("/session")
export class SessionController {
  @Post("/answer")
  answer(
    @Body()
    body: {
      userId: string;
      questionId: string;
      correct: boolean;
      reactionTimeMs: number;
    }
  ) {
    EventService.record(body);
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