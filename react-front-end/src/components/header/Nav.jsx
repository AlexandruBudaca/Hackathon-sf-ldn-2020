import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
import login from "../../images/person.png";
import logout from "../../images/logout.png";
import { withRouter } from "react-router-dom";

function Nav(props) {
  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("auth"));
    props.setLog(logged);
  }, []);

  const handleSignOut = () => {
    if (props.loggedInUser) {
      props.setLoggedInUser(!props.loggedInUser);
    }
    props.setLog("");
    props.history.push("/");
    localStorage.clear();
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
            <Link to="/listOfCompanies" className="navStyle">
              {" "}
              <li className="simpleNavList">Companies</li>
            </Link>
            {/* Hide/Show Opportunities Page when graduates log in*/}
            {(props.log && props.log.token) || props.loggedInUser ? (
              <Link to="/opportunities" className="navStyle">
                <li className="simpleNavList"> Opportunities</li>
              </Link>
            ) : (
              ""
            )}
            {(props.log && props.log.token) || props.loggedInUser ? (
              ""
            ) : (
              <Link to="/Graduates" className="navStyle">
                <li className="simpleNavList">Graduates</li>
              </Link>
            )}

            {/* <Link to="/tips" className="navStyle">
              <li className="simpleNavList">Tips & FAQ</li>
            </Link> */}

            {/* <Link to="/signIn" className="navStyle">
              <li className="simpleNavList">Sign in</li>
            </Link> */}

            {(props.log && props.log.token) || props.loggedInUser ? (
              ""
            ) : (
              <Link to="/signIn" className="navStyle">
                <li className="simpleNavList">Sign in</li>
              </Link>
            )}
            {/* Show Sign out svg when graduates log in*/}
            <div className="up-login-logOut">
              {(props.log && props.log.token) || props.loggedInUser ? (
                <div className="logout">
                  <img
                    className="personLogIn"
                    src={login}
                    alt="person logged"
                  />
                  {/* <p>Welcome</p> */}
                </div>
              ) : (
                ""
              )}

              {(props.log && props.log.token) || props.loggedInUser ? (
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
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Nav);
