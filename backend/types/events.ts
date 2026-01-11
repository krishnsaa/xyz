export interface QuestionAnsweredEvent {
  userId: string;
  questionId: string;
  correct: boolean;
  reactionTimeMs: number;
  timestamp: number;
}