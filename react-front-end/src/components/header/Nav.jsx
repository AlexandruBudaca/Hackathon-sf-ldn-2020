import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
import login from "../../images/person.png";
import logout from "../../images/logout.png";
import { withRouter } from "react-router-dom";

function Nav(props) {
  useEffect(() => {
    const logged = JSON.parse(sessionStorage.getItem("authorization"));
    props.setLog(logged);
  }, []);

  const handleSignOut = () => {
    props.setLogSession({});
    props.setLog("");
    props.history.push("/");
    sessionStorage.clear();
  };

  return (
    <header className="header row">
      <div className="row justified alignRight">
        <img className="col-3" src={imgSrc} alt="" />

        <nav className="nav col-6">
          <div className="up-login-logOut"></div>
          <ul className="row navRow">
            <Link to="/" className="navStyle">
              <li className="simpleNavList">Home</li>
            </Link>
            {/* Hide/Show Opportunities Page when graduates log in*/}
            {(props.log &&
              props.log.message === "Graduate Authorization successful") ||
            (props.logSession &&
              props.logSession.message ===
                "Graduate Authorization successful") ||
            (props.log &&
              props.log.message === "Company Authorization successful") ||
            (props.logSession &&
              props.logSession.message ===
                "Company Authorization successful") ? (
              <Link to="/opportunities" className="navStyle">
                <li className="simpleNavList"> Opportunities</li>
              </Link>
            ) : (
              ""
            )}
            <Link to="/listOfCompanies" className="navStyle">
              <li className="simpleNavList">Companies</li>
            </Link>

            <Link to="/Graduates" className="navStyle">
              <li className="simpleNavList">Graduates</li>
            </Link>

            {(props.log &&
              props.log.message === "Company Authorization successful") ||
            (props.logSession &&
              props.logSession.message ===
                "Company Authorization successful") ? (
              <Link to="/NewOpportunityForm" className="navStyle">
                <li className="simpleNavList">Add New Opportunity</li>
              </Link>
            ) : (
              ""
            )}
            {props.log || props.logSession.token ? (
              ""
            ) : (
              <div className="logout">
                <Link to="/signIn" className="navStyle">
                  <li className="simpleNavList">Sign in</li>
                </Link>
              </div>
            )}
            {/* Show Sign out svg when graduates log in*/}

            {props.log || props.logSession.token ? (
              <div className="up-login-logOut">
                <div className="logout">
                  <img
                    className="personLogIn"
                    src={login}
                    alt="person logged"
                  />
                  <div className="displayName">
                    {props.logSession &&
                    props.logSession.message ===
                      "Company Authorization successful"
                      ? props.logSession.name
                      : ""}
                    {props.log &&
                    props.log.message === "Company Authorization successful"
                      ? props.log.name
                      : ""}
                    {props.logSession &&
                    props.logSession.message ===
                      "Graduate Authorization successful"
                      ? props.logSession.firstName
                      : ""}
                    {props.log &&
                    props.log.message === "Graduate Authorization successful"
                      ? props.log.firstName
                      : ""}
                  </div>
                </div>

                <div className="logout">
                  <button onClick={handleSignOut}>Sign out</button>
                  <img
                    className="logout-sign"
                    src={logout}
                    alt="person logged"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            {/* <Link to="/tips" className="navStyle">
              <li className="simpleNavList">Tips & FAQ</li>
            </Link> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Nav);
