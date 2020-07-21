import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

const SignIn = (props) => {
  const [username, setUsername] = useState({
    email: "",
    password: "",
  });
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
        Authorization: `Bearer`,
      },
      body: JSON.stringify(username),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("auth", JSON.stringify(data));
        if (data.token) {
          props.history.push("/opportunities/");
        } else {
          alert("The password or email is not valid!");
        }
        if (data.token) {
          props.setLoggedInUser(!props.loggedInUser);
        }
      });
    e.target.reset();
  };

  return (
    <div className="mainRegister">
      <form className="signInPage" onSubmit={handleSubmit}>
        <div className="div-sign-in-Page">
          <h2>Sign In</h2>
          <div className="div-sign-in">
            <label>Email </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="div-sign-in">
            <label>Password </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            ></input>

            <button
              disabled={
                (props.log && props.log.token) || props.loggedInUser
                  ? true
                  : false
              }
              className="buttonSignInHome"
            >
              Sign In
            </button>
          </div>{" "}
        </div>
      </form>
      <div className="div-sign-in-text">
        <p className="">
          If you don’t have an account please register on the link below
        </p>
        <Link className="link-sign-up" to="/signUp">
          Sign up here
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
