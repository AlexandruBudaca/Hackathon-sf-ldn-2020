import React from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";

function Nav(props) {
  const loggedInUser = localStorage.getItem("auth");

  return (
    <header className="header row">
      <div className="row justified alignRight">
        <img className="col-3" src={imgSrc} />

        <nav className="nav col-6">
          {loggedInUser ? (
            <div>
              {" "}
              <span className="you_are_logged_in bold">You are logged in!</span>
            </div>
          ) : (
            ""
          )}
          <ul className="row navRow">
            <Link to="/" className="navStyle">
              <li className="simpleNavList">Home</li>
            </Link>
            <Link to="/listOfCompanies" className="navStyle">
              {" "}
              <li className="simpleNavList">Companies</li>
            </Link>
            {loggedInUser ? (
              <Link to="/opportunities" className="navStyle">
                <li className="simpleNavList">Opportunities</li>
              </Link>
            ) : (
              <div></div>
              // <li className="simpleNavList">
              //   <div className="tooltip">
              //     Opportunities
              //     <span className="tooltiptext">You must log in!</span>
              //   </div>
              //   </li>
            )}

            <Link to="/Graduates" className="navStyle">
              <li className="simpleNavList">Graduates</li>
            </Link>
            {/* <Link to="/tips" className="navStyle">
              <li className="simpleNavList">Tips & FAQ</li>
            </Link> */}
            <Link to="/NewOpportunityForm" className="navStyle">
              <li className="simpleNavList"> Add new opportunity</li>
            </Link>
            {/* <Link to="/signIn" className="navStyle">
              <li className="simpleNavList">Sign in</li>
            </Link> */}
            <Link to="/signUp" className="navStyle">
              <li className="simpleNavList">Sign up</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
