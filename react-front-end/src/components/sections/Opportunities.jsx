import React, { useState, useEffect } from "react";
import "./index.css";
import Separator from "../Separator";
import { Link } from "react-router-dom";
import moment from "moment";
import frontend from "../../images/role-frontend.gif";
import backend from "../../images/role-backend.gif";
import designer from "../../images/role-designer.gif";
import programmer from "../../images/role-programmer.gif";
import projectMannager from "../../images/role-projectmanager.gif";
import tester from "../../images/role-tester.gif";
import solarArchitect from "../../images/role-solarchitect.gif";
//this component displays job opportunities fetched from the
// server and contains filters
const ListOfOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://sf-hackathon-2020.herokuapp.com/api/opp"
        );
        const json = await res.json();
        setOpportunities(
          json.sort(
            (a, b) =>
              moment(a.date).format("DD-MM-YYYY") -
              moment(b.date).format("DD-MM-YYYY")
          )
        );
      } catch (error) {
        console.error(error.message);
      }
    }

    const repeat = setTimeout(fetchData, 60000);
    return () => {
      clearTimeout(repeat);
    };
  }, []);
  // this filter by role and sets opportunities
  const filterRole = (event) => {
    event.preventDefault();
  };

  // this filter by Location and sets in opportunities state
  const filterLoc = (event) => {
    event.preventDefault();
  };

  async function resetFilters() {
    const res = await fetch("https://sf-hackathon-2020.herokuapp.com/api/opp");
    const json = await res.json();
    setOpportunities(
      json
        .sort(
          (a, b) =>
            moment(a.date).format("DD-MM-YYYY") -
            moment(b.date).format("DD-MM-YYYY")
        )
        .reverse()
    );
  }
  return (
    <section className="opportunitySection">
      <Separator category="Opportunities" />
      <h1 className="filters">Filter opportunities</h1>
      <div className="col-12 filters">
        <select onChange={filterRole} className="col-3">
          <option defaultValue="">Select role</option>
          <option value="Front-end">front-end</option>
          <option value="back-end">back-end</option>
          <option value="full-stack">full-stack</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>

        <select className="col-3" id="2" name="location" onChange={filterLoc}>
          <option defaultValue="">Select location</option>
          <option value="London">London</option>
          <option value="Edinburgh">Edinburgh</option>
          <option value="Cardiff">Cardiff</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Manchester">Manchester</option>
          <option value="Birmingham">Birmingham</option>
          <option value="Rome">Rome</option>
        </select>
        <button onClick={resetFilters} className="resetFilters">
          reset filters
        </button>
      </div>
      {/* display images for each type of role */}
      {opportunities.map((opportunity) => {
        let srcRole;
        if (opportunity.role === "Front-end Developer") {
          srcRole = frontend;
        } else if (opportunity.role === "Back-end Developer") {
          srcRole = backend;
        } else if (opportunity.role === "Programmer") {
          srcRole = programmer;
        } else if (opportunity.role === "UI/UX Designer") {
          srcRole = designer;
        } else if (opportunity.role === "Solution Architect") {
          srcRole = solarArchitect;
        } else if (opportunity.role === "Tester") {
          srcRole = tester;
        } else if (opportunity.role === "Project Manager") {
          srcRole = projectMannager;
        } else {
          srcRole = solarArchitect;
        }

        return (
          <article className="opp_article row" key={opportunity._id}>
            <img className="companyLogo col-1" src={srcRole} alt="" />

            <div className="oppColumn col-4">
              <Link className="job-link" to="/Opportunity">
                <h2>{opportunity.role}</h2>
              </Link>
              <p className="job-location">{opportunity.location}</p>
              <p className="job-description">{opportunity.description}</p>
              <Link className="job-link" to="/Opportunity">
                <p>View full job listing V</p>
              </Link>
              <div className="job-company-date">
                <p>{opportunity.company}</p>
                <p className="job-date">
                  {moment(opportunity.date).format("DD-MM-YYYY")}
                </p>
                <p className="job-date-last">
                  {moment(opportunity.date).fromNow()}
                </p>
              </div>
            </div>
            <div className="oppColumnApply col-2">
              <p>{opportunity.minimum_proficiency}</p>
              <button
                onClick={() => {
                  alert("You apply successfully!");
                }}
              >
                Apply
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListOfOpportunities;
