import React, { useState } from "react";
import Question from "./Question";
/**Redux Store import */
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
import "../styles/Main.css";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  /*NEXT BUTTON* */
  function onNext() {
    /*     console.log("On Next Click");
     */
    if (trace < queue.length) {
      /**Moving to the next question when clicking on next by move next action */
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    //Reset Value of the Checked Variable
    setChecked(undefined);
  }
  /*Previous BUTTON* */

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  /**Finished Exam */
  if (result.length && result.length >= queue.length) {
    return (
      <Navigate to={"/results"} replace="true">
        {" "}
      </Navigate>
    );
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title text-light">
          {" "}
          My<span>CIS</span>HomeWork
        </h1>
        {/* *Display Questions */}
        <Question onChecked={onChecked} />
        <div className="grid">
          {trace > 0 ? (
            <button className="btn prev" onClick={onPrev}>
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
