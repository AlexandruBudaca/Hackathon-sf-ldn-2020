import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./grid.css";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/footer";
import LandingPage from "./components/sections/LandingPage";
import ListOfCompanies from "./components/sections/companies/ListOfCompanies";
import Company from "./components/sections/company/Company";
import ListOfOpportunities from "./components/sections/Opportunities";
import Opportunity from "./components/sections/Opportunity";

import Graduates from "./components/sections/Graduates";
import Tips from "./components/sections/tips/Tips";
import SignIn from "./components/register/SignIn";
import NewOpportunityForm from "./components/register/NewOpportunity";
import GraduateRegistration from "./components/register/GraduateRegistration";
import CompanyRegistration from "./components/register/CompanyRegistration";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [log, setLog] = useState(
    JSON.parse(sessionStorage.getItem("authorization"))
  );
  const [logSession, setLogSession] = useState({});

  const PrivateRouteGraduate = ({ component: Component }) => (
    <Route
      render={() =>
        (logSession &&
          logSession.message === "Graduate Authorization successful") ||
        (log && log.message === "Graduate Authorization successful") ? (
          <Component />
        ) : (
          <Redirect to="/SignIn" />
        )
      }
    />
  );
  const PrivateRouteCompany = ({ component: Component }) => (
    <Route
      render={() =>
        (logSession &&
          logSession.message === "Company Authorization successful") ||
        (log && log.message === "Company Authorization successful") ? (
          <Component />
        ) : (
          <Redirect to="/SignIn" />
        )
      }
    />
  );
  return (
    <Router>
      <div className="App">
        <Nav
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          setLog={setLog}
          log={log}
          logSession={logSession}
          setLogSession={setLogSession}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                setLoggedInUser={setLoggedInUser}
                loggedInUser={loggedInUser}
                setLog={setLog}
                log={log}
                logSession={logSession}
                setLogSession={setLogSession}
              />
            )}
          />
          <Route exact path="/company" component={() => <Company />} />
          <Route path="/listOfCompanies" exact component={ListOfCompanies} />
          <Route path="/listOfCompanies" exact component={ListOfCompanies} />
          <Route path="/Graduates" exact component={Graduates} />
          <Route path="/opportunity" exact component={Opportunity} />
          <PrivateRouteGraduate
            path="/Opportunities"
            exact={true}
            component={ListOfOpportunities}
          />

          <Route path="/tips" exact component={Tips} />
          <Route
            path="/signIn"
            exact
            component={() => (
              <SignIn logSession={logSession} setLogSession={setLogSession} />
            )}
          />
          <Route path="/signUp" exact component={GraduateRegistration} />
          <Route
            path="/GraduateRegistration"
            exact
            component={GraduateRegistration}
          />
          <Route
            path="/CompanyRegistration"
            exact
            component={CompanyRegistration}
          />

          <PrivateRouteCompany
            path="/NewOpportunityForm"
            exact={true}
            component={NewOpportunityForm}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
