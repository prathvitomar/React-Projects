import React, { useState } from 'react'
import data from './data.json'

function Quiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correct, setCorrect] = useState([]);

    function handleAnswer(bool, ans){
        if(bool){
            setCorrect((prev) => ([...prev, ans]));
        }
        setCurrentIndex(prev => prev + 1);
    }

  return (
    <>
        {
            currentIndex !== data.length && (
                <div>
                    <h1>{data[currentIndex].question}</h1>
                    <ul>
                        {
                            data[currentIndex].answerOptions.map((option,index)=>(
                                <button key={index} onClick={() => handleAnswer(option.isCorrect, option.text)}>{option.text}</button>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        {
            currentIndex === data.length && (
                <>
                <h1>You answered {correct.length} out of {data.length}</h1>
                </>
            )
        }
    </>
  )
}

export default Quiz