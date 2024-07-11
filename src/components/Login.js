import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Main.css";
import styles from "../styles/Login/login.module.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import img from "../assets/CIS.jpg";
import img1 from "../assets/LOGIN.jpg";
import Navbar from "./Navbar.js";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/quiz");
      // Handle success: Redirect user, show success message, etc.
    } catch (error) {
      setError("Failed to Sign in: " + error.message);
    }
    setLoading(false);
  }

  function startQuiz() {
    if (emailRef.current?.value) {
      dispatch(setUserId(emailRef.current?.value));
    }
  }

  function handleLoginAndStartQuiz(e) {
    handleSubmit(e);
    startQuiz();
  }
  return (
    <div className={styles.loginPic}>
      <Navbar />

      <div className="container">
        {error && (
          <div className="alert alert-danger" role="alert">
            {"Sorry, Unable to sign in... "}
          </div>
        )}
        <form onSubmit={handleLoginAndStartQuiz} id="form">
          <h2>Login</h2>
          <input
            ref={emailRef}
            className="userid"
            type="text"
            placeholder="Username..."
          />
          <input
            ref={passwordRef}
            className="userid"
            type="password"
            placeholder="password..."
          />
          <button
            className="btn"
            disabled={loading}
            type="submit"
            onClick={handleLoginAndStartQuiz}
          >
            Log in
          </button>
        </form>

        {/*         <div className="start">
          <Link className="start" to={"/Signup"}>
            Sign up{" "}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
