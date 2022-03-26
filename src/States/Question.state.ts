import {atom} from 'recoil';
import { IQuestion } from '../types/IQuiz';

let defaultValue: Array<IQuestion> = [];
export const QuestionsState = atom({
    key: 'Question',
    default: defaultValue,
})