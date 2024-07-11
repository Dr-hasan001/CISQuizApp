import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // Handle success: Redirect user, show success message, etc.
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="Cardbody">
        <h2 className="header">Sign Up</h2>

        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit} className="form-container">
          <label>Email</label>
          <input placeholder="Email..." type="email" required ref={emailRef} />

          <label>Password</label>
          <input
            placeholder="Password..."
            type="password"
            required
            ref={passwordRef}
          />

          <label>Password Confirmation</label>
          <input
            placeholder="Re-type Password..."
            type="password"
            required
            ref={passwordConfirmRef}
          />

          <button disabled={loading} type="submit">
            Sign-up
          </button>
        </form>

        <div className="check">
          Already have an account? <Link to="/">Log in</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signup;

/* import React, { useRef, useState } from "react";
import "../styles/Signup.css";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="Cardbody">
        <h2 className="header">Sign Up</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit} className="form-container">
          <label>Email</label>
          <input placeholder="Email..." type="email" required ref={emailRef} />

          <label>Password</label>
          <input
            placeholder="Password..."
            type="password"
            required
            ref={passwordRef}
          />

          <label>Password Confirmation</label>
          <input
            placeholder="Re-type Password..."
            type="password"
            required
            ref={passwordConfirmRef}
          />

          <button disabled={loading} type="submit">
            Sign-up
          </button>
        </form>

        <div className="check">Already have an account? Log in</div>
      </div>
    </div>
  );
};

export default Signup; */
