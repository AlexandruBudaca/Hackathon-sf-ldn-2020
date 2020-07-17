import React, {  useState } from 'react';

import './index.css'
import Separator from '../Separator'
const Graduates =()=> {
  const [graduates, setGraduates]= useState ([
        {
          name: 'pasta',
          imgSrc: 'https://via.placeholder.com/150',
          description: 'hola', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'Bob', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        }])

        async function fetchGrads() {
          try {
            const res = await fetch(
              "https://ancient-hamlet-95801.herokuapp.com/api/opp"
            );
            const json = await res.json()
            setGraduates(json)
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchGrads()
    return (
      <section className="companiesSection">
      <Separator category="graduates"/>
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