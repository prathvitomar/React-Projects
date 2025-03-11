import React from "react";

function Quiz({ question, handleAnswer, questionIndex }) {
  return (
    <div>
      <h1>{question.question}</h1>
      <ul>
        {question.answerOptions.map((ans, i) => (
          <li
            key={i}
            onClick={() => handleAnswer(ans.isCorrect, questionIndex, ans.text)}
            style={{
              cursor: "pointer",
              padding: "5px",
              border: "1px solid gray",
              margin: "5px",
              display: "inline-block",
            }}
          >
            {ans.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
