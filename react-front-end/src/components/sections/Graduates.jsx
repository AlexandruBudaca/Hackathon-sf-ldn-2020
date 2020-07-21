import React, { useState, useEffect } from "react";
import "./index.css";
import Separator from "../Separator";
import Gr from "../../MockData/Graduates.json";

const Graduates = () => {
  const [graduates, setGraduates] = useState(Gr);
  useEffect(() => {
    async function fetchGrads() {
      try {
        const res = await fetch(
          "https://ancient-hamlet-95801.herokuapp.com/api/users"
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
              <img
                className="companyLogo"
                src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/opp-icon/role-frontend.gif?raw=true"
                alt=""
              />
            </div>

            {/* <Link to="/Opportunity">
                </Link> */}
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
