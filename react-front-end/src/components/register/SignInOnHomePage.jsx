import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SignInHomePage = (props) => {
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
        if (data.message === "Authorization successful") {
          props.history.push("/opportunities/");
        } else {
          alert("The password or email is not valid!");
        }
        if (data.message === "Authorization successful") {
          props.setLoggedInUser(!props.loggedInUser);
        }
      });
    e.target.reset();
  };

  return (
    <div className="signLandibOneMoreDiv col-6 md-col-6 sm-col-12">
      <form className="signForm" onSubmit={handleSubmit}>
        <div className="formline grey">
          <h2>Sign In</h2>
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

            <button
              disabled={
                (props.log &&
                  props.log.message === "Authorization successful") ||
                props.loggedInUser
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
      <div className="formline">
        <p className="pleaseRegister col-4">
          If you don’t have an account please register on the link below
        </p>
        <Link to="/signUp">Sign up here</Link>
      </div>
    </div>
  );
};

export default withRouter(SignInHomePage);
