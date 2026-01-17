import { JsonController, Get, QueryParam } from "routing-controllers";
import { QuestionModel } from "../models/Question.model";

@JsonController("/quiz")
export class QuizController {
  @Get("/start")
  async startQuiz(@QueryParam("domain") domain: string) {
    if (!domain) {
      throw new Error("Domain is required");
    }

    const questions = await QuestionModel.aggregate([
      { $match: { domain } },
      { $sample: { size: 10 } }, // 🎯 RANDOM 10
      {
        $project: {
          correctIndex: 1,
          text: 1,
          options: 1,
        },
      },
    ]);

  console.log("QUESTIONS FOUND:", questions.length);

    return questions;
  }
}