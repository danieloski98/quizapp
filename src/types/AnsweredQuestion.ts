import { IQuestion } from "./IQuiz";

export interface IAnsweredQuestion {
    correct: boolean;
    question: IQuestion;
}