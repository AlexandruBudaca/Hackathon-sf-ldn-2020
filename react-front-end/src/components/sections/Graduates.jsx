import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Graduates =()=> {
  const [students, setStudents]= useState ([
        {
          name: 'pasta',
          imgSrc: 'https://via.placeholder.com/150',
          description: 'hola', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
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

  
    return (
        <h1>i am student</h1>
    //   <section className="companiesSection">
    //     <h2>Graduate students</h2>
    //     {students.map((student, index) => {
    //       return (
    //         <Link to="/Opportunity" className="company_link">
    //           <article className="company_details opportunity_details">
    //             <div className="company_logo">
    //               <img src={student.imgSrc} />
    //             </div>
    //             <div className="company_content">
    //               <div className="name_descrip">
    //                 <p><span>Student's Name: </span> <span className="bold">{student.name}</span></p>

    //               </div>
    //               <div className="comapny_descript"><span className="bold">Job Description : </span><span>{student.description}</span></div>
    //               <div className="application_Date">
    //                 <div><span>Published on : </span><span className="bold">{student.publishedOn}</span></div>
    //                 <div><span>Apply By : </span><span className="bold">{student.applyBy}</span></div>
    //               </div>
    //             </div>
    // //           </article>
    //         </Link>
    //       )
    //     })}
    //   </section>
    // )
    )}


export default Graduates