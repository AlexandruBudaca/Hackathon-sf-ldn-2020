import React, { useState, useEffect } from "react";
import "./index.css";
import Separator from "../Separator";
import Gr from "../../MockData/Graduates.json";
import frontend from "../../images/role-frontend.gif";

const Graduates = () => {
  const [graduates, setGraduates] = useState(Gr);
  useEffect(() => {
    async function fetchGrads() {
      try {
        const res = await fetch(
          "https://sf-hackathon-2020.herokuapp.com/api/users"
        );
        const json = await res.json();
        setGraduates(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchGrads();
  }, []);
  return (
    <section className="companiesSection">
      <Separator category="Graduates" />
      {graduates.map((grad) => {
        return (
          <article className="opp_article row alignedTop" key={grad._id}>
            <div className="justified">
              <img className="companyLogo" src={frontend} alt="" />
            </div>
            <p className="centered justified col-3">{grad.firstName}</p>

            <span className="centered justified col-3">{grad.lastName}</span>

            <span className="centered justified col-3">{grad.role}</span>

            <span className="centered justified col-3">{grad.description}</span>
          </article>
        );
      })}
    </section>
  );
};

export default Graduates;
