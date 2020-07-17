import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Separator from "../Separator";

const ListOfOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://ancient-hamlet-95801.herokuapp.com/api/opp"
        );
        const json = await res.json();
        setOpportunities(json);
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

  return (
    <section className="opportunitySection">
      <Separator category="opportunities" />
      {opportunities.map((opportunity) => {
        return (
          <article className="opp_article" key={opportunity._id}>
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
