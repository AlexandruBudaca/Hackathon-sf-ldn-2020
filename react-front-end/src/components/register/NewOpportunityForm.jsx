import React, { useState } from "react";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
import SelectNewOpportunity from "./SelectNewOpportunity";
// import roles from "./dummyData/roles";
// import './index.css'
/* 
Registration is a shorter home to fill for users to sign up 
quickly with the minimum info needed. Once a user is created they
can add to their profile via the Profile Edit to add fields: 
bio, occupation, img. 
*/
const NewOpportunityForm = () => {
  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    jobInterest: [],
  });

  const handleChange = (event) => {
    const newOpportunity = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newOpportunity);
    console.log(newOpportunity.title);
  };
  const handleSubmit = (event) => {
    //Email validation
    if (!form.email.includes("@")) {
      return alert("Please enter Valid email");
    }
    //Creating JSON data for POST request to DB

    event.preventDefault();
    fetch(`#`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      //Clearing Form
      setForm({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        jobInterest: [],
      });
    });
  };
  const handleJobInterest = (event) => {
    //checks if event is selected. If it is selected it is added to state, it unselected it is filtered out of array.
    if (event.target.checked) {
      form.jobInterest = [...form.jobInterest, event.target.value];
    } else {
      const jobInterest = form.jobInterest.filter((job) => {
        return job !== event.target.value;
      });

      form.jobInterest = jobInterest;
    }
  };
  return (
    <div>
      <div className="imgBlk">
        <img src={imgSrc} alt="" />
      </div>

      <section className="mainRegister">
        <h3>New Opportunity Form</h3>
        <div className="div-form">
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <SelectNewOpportunity
                  label={"Role:"}
                  handleChange={handleChange}
                  // data={roles}
                />
                {
                  <SelectNewOpportunity
                    label={"Type:"}
                    handleChange={handleChange}
                  />
                }
                {/* <SelectNewOpportunity
                  label={"Minimum Proeficiency:"}
                  handleChange={handleChange}
                />
                <SelectNewOpportunity
                  label={"Location:"}
                  handleChange={handleChange}
                /> */}
              </li>
            </ul>
          </form>
          <button>Submit</button>
        </div>
      </section>
    </div>
  );
};
export default NewOpportunityForm;
