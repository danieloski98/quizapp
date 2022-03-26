import React, { useCallback } from 'react'
import useGetQuestions from '../hooks/useGetQuestions'
import {Spinner, Progress, Radio, RadioGroup, Stack} from '@chakra-ui/react'
import {useRecoilState} from 'recoil'
import { AnswersState } from '../States/Answers';
import { AnimatePresence, motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'

export default function Quiz() {
  const {questions, loading, error, errorText} = useGetQuestions();

  const [counter, setCounter] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [answer, setAnswer] = React.useState('');
  const [answeredQuestions, setAnsweredQuestions] = useRecoilState(AnswersState);
  const navigate = useNavigate();

  const _handleChange = useCallback((e: string) => {
    setAnswer(e);
    setAnswered(true);
  }, []);


  const _next = () => {
   if (counter+1 === 10) {
    const correct = answer === questions[counter].correct_answer;
    const obj = {
      correct,
      question: questions[counter],
    }
    const arr = [...answeredQuestions, obj];
    setAnsweredQuestions(arr);
    setAnswered(false);
    navigate('/results');
   } else {
     setAnswer('');
    const correct = answer === questions[counter].correct_answer;
    const obj = {
      correct,
      question: questions[counter],
    }
    const arr = [...answeredQuestions, obj];
    setAnsweredQuestions(arr);
    setAnswered(false);
    setCounter(prev => prev+1);
    console.log(answeredQuestions);
   }
  }

  
  
  if (loading) {
    return (
      <div className='w-full h-screen bg-gray-900 flex flex-col justify-center items-center'>
        <Spinner color="whitesmoke" size="lg" />
        <h4 className='font-semibold text-white mt-6 text-center'>Loading Questions</h4>
      </div>
    )
  }
  return (
    <div className='w-full h-screen bg-gray-900 flex flex-col items-center'>
      {error && (
        <h4 className='font-semibold text-white mt-6 text-center'>{errorText}</h4>
      )}
      {!error && questions.length > 0 && (
          <>
            <div className="w-64 flex flex-col items-center my-10">
              <p className='font-Raleway-Bold text-white text-2xl'>Question {counter+1}/{questions.length}</p>
              <Progress colorScheme='green' size='sm' value={counter+1} max={10} className='w-56 mt-6' isAnimated  />
            </div>

            <div className="flex">
              <p className='text-white font-Ralweay-SemiBold text-md text-center'>Category - {questions[counter].category}</p>
            </div>

            <div className="w-72 h-40 p-4 rounded-md bg-gray-700 mt-24 flex items-center">
              <p className="text-white text-center font-Raleway-SemiBold text-sm leading-6">{questions[counter].question}</p>
            </div>

            <RadioGroup className='mt-4' onChange={(e) => _handleChange(e)} value={answer}>
              <Stack direction="row" spacing="5">
                <Radio colorScheme="white" value="True">
                    <p className="text-md text-white">True</p>
                </Radio>
                <Radio colorScheme="white" value="False">
                    <p className="text-md text-white">False</p>
                </Radio>
              </Stack>
            </RadioGroup>

           <AnimatePresence>
             {answered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                className="w-full flex justify-center mt-5">
                  <button onClick={_next} className="mt-10 w-56 h-12 rounded-md bg-gray-700 text-white font-Ralweay-SemiBold">
                    {counter+1 < 10 && (
                      'Next'
                    )}
                    {counter+1 === 10 && (
                      'FINISH'
                    )}
                  </button>
                </motion.div>
             )}
           </AnimatePresence>

          </>
      )}

    </div>
  )
}
