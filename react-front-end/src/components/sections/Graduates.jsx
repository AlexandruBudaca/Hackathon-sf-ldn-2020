import React, {  useState, useEffect } from 'react';
import './index.css'
import Separator from '../Separator'
import Gr from '../../MockData/Graduates.json'

const Graduates =()=> {
  const [graduates, setGraduates]= useState(Gr)
  useEffect(() => {
    async function fetchGrads() {
      try {
        const res = await fetch(
          "https://ancient-hamlet-95801.herokuapp.com/api/users"
        );
        const json = await res.json()
        setGraduates(json)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchGrads();
  }, []);
    return (
      <section className="companiesSection">
      <Separator category="Graduates"/>
      {graduates.map((grad) => {
      return (
          <article className="opp_article row" key={grad._id}>
      
              <img className='companyLogo col-1'
                src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/opp-icon/role-frontend.gif?raw=true"
                alt=""
              />
     
              <div className='oppColumn col-3'>
                {/* <Link to="/Opportunity">
                </Link> */}
                <p>{grad.firstName}</p>
                <p>{grad.lastName}</p>
              
                <span>{grad.lastName}</span>
               
               <span>{grad.role}</span>
                </div>
                <div className='oppColumn col-3'>
                <span>{grad.description}</span>
            </div>
              

           
          </article>
        );
      })}
    </section>

    )}


export default Graduates