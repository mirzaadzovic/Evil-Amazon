import React, { useEffect, useState } from "react";
import "./Login.css";
import amazonLogo from "../../assets/amazonLogo.png";
import { connect } from "react-redux";
import { setLoginFalse, setLoginTrue } from "../../redux/actions/pathActions";
import { Link, useNavigate } from "react-router-dom";
import { logInUser, userReset } from "../../redux/actions/userActions";
import { selectUser, selectUserError } from "../../redux/reducers/userReducer";

const Login = ({
  loggedInUser,
  login,
  error,
  resetUserError,
  showHeader,
  hideHeader,
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    hideHeader();
    redirectIfLoggedIn();
    return () => {
      if (!loggedInUser?.userId) resetUserError();

      showHeader();
    };
  }, [loggedInUser, error]);

  const signIn = (e) => {
    e.preventDefault();
    login(email, password);
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const redirectIfLoggedIn = () => {
    if (loggedInUser?.userId) navigate("/");
    if (error) setShowError(true);
  };

  const inputEmpty = !email || !password;

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        {showError && (
          <p className="login__error">Wrong username or password</p>
        )}
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton amazon-btn"
            onClick={signIn}
            disabled={inputEmpty}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Evil-Amazon's Conditions of Use & Sale (To
          give us money for nothing, cause this is fake Amazon if you didn't
          notice). Please see our Privacy Notice, our Cookie Not... I Know you
          won't read this anyway dumbass.
        </p>

        <button className="login__createAccountButton" onClick={register}>
          Create Evil Amazon Account
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedInUser: selectUser(state),
    error: selectUserError(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(logInUser(email, password)),
    resetUserError: () => dispatch(userReset()),
    showHeader: () => dispatch(setLoginFalse()),
    hideHeader: () => dispatch(setLoginTrue()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
