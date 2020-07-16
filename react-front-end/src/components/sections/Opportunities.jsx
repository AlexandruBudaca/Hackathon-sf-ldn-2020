import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Separator from "../Separator";
const ListOfOpportunities = () => {
  const [opportunities, setOpportinities] = useState([]);

  useEffect(() => {
    fetch("https://ancient-hamlet-95801.herokuapp.com/api/opp")
      .then((req) => req.json())
      .then((data) => setOpportinities(data));
  }, [opportunities]);

  return (
    <section className="opportunitySection">
      <Separator category="opportunities" />
      {opportunities.map((opportunity, index) => {
        return (
          <article className="opp_article">
            <div className="opportunity_logo">
              <img
                src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/opp-icon/role-frontend.gif?raw=true"
                alt=""
              />
            </div>

            <div>
              <div>
                {/* <Link to="/Opportunity">
                </Link> */}
                <p>{opportunity.company}</p>
              </div>
              <div>
                <span>{opportunity.description}</span>
              </div>
              <div>
                <div>
                  <span>{opportunity.location}</span>
                </div>
                <div>
                  <span>{opportunity.role}</span>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListOfOpportunities;
