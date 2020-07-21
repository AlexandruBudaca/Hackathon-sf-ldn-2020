import React from "react";
import "../header/index.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="col-12 footerCol">
      <div className="footer row">
        <div className="leftFooterBlock col-6 md-col-3 sm-col-6">
          <p className="footMenu">About us</p>
          <p className="footMenu">Contact us</p>
          <p className="footMenu">Privacy</p>
        </div>
        <div className="rightFooterBlock col-3 md-col-3 sm-col-6">
          <Link className="footMenu" to="/signUp">
            Graduate registration
          </Link>
          <Link className="footMenu" to="/CompanyRegistration">
            Company registration
          </Link>
        </div>
        <p className="copyright col-12">
          Code For Good Hackaton, Copyright July 2020
        </p>
      </div>
    </div>
  );
};

export default footer;
