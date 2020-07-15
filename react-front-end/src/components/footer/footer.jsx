import React from "react";
import "../header/index.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="footerRow">
      <div className='leftFooterBlock'>
      <p className='footMenu'>About us</p>
      <p className='footMenu'>Contact us</p>
      <p className='footMenu'>Privacy</p>
      </div>
      <div className='rightFooterBlock'>
      
      <Link className='footMenu' to="/signUp"> Signup here</Link>
      <p className='footMenu'>Company sign-in</p>
      </div>
      </div>
      <p className='copyright'>Code For Good Hackaton, Copyright July 2019</p>
    </div>
  );
};

export default footer;
