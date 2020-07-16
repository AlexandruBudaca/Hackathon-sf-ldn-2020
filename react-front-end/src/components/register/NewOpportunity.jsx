import React, { useState } from "react";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
import { roles } from "./data/roles";
import { types } from "./data/types";
import { levels } from "./data/level";
import { locations } from "./data/location";
import Separator from "../Separator";
/* 
Registration is a shorter home to fill for users to sign up 
quickly with the minimum info needed. Once a user is created they
can add to their profile via the Profile Edit to add fields: 
bio, occupation, img. 
*/
const NewOpportunityForm = () => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    type: "",
    minimum: "",
    location: "",
    description: "",
  });

  const handleChange = (event) => {
    const newOpportunity = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newOpportunity);
  };
  const handleSubmit = (event) => {
    //Email validation
    // if (!form.email.includes("@")) {
    //   return alert("Please enter Valid email");
    // }
    //Creating JSON data for POST request to DB

    event.preventDefault();
    fetch(`#`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      //Clearing Form
      // setForm({
      //   company: "",
      //   role: "",
      //   type: "",
      //   minimum: "",
      //   location: "",
      //   description: "",
      // });
    });
    console.log(form);
  };
  // const handleJobInterest = (event) => {
  //   //checks if event is selected. If it is selected it is added to state, it unselected it is filtered out of array.
  //   if (event.target.checked) {
  //     form.jobInterest = [...form.jobInterest, event.target.value];
  //   } else {
  //     const jobInterest = form.jobInterest.filter((job) => {
  //       return job !== event.target.value;
  //     });

  //     form.jobInterest = jobInterest;
  //   }
  // };
  return (
    <section className="companiesSection">
      <Separator category={"New Opportunity"} />
      <div>
        <section className="mainRegister">
          <div className="div-form-graduates">
            <div className="div-form">
              <form>
                <ul>
                  <li>
                    <label>
                      Company:
                      <input
                        className="select"
                        name="company"
                        onChange={handleChange}
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
                        name="minimum"
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
              </form>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default NewOpportunityForm;
