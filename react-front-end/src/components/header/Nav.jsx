import React from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";

function Nav(props) {
  return (
    <header className="header">
      <div className="brandbox">
        <div className="imgBlk">
          <img src={imgSrc} />
        </div>
        <nav className="nav">
          <ul>
            <Link to="/" className="navStyle">
              <li className="simpleNavList">Home</li>
            </Link>
            <Link to="/listOfCompanies" className="navStyle">
              {" "}
              <li className="simpleNavList">Companies</li>
            </Link>
            {props.isLogin ? (
              <Link to="/opportunities" className="navStyle">
                <li className="simpleNavList">Opportunities</li>
              </Link>
            ) : (
              ""
            )}

            <Link to="/Graduates" className="navStyle">
              <li className="simpleNavList">Graduates</li>
            </Link>
            <Link to="/tips" className="navStyle">
              <li className="simpleNavList">Tips & FAQ</li>
            </Link>
            <Link to="/NewOpportunityForm" className="navStyle">
              <li className="simpleNavList">New Opportunity</li>
            </Link>
            <Link to="/signIn" className="navStyle">
              <li className="simpleNavList">Sign in</li>
            </Link>
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
