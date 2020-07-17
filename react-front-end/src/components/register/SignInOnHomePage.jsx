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
  
      <div className="signLandibOneMoreDiv col-6 md-col-6 sm-col-12">
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
      
        <form className="signForm"onSubmit={handleSubmit}>
         
            <div className="formline grey">
              <label>Email </label>

              <input
                type="text"
                name="email"
                onChange={handleChange}
                required
              ></input>
       
            <div className="formline">
              <label>Password </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              ></input>
                    
         
            <button className="buttonSignInHome">Sign In</button>
          </div>   </div>
        </form>
<div className='formline'>
        <p>don't you have an account?</p>
        <Link to="/signUp" >
        Sign up here
        </Link>
        </div>
      </div>
    
       

  );
};

export default SignInHomePage;
