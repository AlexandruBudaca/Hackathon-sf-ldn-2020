import React, { useState, useEffect } from "react";
import Separator from "../Separator";
import "./index.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const CompanyRegistration = () => {
  const [companyReg, setCompanyReg] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [companyCreated, setCompanyCreated] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  /*set all the companies registration */
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    /* get the companies registrations*/
    fetch("https://sf-hackathon-2020.herokuapp.com/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanyData(data));
  }, []);

  let emailCompany;
  const checkForEmailCompany = () => {
    companyData.find((data) =>
      data.email === companyReg.email ? (emailCompany = data.email) : null
    );
    return emailCompany;
  };

  const handleChangeFormPasswordConfirmation = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleChange = (event) => {
    const newCompany = {
      ...companyReg,
      [event.target.name]: event.target.value,
    };
    setCompanyReg(newCompany);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!companyReg.email.includes("@")) {
      return alert("Please enter Valid email");
    }
    if (passwordConfirmation !== companyReg.password) {
      alert("Passwords do not match!");
    } else {
      companyReg["companyPassword"] = passwordConfirmation;
    }
    if (companyReg.password.length < 6) {
      return alert("password should have at least 6 symbols");
    }
    if (companyReg.name.length < 2) {
      return alert("The name should have at least 2 characters");
    }

    checkForEmailCompany();
    emailCompany === companyReg.email
      ? alert("The email is already in the database!")
      : fetch(`https://sf-hackathon-2020.herokuapp.com/api/companies/signup`, {
          method: "POST",
          body: JSON.stringify(companyReg),
          headers: { "Content-Type": "application/json" },
        }).then(setCompanyCreated(!companyCreated));
    event.target.reset();
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
                          name="name"
                          onChange={handleChange}
                          required
                          data-tip="at least 2 symbols"
                        ></input>
                        <ReactTooltip />
                      </label>
                    </li>
                    <li>
                      <label>
                        Company email:
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
                          type="password"
                          onChange={handleChangeFormPasswordConfirmation}
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

export default CompanyRegistration;
