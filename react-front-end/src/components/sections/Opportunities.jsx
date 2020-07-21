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

const ListOfOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [defaultOpportunities, setDefaultOpportunities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://ancient-hamlet-95801.herokuapp.com/api/opp"
        );
        const json = await res.json();
        setOpportunities(json);
        setDefaultOpportunities(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    const repeat = setTimeout(fetchData, 60000);
    return () => {
      clearTimeout(repeat);
    };
  }, []);
  // this filter by role and sets opportunities in state
  const filterRole = (event) => {
    setOpportunities(defaultOpportunities);
    if (event.target.value != null && opportunities === defaultOpportunities) {
      const flteredByRole = opportunities.filter((opp) =>
        opp.role.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setOpportunities(flteredByRole);
    }
  };

  // this filter by Location and sets in opportunities state
  const filterLoc = (event) => {
    setOpportunities(defaultOpportunities);
    if (event.target.value != null && opportunities === defaultOpportunities) {
      const flteredByLocation = opportunities.filter((opp) =>
        opp.location.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setOpportunities(flteredByLocation);
    }
  };
  async function resetFilters() {
    const res = await fetch(
      "https://ancient-hamlet-95801.herokuapp.com/api/opp"
    );
    const json = await res.json();
    setOpportunities(json);
  }
  opportunities
    .sort(
      (a, b) =>
        moment(a.date).format("DD-MM-YYYY") -
        moment(b.date).format("DD-MM-YYYY")
    )
    .reverse();

  return (
    <section className="opportunitySection">
      <Separator category="Opportunities" />
      <h1 className="filters">Filter opportunities</h1>
      <div className="col-12 filters">
        <select onChange={filterRole} className="col-3">
          <option onChange={filterRole} value="front-end">
            front-end
          </option>
          <option onChange={filterRole} value="back-end">
            back-end
          </option>
          <option onChange={filterRole} value="full-stack">
            full-stack
          </option>

          <option onChange={filterRole} value="UI/UX Designer">
            UI/UX Designer
          </option>
        </select>

        <select className="col-3" id="2" name="location" onChange={filterLoc}>
          <option onChange={filterLoc} value="London">
            London
          </option>
          <option onChange={filterLoc} value="Manchester">
            Manchester
          </option>
          <option onChange={filterLoc} value="Birmingham">
            Birmingham
          </option>
          <option onChange={filterLoc} value="Rome">
            Rome
          </option>
        </select>
        <button onClick={resetFilters} className="resetFilters">
          reset filters
        </button>
      </div>

      {opportunities.map((opportunity) => {
        const date = moment(opportunity.date).format("DD-MM-YYYY");
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
                <p className="job-date">{date}</p>
                <p className="job-date-last">
                  {" "}
                  {moment(date, "DD-MM-YYYY").fromNow()}
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
