import "./login.css";

function Login() {
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
            <form className="loginBox">
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
              />
              <button className="loginButton" type="submit">
                Log In
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
