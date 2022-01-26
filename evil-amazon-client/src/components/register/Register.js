import React, { useEffect, useState } from "react";
import "./Register.css";
import amazonLogo from "../../assets/amazonLogo.png";
import { connect, useDispatch } from "react-redux";
import { setLoginFalse, setLoginTrue } from "../../redux/actions/pathActions";
import { Link, useNavigate } from "react-router-dom";
import {
  logInUser,
  registerUser,
  userReset,
} from "../../redux/actions/userActions";
import { selectUser, selectUserError } from "../../redux/reducers/userReducer";
import UserDto from "../../models/UserDto";

const Register = ({
  loggedInUser,
  register,
  error,
  showHeader,
  hideHeader,
  resetUserError,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    hideHeader();
    redirectIfLoggedIn();
    return () => {
      if (!loggedInUser) resetUserError();
      showHeader();
    };
  }, [loggedInUser, error]);

  const handleRegistration = (e) => {
    e.preventDefault();
    const user = new UserDto({
      email: email,
      firstName: fName,
      lastName: lName,
      username: username,
      password: password,
    });
    register(user);
    setPassword("");
  };

  const redirectIfLoggedIn = () => {
    console.log(error);
    if (loggedInUser?.userId) navigate("/");
    if (error) setShowError(true);
  };

  const inputEmpty = !email || !password || !fName || !lName || !username;

  return (
    <div className="register">
      <Link to="/">
        <img className="register__logo" src={amazonLogo} />
      </Link>

      <div className="register__container">
        <h1>Give your personal info to Evil Amazon</h1>
        {showError && (
          <p className="register__error">Wrong username or password</p>
        )}
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>First name</h5>
          <input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <h5>Last name</h5>
          <input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />

          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="register__signInButton amazon-btn"
            onClick={handleRegistration}
            disabled={inputEmpty}
          >
            Create Account
          </button>
        </form>

        <p>
          By signing-in you agree to Evil-Amazon's Conditions of Use & Sale (To
          give us money for nothing, cause this is fake Amazon if you didn't
          notice). Please see our Privacy Notice, our Cookie Not... I Know you
          won't read this anyway dumbass.
        </p>
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
    register: (user) => dispatch(registerUser(user)),
    showHeader: () => dispatch(setLoginFalse()),
    hideHeader: () => dispatch(setLoginTrue()),
    resetUserError: () => dispatch(userReset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
