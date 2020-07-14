import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/header/Nav'
import Footer from './components/footer/footer'
import LandingPage from './components/sections/LandingPage'
import ListOfCompanies from './components/sections/companies/ListOfCompanies'
import Company from './components/sections/company/Company'
import ListOfOpportunities from './components/sections/Opportunities'
import Opportunity from './components/sections/Opportunity'

import Graduates from './components/sections/Graduates'
import Tips from './components/sections/tips/Tips'
import SignIn from './components/register/SignIn'
import SignUp from './components/register/SignUp'

function App() {
  return (
    <Router>
      <div className="App">
      <div>minko test</div>
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/company" exact component={Company} />
          <Route path="/listOfCompanies" exact component={ListOfCompanies}  />
          <Route path="/listOfCompanies" exact component={ListOfCompanies} />
          <Route path="/Graduates" exact component={Graduates} />
          <Route path="/opportunity" exact component={Opportunity} />
          <Route path="/Opportunities" exact component={ListOfOpportunities} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
