import "../styles/Result.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { restResultAction } from "../redux/result_reducer";
import { earnPoints_Number, flagResult } from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";
//Import Actions

export default function Results() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { userId, result },
  } = useSelector((state) => state);

  //SETTING THE TOTAL NUMBER OF POINTS.....
  const rightAnswerScore = 2;
  const totalPoints = queue.length * rightAnswerScore;
  const earnPoints = earnPoints_Number(result, answers, rightAnswerScore);
  const flag = flagResult(totalPoints, earnPoints);
  const rightAnswersCount = earnPoints / rightAnswerScore;

  /** store user result */
  usePublishResult({
    result,
    username: userId,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  /*IMPORTANT NOTES TO SET THE NUMBERS RIGHT:
  1- The Number multipled by (queue.length) Represents :- POINTS EARND FROM RIGHT ANSWER
  2- The number in the earnPoints FUNCTION Represents:- POINTS EARND FROM RIGHT ANSWER
  The program is designed to Assess whether your score is Considered A (PASS) OR (FAIL) depending
  on the following formula : (totalPoints * 50) / 100 <= earnPoints
  EXPLAINATION OF FORMULA: You fail if your earn points are less than 50% of total exam points
  So There is a hack to make all (total exam points) = 100% and that is :

  POINTS EARND FROM RIGHT ANSWER = 100/Number of questions 
  e.g(above)==> 100/8 = 12.5  
  */

  function Onhome() {
    dispatch(resetAllAction());
    dispatch(restResultAction());
  }
  return (
    <div className="wrapresult">
      <div className="container">
        <h1 className="title text-light"> MyHomeWork</h1>

        <div className="result flex-center">
          <div className="flex">
            <span className="bold">Username</span>
            <span className="bold yellow__id">{userId}</span>
          </div>
          <div className="flex">
            <span className="bold">Exam Points:</span>
            <span className="bold">{totalPoints || 0}</span>
          </div>
          <div className="flex">
            <span className="bold">Questions</span>
            <span className="bold">{queue.length || 0}</span>
          </div>
          <div className="flex">
            <span className="bold">Right Answers</span>
            <span className="bold">{rightAnswersCount || 0}</span>
          </div>
          <div className="flex">
            <span className="bold">Score</span>
            <span className="bold">% {earnPoints || 0}</span>
          </div>
          <div className="flex">
            <span className="bold">Quiz Results</span>
            <span
              style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
              className="bold"
            >
              {flag ? "Passed" : "Failed"}
            </span>
          </div>
        </div>
        <div className="start">
          <Link className="btn" to={"/"} onClick={Onhome}>
            HomePage
          </Link>
        </div>
      </div>
    </div>
  );
}
