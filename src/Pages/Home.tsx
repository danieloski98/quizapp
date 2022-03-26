import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home(props: any) {
  const navigate = useNavigate();
 
  return (
    <div className='w-full h-screen bg-gray-900 flex flex-col items-center py-10 justify-center md:px-20 sm:px-20'>
      <h1 className='text-white text-4xl font-Raleway-Bold text-center'> Welcome To The Trivia App Challange!</h1>
      <p className="mt-10 text-white font-Raleway-Regular text-md text-center">You will be presented with 10 True or False questions.</p>
      <p className="mt-20 text-white font-Raleway-Regular text-md text-center">Can you score 100%?</p>

      <button onClick={() => navigate('quiz')} className="mt-10 w-40 h-12 rounded-md bg-gray-700 text-white font-Ralweay-SemiBold">BEGIN</button>
    </div>
  )
}
