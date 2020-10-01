import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
//main sign-in page
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
  //use promise.all method for fetch both user and companies api
  const handleSubmit = (e) => {
    Promise.all([
      fetch("https://sf-hackathon-2020.herokuapp.com/api/users/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`,
        },
        body: JSON.stringify(username),
      }).then((res) => res.json()),
      fetch("https://sf-hackathon-2020.herokuapp.com/api/companies/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`,
        },
        body: JSON.stringify(username),
      }).then((res) => res.json()),
    ])
      .then((res) => {
        const res1 = res[0];
        const res2 = res[1];

        res.map((res) => {
          if (res.message.includes("successful")) {
            sessionStorage.setItem("authorization", JSON.stringify(res));
            props.setLogSession(res);
          }
          if (res.message.includes("Graduate")) {
            props.history.push("/opportunities/");
          }
          if (res.message.includes("Company")) {
            props.history.push("/NewOpportunityForm/");
          }
        });
        if (
          res1.message.includes("failed") &&
          res2.message.includes("failed")
        ) {
          alert("The email or password is not valid!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
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
                (props.log && props.log.token) ||
                (props.logSession && props.logSession.token)
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
