import React, { useState } from "react";
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
const CompanyRegistration = () => {
  const [companyReg, setCompanyReg] = useState({
    companyName: "",
    companyEmail: "",
    companyPassword: "",
  });
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [companyCreated, setCompanyCreated] = useState(false);

  // const confirmPasswordValidation = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  const handleChange = (event) => {
    const newCompany = {
      ...companyReg,
      [event.target.name]: event.target.value,
    };
    setCompanyReg(newCompany);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!companyReg.companyEmail.includes("@")) {
      return alert("Please enter Valid email");
    }
    // if (companyReg.password !== graduate.password2) {
    //   alert("Passwords do not match!");
    // }
    if (companyReg.password.length < 6) {
      return alert("password should have at least 6 symbols");
    }
    console.log(companyReg);

    fetch(`https://ancient-hamlet-95801.herokuapp.com/api/companies/signup`, {
      method: "POST",
      body: JSON.stringify(companyReg),
      headers: { "Content-Type": "application/json" },
    }).then(setCompanyCreated(!companyCreated));
  };

  return (
    <section className="companiesSection">
      <Separator category={"Company Registration"} />
      {companyCreated ? (
        <div className="singUpBack">
          Your company account was created!
          <Link to="/" className="backBtnSignUp">
            Back
          </Link>
        </div>
      ) : (
        <div>
          <section className="mainRegister">
            <Link to="/GraduateRegistration" className="backBtnSignUp">
              Register as a student?
            </Link>
            <div className="div-form-graduates">
              <div className="div-form">
                <form onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <label>
                        Company Name
                        <input
                          className="select"
                          name="companyName"
                          onChange={handleChange}
                          required
                        ></input>
                      </label>
                    </li>
                    <li>
                      <label>
                        Company email:
                        <input
                          className="select"
                          name="companyEmail"
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
                          name="companyPassword"
                          onChange={handleChange}
                          type="password"
                          required
                          data-tip="min. 6 symbols"
                        ></input>
                        <ReactTooltip />
                      </label>
                    </li>
                    {/* <li>
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
                    </li> */}
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
// return<div>we recieved a lot of application from companies... and we are very busy sorting 5hem out. if we find you company is of interest to out students we will contact you soon</div>
// }
export default CompanyRegistration;
