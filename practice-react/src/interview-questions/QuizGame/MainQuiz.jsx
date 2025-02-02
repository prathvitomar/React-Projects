import React, { useEffect, useState } from 'react'
import {quizData} from './quiz.js'
import QuizBox from './QuizBox';
function MainQuiz() {
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1)
    const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0)

    function selectedAnswer(selectedOption){
        setCorrectAnswer(prev => [...prev, selectedOption]);
        if(currentIndex < quizData.length){
            setCurrentIndex(prev => prev + 1);
        }
        console.log(numberOfCorrectAnswer)
    }

    useEffect(()=>{
        let count = 0;
        for(let i = 0; i < currentIndex; i++) {
            if(correctAnswer[i] === quizData[i].answer){
                count++;
            }
        }
        setNumberOfCorrectAnswer(count);
    },[correctAnswer])

  return (
    <>
        <div>
            <div>
                <h1>Quiz Game</h1>
                {
                    quizData.slice(0,currentIndex).map((quiz, index)=>(
                            <QuizBox key={index} selectedAnswer={(data) => selectedAnswer(data)} data={quiz}/>
                    ))
                }
            </div>
            <div>Your Given Answers are {numberOfCorrectAnswer} out of {currentIndex - 1}</div>
        </div>
    </>
  )
}

export default MainQuiz