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
    props.setLoggedInUser(!props.loggedInUser);
    props.setSignOutComp(!props.signOutComp);

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
            {props.loggedInUser ? (
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

            {props.logSession &&
            props.logSession.message === "Company Authorization successful" ? (
              <Link to="/NewOpportunityForm" className="navStyle">
                <li className="simpleNavList">Add New Opportunity</li>
              </Link>
            ) : null}
            {console.log(props.log)}
            {props.loggedInUser === true ? (
              <div className="logout">
                <Link to="/signIn" className="navStyle">
                  <li onClick={handleSignOut} className="simpleNavList">
                    Sign out
                    <div className="logout">
                      <img
                        className="personLogIn"
                        src={login}
                        alt="person logged"
                      />
                      <img
                        className="logout-sign"
                        src={logout}
                        alt="person logged"
                      />
                    </div>
                  </li>
                </Link>
              </div>
            ) : (
              <div className="logout">
                <Link to="/signIn" className="navStyle">
                  <li className="simpleNavList">Sign in</li>
                </Link>
              </div>
            )}
            {/* Show Sign out svg when graduates log in*/}

            {/* <div className="up-login-logOut">
              {props.loggedInUser || props.signOutComp ? (
                <div className="logout">
                  <img
                    className="personLogIn"
                    src={login}
                    alt="person logged"
                  />
                  {props.logSession.name
                    ? props.logSession.name
                    : props.logSession.firstName}
                </div>
              ) : (
                ""
              )} */}

            {/* {props.signOutComp || props.loggedInUser ? (
                <div className="logout">
                  <button onClick={handleSignOut}>Sign out</button>
                  <img
                    className="logout-sign"
                    src={logout}
                    alt="person logged"
                  />
                </div>
              ) : (
                ""
              )} */}
            {/* <Link to="/tips" className="navStyle">
              <li className="simpleNavList">Tips & FAQ</li>
            </Link> */}
            {/* </div> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Nav);
