import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import Separator from '../Separator'
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
      <section className="companiesSection">
      <Separator category="graduates"/>
        <h1>i am student</h1>

   <h2>Graduate students</h2>
   </section>
    )}


export default Graduates