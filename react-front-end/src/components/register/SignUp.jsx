import React, { Component } from "react";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
// import './index.css'
/* 
Registration is a shorter home to fill for users to sign up 
quickly with the minimum info needed. Once a user is created they
can add to their profile via the Profile Edit to add fields: 
bio, occupation, img. 
*/
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      jobInterest: "",
      form: [],
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    const { title, firstName, lastName, email, jobInterest } = this.state;
    //Email validation
    if (!email.includes("@")) {
      return alert("Please enter Valid email");
    }
    //Creating JSON data for POST request to DB
    this.setState({
      form: [{ title, firstName, lastName, email, jobInterest }],
    });
    event.preventDefault();
    fetch(`#`, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      //Clearing Form
      this.setState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        jobInterest: [],
      });
    });
  };
  handleJobInterest = (event) => {
    //checks if event is selected. If it is selected it is added to state, it unselected it is filtered out of array.
    if (event.target.checked) {
      this.setState({
        jobInterest: [...this.state.jobInterest, event.target.value],
      });
    } else {
      const jobInterest = this.state.jobInterest.filter((job) => {
        return job !== event.target.value;
      });
      this.setState({
        jobInterest: jobInterest,
      });
    }
  };
  render() {
    const { title, firstName, lastName, email } = this.state;
    return (
      <section className="mainRegister">
        <div className="imgBlk">
          <img src={imgSrc} alt="" />
        </div>

        <h3>Registration Form</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                *Title:
                <select
                  className="select"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="Email Address"
                  name="email"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
          </ul>
          <p>I am Interested in:</p>
          <ul className="interestArea">
            <li>
              <label>
                <p>Front End Developer</p>
                <input
                  className="check"
                  type="checkbox"
                  name="front-end-developer"
                  value="front-end-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                <p>Back End Developer</p>
                <input
                  className="check"
                  type="checkbox"
                  name="back-end-developer"
                  value="back-end-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                <p>UX/UI Developer</p>
                <input
                  className="check"
                  type="checkbox"
                  name="ux/ui-developer"
                  value="ux/ui-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                <p>Software Quality Assurance Analyst</p>
                <input
                  className="check"
                  type="checkbox"
                  name="software-quality-assurance-analyst"
                  value="software-quality-assurance-analyst"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                <p>Project Management</p>
                <input
                  className="check"
                  type="checkbox"
                  name="project-management"
                  value="project-management"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <input type="submit" className="btn" />
          </ul>
        </form>
      </section>
    );
  }
}
export default Registration;
