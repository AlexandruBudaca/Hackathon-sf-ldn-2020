import React, { Component } from "react";
import LazyCarousel from "./Carousel";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";

const LandingPage = () => {
  return (
    <main className="main">
      <section className="carousel">
        <div className="imgBlk">
          <img src={imgSrc} />
        </div>
        <LazyCarousel />
      </section>
      <section className="info">
        <section className="About">
          <h2>ABOUT US</h2>
          <p>
            Many of the students on the CodeYourFuture course are unfamiliar
            with the world of software development within the UK and many have
            never held a technical job role before. See the Future is a way for
            students and graduates of the CodeYourFuture course to be matched
            with a range of opportunities provided by local businesses. This
            could be anything from a few hours of shadowing a professional
            developer or a tour of their office, all the way through to a
            student’s first technical job role
          </p>
        </section>
        <section className="ourStudent">
          <h2>Our Students</h2>
          <p>
            CodeYourFuture provides an 8-month, full stack, web development
            bootcamp for asylum seekers, refugees and people from other
            disadvantaged backgrounds. Our students come from a huge range of
            backgrounds and varying levels of experience, but join together and
            form a community around a common interest in tech and coding. Many
            of our graduates have gone on to work in a range of roles such as
            both front and back end developer roles, at companies including the
            Financial Times, the BBC and Ticketmaster.
          </p>
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
