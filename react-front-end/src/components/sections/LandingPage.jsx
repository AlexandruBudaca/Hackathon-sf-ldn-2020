import React from "react";

import SignInHomePage from "../register/SignInOnHomePage";
import seethefuture from "../../../src/images/seefuture (1).gif";
import studentpic from "../../../src/images/students.jpg";
import "./index.css";
const LandingPage = ({
  setLoggedInUser,
  loggedInUser,
  setLog,
  log,
  setLogSession,
  logSession,
}) => {
  return (
    <main className="main">
      <div className="row landingSecondContainer">
        <div className="col-12 firstBlock">
          <div className="introblock col-6 md-col-6 sm-col-12">
            <p className="introHeader">See the future</p>
            <p className="introtext">
              Envision the day-to-day requirements of your future career
            </p>
          </div>
          <img
            className="badBusinessPeopleWithBulb col-4 sm-col-12 md-col-6"
            alt="seethefuture"
            src={seethefuture}
          />
        </div>
      </div>
      <div className="superRedSeparator"></div>
      <div className="row rowAlignen">
        <SignInHomePage
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser}
          setLog={setLog}
          log={log}
          logSession={logSession}
          setLogSession={setLogSession}
        />

        <img
          className="col-6 sm-col-12 md-col-6"
          src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/Pages%20files/dev-signin.jpg?raw=true"
          alt=""
        />
      </div>
      <div className="ourStudents">
        <div className=" row ">
          <img
            className="studPic col-7 md-col-6 sm-col-12"
            src={studentpic}
            alt="CYF students"
          />
          <div className="col-6 md-col-6 sm-col-12">
            <h2 className="infotitle col-6 sm-col-12">Our Students</h2>
            <p className="col-12">
              See the Future is a way for students and graduates of the
              CodeYourFuture course to be matched with a range of opportunities
              provided by local businesses. This could be anything from a few
              hours of shadowing a professional developer or a tour of their
              office, all the way through to a student’s first technical job
              role. CodeYourFuture provides an 8-month, full stack, web
              development bootcamp for asylum seekers, refugees and people from
              other disadvantaged backgrounds. Many of our graduates have gone
              on to work in a range of roles such as both front and back end
              developer roles, at companies including the Financial Times, the
              BBC and Ticketmaster.
            </p>
          </div>{" "}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
