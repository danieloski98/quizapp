import React from 'react';
import {useQuery} from 'react-query';
import {QuestionsState} from '../States/Question.state';
import {useRecoilState} from 'recoil';
import { url } from '../utils/url';
import { IResponse } from '../types/IServerResponse';
import { IQuestion } from '../types/IQuiz';

// query
const getQuestion = async () => {
    try {
        const request = await fetch(`${url}`, { method: 'get'});
        const json = await request.json() as IResponse;

        if (!request.ok) {
            throw new Error('An Error Occured');
        } else {
            return json;
        }
    } catch (error: any) {
        throw new Error(error);
    }
}
export default function useGetQuestions() {
    const [question, setQuestion] = useRecoilState(QuestionsState);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [errorText, setErrorText] = React.useState('');

    const getQuestions = useQuery('getQuestion', getQuestion, {
        onSuccess: (data) => {
            if (data.results !== undefined || data.results !== null) {
                setQuestion(data.results as Array<IQuestion>);
                setLoading(false);
            }else {
                setLoading(false);
                setError(true);
                setErrorText('There was an error while getting the question')
            }
        }
    });
  return {
      loading,
      error,
      errorText,
      questions: question,
      refetch: getQuestions.refetch,
  }
}
