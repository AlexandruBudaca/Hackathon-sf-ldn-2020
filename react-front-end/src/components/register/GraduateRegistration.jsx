import React, { useState, useEffect } from "react";
import Separator from "../Separator";
import "./index.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// import './index.css'
/* 
Registration is a shorter home to fill for users to sign up 
quickly with the minimum info needed. Once a user is created they
can add to their profile via the Profile Edit to add fields: 
bio, occupation, img. 
*/
const GraduateRegistration = () => {
  const [graduate, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);
  // const confirmPasswordValidation = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  const handleChange = (event) => {
    const newUser = {
      ...graduate,
      [event.target.name]: event.target.value,
    };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Email validation
    if (!graduate.email.includes("@")) {
      return alert("Please enter Valid email");
    }
    if (graduate.password.length < 6) {
      return alert("password should have at least 6 symbols");
    }
    if (graduate.password !== graduate.password2) {
      alert("Passwords do not match!");
    }

    // Creating JSON data for POST request to DB

    fetch(`https://ancient-hamlet-95801.herokuapp.com/api/users/signup`, {
      method: "POST",
      body: JSON.stringify(graduate),
      headers: { "Content-Type": "application/json" },
    }).then(setUserCreated(!userCreated));
  };

  return (
    <section className="companiesSection">
      <Separator category={"User Registration"} />
      {userCreated ? (
        <div className="singUpBack">
          Your account was created!
          <Link to="/" className="backBtnSignUp">
            Back
          </Link>
        </div>
      ) : (
        <div>
          <section className="mainRegister">
            <Link to="./CompanyRegistration" className="backBtnSignUp">
              Register as a Company?
            </Link>
            <div className="div-form-graduates">
              <div className="div-form">
                <form onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <label>
                        First name:
                        <input
                          className="select"
                          name="firstName"
                          onChange={handleChange}
                          required
                        ></input>
                      </label>
                    </li>
                    <li>
                      <label>
                        Last name:
                        <input
                          className="select"
                          name="lastName"
                          onChange={handleChange}
                          required
                        ></input>
                      </label>
                    </li>
                    <li>
                      <label>
                        Email:
                        <input
                          className="select"
                          name="email"
                          onChange={handleChange}
                          required
                          data-tip="must include @ symbol"
                        ></input>
                        <ReactTooltip />
                      </label>
                    </li>
                    <li>
                      <label>
                        Password:
                        <input
                          className="select"
                          name="password"
                          onChange={handleChange}
                          type="password"
                          required
                          data-tip="min. 6 symbols"
                        ></input>
                        <ReactTooltip />
                      </label>
                    </li>
                    <li>
                      <label>
                        Confirm Password:
                        <input
                          className="select"
                          name="password2"
                          type="password"
                          onChange={handleChange}
                          // onChange={confirmPasswordValidation}
                          required
                          data-tip="min. 6 symbols"
                        ></input>
                        <ReactTooltip />
                      </label>
                    </li>
                  </ul>
                  <button>Register</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};
export default GraduateRegistration;
