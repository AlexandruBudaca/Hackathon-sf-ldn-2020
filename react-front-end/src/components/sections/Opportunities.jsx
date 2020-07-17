import React, { useState, useEffect } from "react";
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
      <Separator category="Opportunities" />
      <div className='row'>
      <select className = 'col-3' id="1" name="skills">
  <option value="front-end">front-end</option>
  <option value="back-end">back-end</option>
  <option value="full-stack">full-stack</option>
</select>
<select className = 'col-3' id="2" name="level">
  <option value="junior">junior</option>
  <option value="midweight">midweight</option>
  <option value="senior">senior</option>
  <option value="12th dan">12th dan</option>
</select>
<select className = 'col-3' id="2" name="location">
  <option value="London">London</option>
  <option value="Manchester">Manchester</option>
  <option value="Birmingham">Birmingham</option>
  <option value="Rome">Rome</option>
</select>
</div>
      {opportunities.map((opportunity) => {
        return (
          <article className="opp_article row" key={opportunity._id}>
      
              <img className='companyLogo col-1'
                src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/opp-icon/role-frontend.gif?raw=true"
                alt=""
              />
     
              <div className='oppColumn col-3'>
                {/* <Link to="/Opportunity">
                </Link> */}
                <p>{opportunity.company}</p>
              
                <span>{opportunity.location}</span>
               
               <span>{opportunity.role}</span>
                </div>
                <div className='oppColumn col-3'>
                <span>{opportunity.description}</span>
            </div>
              

           
          </article>
        );
      })}
    </section>
  );
};

export default ListOfOpportunities;
