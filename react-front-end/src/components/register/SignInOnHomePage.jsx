import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SignInHomePage = (props) => {
  const [username, setUsername] = useState({
    email: "",
    password: "",
  });
  const [company, setCompany] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const newUsername = {
      ...username,
      [e.target.name]: e.target.value,
    };
    const newCompany = {
      ...company,
      [e.target.name]: e.target.value,
    };
    setUsername(newUsername);
    setCompany(newCompany);
  };

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
      <div className="formline">
        <p className="pleaseRegister col-4">
          If you don’t have an account please register on the link below
        </p>
        <Link to="/signUp">Sign up here </Link>
      </div>
    </div>
  );
};

export default withRouter(SignInHomePage);
