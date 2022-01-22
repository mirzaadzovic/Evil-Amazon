import React, { useEffect, useState } from "react";
import "./Login.css";
import amazonLogo from "../../assets/amazonLogo.png";
import { useDispatch } from "react-redux";
import { setLoginFalse, setLoginTrue } from "../../redux/actions/pathActions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(setLoginTrue());

    return () => dispatch(setLoginFalse());
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    alert("Clicked");
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
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

          <button className="login__signInButton amazon-btn" onClick={signIn}>
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

export default Login;