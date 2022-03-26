import {atom} from 'recoil';
import { IAnsweredQuestion } from '../types/AnsweredQuestion';

let defaultValue: Array<IAnsweredQuestion> = [];
export const AnswersState = atom({
    key: 'Answeres',
    default: defaultValue,
})