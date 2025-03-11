import React, { useState } from "react";
import questions from "./questions.json";
import Quiz from "./Quiz";

function FlipkartQuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Store user answers

  function handleAnswer(ans, questionId, selectedAnswerText) {
    setAnswers((prev) => [
      ...prev,
      {
        id: questionId,
        selected: selectedAnswerText, 
        isCorrect: ans,
      },
    ]);
    setCurrentQuestion((prev) => prev + 1);
  }

  const totalCorrect = answers.filter((ans) => ans.isCorrect).length;

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Quiz
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          questionIndex={currentQuestion}
        />
      ) : (
        <div>
          <h2>Final Result</h2>
          <h3>You got {totalCorrect} out of {questions.length} correct!</h3>
          <ul>
            {questions.map((q, index) => {
              const userAnswer = answers.find((ans) => ans.id === index);
              return (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <strong>Q: {q.question}</strong>
                  <ul>
                    {q.answerOptions.map((option, i) => {
                      const isUserAnswer = userAnswer?.selected === option.text;
                      const isCorrectAnswer = option.isCorrect;
                      return (
                        <li
                          key={i}
                          style={{
                            color: isCorrectAnswer
                              ? "green"
                              : isUserAnswer
                              ? "red"
                              : "black",
                            fontWeight: isUserAnswer || isCorrectAnswer ? "bold" : "normal",
                          }}
                        >
                          {option.text}
                          {isUserAnswer ? " (Your Answer)" : ""}
                          {isCorrectAnswer ? " ✅ (Correct Answer)" : ""}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FlipkartQuizApp;
