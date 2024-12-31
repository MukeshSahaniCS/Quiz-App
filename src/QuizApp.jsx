import React, { useState } from "react";
import { data } from "./data";
import "./App.css";

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [option, setOption] = useState(null);
  const [quizeFinished, setQuizeFinished] = useState(false);

  const handleSelect = (option) => {
    setOption(option);
  };

  const handleNext = () => {
    if (option === data[index].Answer) {
      setScore(score + 1);
    }
    if (index < data.length - 1) {
      setIndex(index + 1);
      setOption(null);
    } else {
      setQuizeFinished(true);
    }
  };
  if (quizeFinished) {
    return (
      <>
        <div className="score">
          <h1 className="finished">Quiz Finished...!</h1>
          <h3 className="final-score">
            Your score is : {score} out of {data.length}
          </h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="quiz">
        <h1 className="heading">Quize App</h1>
        <h3>{data[index].Question}</h3>
        <ul className="list">
          <li
            className={option === "Option1" ? "selected" : ""}
            onClick={() => handleSelect("Option1")}
          >
            {data[index].Option1}
          </li>
          <li
            className={option === "Option2" ? "selected" : ""}
            onClick={() => handleSelect("Option2")}
          >
            {data[index].Option2}
          </li>
          <li
            className={option === "Option3" ? "selected" : ""}
            onClick={() => handleSelect("Option3")}
          >
            {data[index].Option3}
          </li>
          <li
            className={option === "Option4" ? "selected" : ""}
            onClick={() => handleSelect("Option4")}
          >
            {data[index].Option4}
          </li>
        </ul>
        <button className="next-btn" onClick={handleNext} disabled={!option}>
          Next
        </button>
        <h5 className="question-number">
          Question {index + 1} out of {data.length}
        </h5>
      </div>
    </>
  );
}
