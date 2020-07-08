import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ListOfCompanies = () => {
  const [companies, setCompanies] = useState([
    {
      name: "pasta",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      numberOfOffers: 4,
    },
    {
      name: "pasta",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      numberOfOffers: 4,
    },
    {
      name: "pasta",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      numberOfOffers: 4,
    },
    {
      name: "pasta",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      numberOfOffers: 4,
    },
  ]);

  return (
    <section className="companiesSection">
      <h2>List of Companies</h2>
      {this.state.companies.map((company, index) => {
        return (
          <article className="company_details">
            <div className="company_logo">
              <img src={company.imgSrc} />
            </div>
            <div className="company_content">
              <div className="name_descrip">
                <p>
                  <span>Company's Name: </span>{" "}
                  <span className="bold">{company.name}</span>
                </p>
                <p>Number of Opportunities: {company.numberOfOffers}</p>
              </div>
              <div className="comapny_descript">
                <span className="bold">Company Info : </span>
                <span>{company.description}</span>
              </div>
              <div className="application_Date">
                <Link to="/Company" className="readMore_link">
                  {" "}
                  <button className="readMore">Read More...</button>
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
