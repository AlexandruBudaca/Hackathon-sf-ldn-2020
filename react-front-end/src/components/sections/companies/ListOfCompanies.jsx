import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Separator from "../../../components/Separator";

let companiesData = require("../../../MockData/companies.json");

const ListOfCompanies = () => {
  const [companies, setCompanies] = useState(companiesData);
  return (
    <section className="companiesSection">
      <Separator category="list of companies" />

      {companies.map((company, index) => {
        return (
          <article className="company_details" key="id">
            <div className="company_logo">
              <img src={company.imgSrc} />
            </div>
            <div className="company_content">
              <div className="name_descrip">
                <span>Company's Name: </span>{" "}
                <span className="bold">{company.name}</span>
                <p>Number of Opportunities: {company.numberOfOffers}</p>
              </div>
              <div className="comapny_descript">
                <span className="bold">Company Info : </span>
                <span>{company.description}</span>
              </div>
              <div className="application_Date">
                <Link to="/Company" className="readMore_link">
                  {" "}
                  <button className="resetFilters">Read More...</button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListOfCompanies;
