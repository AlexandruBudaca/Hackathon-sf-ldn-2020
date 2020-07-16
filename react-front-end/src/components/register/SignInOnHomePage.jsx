import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";

const SignInHomePage = ({ isLogin, setIsLogin }) => {
  const [username, setUsername] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState({});
  const [authMessage, setAuthMessage] = useState({});
  const [popupSignIn, setPopupSignIn] = useState(false);

  const handleChange = (e) => {
    const newUsername = {
      ...username,
      [e.target.name]: e.target.value,
    };
    setUsername(newUsername);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://ancient-hamlet-95801.herokuapp.com/api/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(username),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthMessage(data);
        setPopupSignIn(!popupSignIn);
      });
    e.target.reset();
  };

  return (
    <div className="row">
      {authMessage.message === "Authorization successful" ? (
        <Redirect to="/Opportunities" />
      ) : (
        <div className="popup">
          <span className={popupSignIn ? "show" : "popuptext"}>
            The email or password is not valid!
          </span>
        </div>
      )}
      {authMessage.message === "Authorization successful"
        ? setIsLogin(!isLogin)
        : null}
      <div className="signHome col-6">
        <form onSubmit={handleSubmit}>
          <div className="landingsign col-5 sm-col-12">
            <div className="formline">
              <label>Email </label>

              <input
                type="text"
                name="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="formline">
              <label>Password </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              ></input>
            </div>
            <button className="buttonSignInHome">Sign In</button>
          </div>
        </form>

        <p>don't you have an account?</p>
        <Link to="/signUp" className="navStyle">
          Sign up here
        </Link>
      </div>
    
        <img className='col-6' src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/Pages%20files/dev-signin.jpg?raw=true" />
     
    </div>
  );
};

export default SignInHomePage;
