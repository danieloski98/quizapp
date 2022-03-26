import React from 'react'
import {useRecoilState} from 'recoil'
import { AnswersState } from '../States/Answers'
import {useNavigate} from 'react-router-dom'
import QuestionPill from '../Components/QuestionPill'

export default function Results() {
  const [answeredQuestions, setAnsweredQuestions] = useRecoilState(AnswersState);
  const [correct, setCorrect] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    const val = answeredQuestions.filter((item) => item.correct).length;
    setCorrect(val);
  }, [answeredQuestions]);

  const _restart = () => {
    setAnsweredQuestions([]);
    navigate('/');
  }

  return (
    <div className='w-full h-screen bg-gray-900 flex flex-col items-center py-10 justify-center md:px-5 sm:px-5'>
        <div className="w-64 flex flex-col items-center my-10">
          <p className="text-center font-Raleway-Bold text-white text-3xl">Your Score</p>
          <p className='font-Raleway-SemiBold text-white text-2xl mt-4'>{correct}/{answeredQuestions.length}</p>
        </div>

        <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full h-3/4 overflow-y-auto">
          {answeredQuestions.map((item, index) => (
            <div className='w-full' key={index}>
              <QuestionPill item={item} />
            </div>
          ))}
        </div>

        <button onClick={_restart} className="mt-10 w-40 h-12 rounded-md bg-gray-700 text-white font-Ralweay-SemiBold">PLAY AGAIN</button>

    </div>
  )
}
