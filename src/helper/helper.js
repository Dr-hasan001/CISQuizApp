import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempts_Number(result) {
  return result.filter((r) => r !== undefined).length;
}

//Set the number of points to each Question (10 below)!!!!!!!!!!

export function earnPoints_Number(result, answers, points) {
  return result
    .map((element, i) => element === answers[i])
    .filter((i) => i)
    .map((i) => points)
    .reduce((prev, curr) => prev + curr, 0);
}

//DON'T TOUCH THE NUMBERS BELOW GO TO --> Results.js

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 <= earnPoints;
}

//Check User ID
export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

/** get server data */
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

/** post server data */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
