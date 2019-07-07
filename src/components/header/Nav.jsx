import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

function Nav() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <Link to="/" className="navStyle"><li>Home</li></Link>
          <Link to="/listOfCompanies" className="navStyle"> <li>Companies</li></Link>
          <Link to="/opportunities" className="navStyle"><li>Opportunities</li></Link>
          <Link to="/tips" className="navStyle"><li>Tips & FAQ</li></Link>
        </ul>
      </nav>
      <h1 className="title">See The Future</h1>
      <div className="searchBar">
        <form action="#">
          <input className="input_Search" type="text" placeholder="Search.." name="search" />
          <button className="input_btn" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </header>

  );
}

export default Nav;
