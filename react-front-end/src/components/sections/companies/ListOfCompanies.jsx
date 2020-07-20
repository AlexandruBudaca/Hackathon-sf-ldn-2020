import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Separator from "../../../components/Separator";
import Sample from '../../../MockData/images/sample.png'
let companiesData = require("../../../MockData/companies.json");

const ListOfCompanies = () => {
  const [companies, setCompanies] = useState(companiesData);
  return (
    <section className="companiesSection">
      <Separator category="list of companies" />

      {companies.map((company, index) => {
        return (
          <article className="company_details" key="id">
               <img className="companyLogo col-1" src={Sample} alt="" />
            <div className="company_content">
       
            <div className="row nearLogo">
              <div className="name_descrip ">
                <span className="bold ">Company Name: </span>{company.company}
             
              </div>
           
                <div className="name_descrip">
                <span className="bold">Company Info : </span>
                <span>{company.description}</span></div>
              </div>  <Link to="/Company" className="readMore_link">
                  {" "}
                  <button className="resetFilters">Read More...</button>
                </Link>
              <div className="application_Date">
              
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListOfCompanies;
