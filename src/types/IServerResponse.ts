import { IQuestion } from "./IQuiz";

export interface IResponse {
    response_code: number;
    results: Array<IQuestion>;
}