import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Separator from "../../../components/Separator";
import Sample from "../../../MockData/images/sample.png";
let companiesData = require("../../../MockData/companies.json");
// this component is designed to display all the registered companies
const ListOfCompanies = () => {
  // eslint-disable-next-line
  const [companies, setCompanies] = useState(companiesData);
  return (
    <section className="companiesSection">
      <Separator category="list of companies" />

      {companies.map((company, index) => {
        return (
          <article className="opp_article row" key="id">
            <img className="companyLogo col-1" src={Sample} alt="" />

            <div className="col-2 COLUMN">
              <span className="bold ">Company Name: </span>
              <span>{company.company}</span>
            </div>
            <div className="col-3 COLUMN">
              <span className="bold">Company Info : </span>
              <span>{company.description}</span>

              <Link to="/Company" className="readMore_link">
                <button className="oppColumnApply blue">Read More...</button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListOfCompanies;
