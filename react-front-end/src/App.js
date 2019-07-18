import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/header/Nav'
import Footer from './components/footer/footer'
import LandingPage from './components/sections/LandingPage'
import ListOfCompanies from './components/sections/companies/ListOfCompanies'
import Company from './components/sections/company/Company'
import Opportunities from './components/sections/Opportunities'
import Opportunity from './components/sections/Opportunity'
import Tips from './components/sections/tips/Tips'
import SignIn from './components/register/SignIn'
import SignUp from './components/register/SignUp'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/company" exact component={Company} />
          <Route path="/listOfCompanies" exact component={ListOfCompanies} />
          <Route path="/opportunities" exact component={Opportunities} />
          <Route path="/opportunity" exact component={Opportunity} />
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
