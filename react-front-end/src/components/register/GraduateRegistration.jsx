import React, { useState } from "react";
import Separator from "../Separator";
import "./index.css";
import { Link } from "react-router-dom";
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
    if (!graduate.password.legth<6) {
      return alert("password should have at least 6 symbols");
    }
    if (graduate.password !== graduate.password2) {
      alert("Passwords do not match!");
    } else {
      graduate["password2"] = graduate.password2;
      // Creating JSON data for POST request to DB
    }
    fetch(`https://ancient-hamlet-95801.herokuapp.com/api/users/signup`, {
      method: "POST",
      body: JSON.stringify(graduate),
      headers: { "Content-Type": "application/json" },
    }).then(setUserCreated(!userCreated));
  };

  return (
    <section className="companiesSection">
      <Separator category={"User Registration Form"} />
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
                        ></input>
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
                        ></input>
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
                        ></input>
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
