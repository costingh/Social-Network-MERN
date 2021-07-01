import { useContext, useRef } from 'react';
import {loginCall} from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

import "./login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  }
  console.log(user);

    return (
        <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Social</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                required
                ref={email}
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="password"
                required
                ref={password}
                minLength="6"
                className="loginInput"
              />
              <button className="loginButton" type="submit">
                {isFetching ? "Loading..." : "Log In"}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
              Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login
