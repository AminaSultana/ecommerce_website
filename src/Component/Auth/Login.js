import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

import classes from "./Login.module.css";

const Login = () => {
  const authCtx = useContext(AuthContext)
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9epljL9fTX6GhIFodJAIjI89cSFFFElM",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        history.replace("/store");
        authCtx.login(data.idToken)
      } else {
        const data = await response.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
        alert(error)
    }
  };
  return (
    <>
      <section>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
