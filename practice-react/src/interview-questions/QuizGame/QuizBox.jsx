import React from 'react'

function QuizBox({data, selectedAnswer}) {
    function handleOption(data){
        selectedAnswer(data);
    }
  return (
    <>
    <div style={{
        height: '100%',
        width: '100%',
    }}>
        <div style={{
            height: '70%',
            width: '70%',
        }}>
            <h2>{data.question}</h2>
            {
                data.options.map((data,index)=>(
                    <div key={index}>
                        <button onClick={() => handleOption(data)}>{data}</button>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )

}

export default QuizBox