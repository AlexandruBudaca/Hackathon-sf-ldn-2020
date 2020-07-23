import React, { useState } from "react";
import "./index.css";
import { roles } from "./data/roles";
import { types } from "./data/types";
import { levels } from "./data/level";
import { locations } from "./data/location";
import Separator from "../Separator";
import { Link } from "react-router-dom";

const NewOpportunityForm = () => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    type: "",
    minimum_proficiency: "",
    location: "",
    description: "",
  });
  const [userCreated, setUserCreated] = useState(false);

  const handleChange = (event) => {
    const newOpportunity = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newOpportunity);
  };
  const handleSubmit = (event) => {
    //Creating JSON data for POST request to DB

    event.preventDefault();
    fetch(`https://sf-hackathon-2020.herokuapp.com/api/opp`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then(setUserCreated(!userCreated));
    event.target.reset();
  };

  return (
    <section className="companiesSection">
      <Separator category={"Add new opportunity"} />
      {userCreated ? (
        <div className="singUpBack">
          Your opportunity was created!
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
                        Company:
                        <input
                          className="select"
                          name="company"
                          onChange={handleChange}
                          type="text"
                          required
                        ></input>
                      </label>
                    </li>
                    <li>
                      <label>
                        Role:
                        <select
                          className="select"
                          name="role"
                          onChange={handleChange}
                          required
                        >
                          <option defaultValue="">Select your option</option>
                          {roles.map((role) => (
                            <option key={role.id}>{role.role}</option>
                          ))}
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Type:
                        <select
                          className="select"
                          name="type"
                          onChange={handleChange}
                          required
                        >
                          <option defaultValue="">Select your option</option>
                          {types.map((type) => (
                            <option key={type.id}>{type.type}</option>
                          ))}
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Minimum Proficiency:
                        <select
                          className="select"
                          name="minimum_proficiency"
                          onChange={handleChange}
                          required
                        >
                          <option defaultValue="">Select your option</option>
                          {levels.map((level) => (
                            <option key={level.id}>{level.name}</option>
                          ))}
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Location:
                        <select
                          className="select"
                          name="location"
                          onChange={handleChange}
                          required
                        >
                          <option defaultValue="">Select your option</option>
                          {locations.map((location) => (
                            <option key={location.id}>{location.city}</option>
                          ))}
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Description:
                        <textarea
                          rows="4"
                          cols="50"
                          name="description"
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </li>
                  </ul>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};
export default NewOpportunityForm;
