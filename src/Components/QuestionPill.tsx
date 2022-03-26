import React from 'react'
import { IAnsweredQuestion } from '../types/AnsweredQuestion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import {motion} from 'framer-motion'

const GOOD = `text-white font-Raleway-SemiBold mt-8 text-green-500`;
const BAD = `text-white font-Raleway-SemiBold mt-8 text-red-500`;

const EXPANDED = `flex-1 p-3 rounded-md bg-gray-700 ml-4 text-white font-Raleway-Regular text-md xl:block lg:block sm:hidden md:hidden`;
const CLOSED = `flex-1 p-3 rounded-md bg-gray-700 ml-4 text-white font-Raleway-Regular text-md overflow-hidden xl:block lg:block sm:hidden md:hidden`

const EXPANDEDL = `flex-1 p-3 rounded-md bg-gray-700 ml-4 text-white font-Raleway-Regular text-md xl:hidden lg:hidden sm:block md:block`;
const CLOSEDL = `flex-1 p-3 rounded-md bg-gray-700 ml-4 text-white font-Raleway-Regular text-md overflow-hidden xl:hidden lg:hidden sm:block md:block`

export default function QuestionPill({ item }: { item: IAnsweredQuestion }) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="w-full flex mb-4 items-center" >
            {expanded && <FiMinus size={25} color="white" onClick={() => setExpanded(false)} className="cursor-pointer" />}
            {!expanded && <FiPlus size={25} color="white" onClick={() => setExpanded(true)}  className="cursor-pointer" />}
            
            <div className={expanded ? EXPANDED:CLOSED}>
            <motion.div 
                animate={{ height: expanded ? '100px':'50px', overflow: 'hidden'}}
                 >
                {item.question.question}
                <p className={item.correct ? GOOD:BAD}>Correct Answer - {item.question.correct_answer}</p>
            </motion.div>
            </div>

            <div className={expanded ? EXPANDEDL:CLOSEDL}>
            <motion.div 
                animate={{ height: expanded ? '0px':'70px', overflow: 'hidden'}}
                 >
                {item.question.question}
                <p className={item.correct ? GOOD:BAD}>Correct Answer - {item.question.correct_answer}</p>
            </motion.div>
            </div>
        </div>
    )
}
