import React from "react";

import SignInHomePage from "../register/SignInOnHomePage";
import seethefuture from "../../../src/seefuture (1).gif";
import studentpic from "../../../src/students.jpg";
import "./index.css";

const LandingPage = ({ isLogin, setIsLogin }) => {
  return (
    <main className="main container">
      <div className="firstIntro">
        <section className="introSection">
          <p className="introHeader">See the future</p>
          <p className="introtext">
            Envision the day-to-day requirements of your future career
          </p>
        </section>
        <img
          className="badBusinessPeopleWithBulb"
          alt="seethefuture"
          src={seethefuture}
        />
      </div>
      <div className="superRedSeparator"></div>
      <div className='row rowAligned'>
      <SignInHomePage isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
  
        <img className="col-6 sm-col-12" src={studentpic} alt="CYF students" />
        
        <section className="row">
          <h2 className="infotitle">Our Students</h2>
          <p className=" col-6 sm-col-12">
            See the Future is a way for students and graduates of the
            CodeYourFuture course to be matched with a range of opportunities
            provided by local businesses. This could be anything from a few
            hours of shadowing a professional developer or a tour of their
            office, all the way through to a student’s first technical job role.
            CodeYourFuture provides an 8-month, full stack, web development
            bootcamp for asylum seekers, refugees and people from other
            disadvantaged backgrounds. Many of our graduates have gone on to
            work in a range of roles such as both front and back end developer
            roles, at companies including the Financial Times, the BBC and
            Ticketmaster.
          </p>
      
      </section>
    </main>
  );
};

export default LandingPage;
