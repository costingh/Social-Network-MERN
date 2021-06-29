import "./register.css";

function Register() {
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
                placeholder="Username"
                type="email"
                required
                className="loginInput"
              />
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="email"
                required
                className="loginInput"
              />
              <input
                placeholder="Password Again"
                type="password"
                required
                minLength="6"
                className="loginInput"
              />
              <button className="loginButton" type="submit">
                Sign up
              </button>
              
              <button className="loginRegisterButton">
              Log into Account
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Register
