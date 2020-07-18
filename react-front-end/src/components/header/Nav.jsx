import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../images/cyf_brand.png";
import "./index.css";
import login from "../../images/person.png";
import logout from "../../images/logout.png";
import { withRouter } from "react-router-dom";

function Nav(props) {
  const [log, setLog] = useState(() => {
    JSON.parse(localStorage.getItem("auth"));
  });

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("auth"));
    setLog(logged);
  }, []);

  const handleSignOut = () => {
    if (props.loggedInUser) {
      props.setLoggedInUser(!props.loggedInUser);
    }
    setLog("");
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
            {log && log.message === "Authorization successful" ? (
              <Link to="/opportunities" className="navStyle">
                <li className="simpleNavList">Opportunities</li>
              </Link>
            ) : (
              ""
            )}
            {props.loggedInUser ? (
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
      <div className="up-login-logOut">
        {log && log.message === "Authorization successful" ? (
          <div className="logout">
            <img className="personLogIn" src={login} alt="person logged" />
            {/* <p>Welcome</p> */}
          </div>
        ) : (
          ""
        )}

        {log && log.message === "Authorization successful" ? (
          <div className="logout">
            <button onClick={handleSignOut}>Sign out</button>
            <img className="logout-sign" src={logout} alt="person logged" />
          </div>
        ) : (
          ""
        )}
        {props.loggedInUser ? (
          <div className="logout">
            <img className="personLogIn" src={login} alt="person logged" />
            {/* <p>Welcome</p> */}
          </div>
        ) : (
          ""
        )}
        {props.loggedInUser ? (
          <div className="logout">
            <button onClick={handleSignOut}>Sign out</button>
            <img className="logout-sign" src={logout} alt="person logged" />
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default withRouter(Nav);
