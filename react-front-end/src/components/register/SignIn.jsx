import React, { Component } from "react";
import "./index.css";
// import './index.css'
import imgSrc from "../../images/cyf_brand.png";

const SignIn=()=>{
  
    return (
      <section className="mainRegister">

       

        <h3>Sign In</h3>
        <form  className="registerForm">
          <ul>
            <li>
              <label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email Address"
          
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
        
                />
              </label>
            </li>
          </ul>
          <button className="btn" type="submit">
            Log In
          </button>
        </form>
      </section>
    );
  }

export default SignIn;
