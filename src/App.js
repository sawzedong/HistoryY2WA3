import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";

import NavLink from "./components/NavLink.js";
import NavDropdownItem from "./components/NavDropdownItem.js";
import NavDropdown from "./components/NavDropdown.js";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";

import ContentChange from "./pages/Changes/ContentChange"
import HousingChanges from "./pages/Changes/HousingChanges"
import EnvironmentalChanges from "./pages/Changes/EnvironmentChanges"
import PopulationChanges from "./pages/Changes/PopulationChanges"
import MonetaryChanges from "./pages/Changes/MonetaryChanges"
import SocialChanges from "./pages/Changes/SocialChanges"

import PolicyMaking from "./pages/PolicyMaking.js"

import TimePeriod1 from "./pages/Time-Periods/time-period-1";
import TimePeriod2 from "./pages/Time-Periods/time-period-2";
import TimePeriod3 from "./pages/Time-Periods/time-period-3";

import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Router>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          id="web-navbar"
        >
          <Link className="navbar-brand" to="/">
            HistoryY2WA3
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse mr-auto position-relative"
            id="navbarNavDropdown"
          >
            <div className="dropdown-divider" />
            <ul className="navbar-nav">
              <NavLink to="/" label="Home" />
              <NavLink to="/timeline" label="Timeline" />
              <NavDropdown to="/changes/" label="Changes" >
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/changes/"
                    label="Changes"
                  />
                  <div className="dropdown-divider"/>
                  <NavDropdownItem
                    to="/changes/housing-changes"
                    label="Housing Changes"
                  />
                  <NavDropdownItem
                    to="/changes/environmental-changes"
                    label="Environmental Changes"
                  />
                  <NavDropdownItem
                    to="/changes/population-changes"
                    label="Population Changes"
                  />
                  <NavDropdownItem
                    to="/changes/monetary-changes"
                    label="Monetary Changes"
                  />
                  <NavDropdownItem
                    to="/changes/social-changes"
                    label="Social Changes"
                  />
                </div>
              </NavDropdown>

              <NavDropdown to="/time-periods/" label="Time Periods">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/time-periods/time-period-1/"
                    label="Time Period 1"
                  />
                  <NavDropdownItem
                    to="/time-periods/time-period-2/"
                    label="Time Period 2"
                  />
                  <NavDropdownItem
                    to="/time-periods/time-period-3/"
                    label="Time Period 3"
                  />
                </div>
              </NavDropdown>
              <NavLink to="/policy-making" label="Policy Making" />
            </ul>
          </div>
        </nav>
        *
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>History Project</title>
            </Helmet>
            <Home />
          </Route>
          <Route exact path="/timeline">
            <Helmet>
              <title>Timeline - History Project</title>
            </Helmet>
            <Timeline />
          </Route>
          <Route exact path="/changes/">
            <Helmet>
              <title>Changes - History Project</title>
            </Helmet>
            <ContentChange />
          </Route>
          <Route exact path="/changes/housing-changes">
            <Helmet>
              <title>Housing Changes - History Project</title>
            </Helmet>
            <HousingChanges />
          </Route>
          <Route exact path="/changes/environmental-changes">
            <Helmet>
              <title>Environmental Changes - History Project</title>
            </Helmet>
            <EnvironmentalChanges />
          </Route>
          <Route exact path="/changes/population-changes">
            <Helmet>
              <title>Population Changes - History Project</title>
            </Helmet>
            <PopulationChanges />
          </Route>
          <Route exact path="/changes/monetary-changes">
            <Helmet>
              <title>Monetary Changes - History Project</title>
            </Helmet>
            <MonetaryChanges />
          </Route>
          <Route exact path="/changes/social-changes">
            <Helmet>
              <title>Social Changes - History Project</title>
            </Helmet>
            <SocialChanges />
          </Route>
          <Route exact path="/policy-making">
            <Helmet>
              <title>Policy Making - History Project</title>
            </Helmet>
            <PolicyMaking />
          </Route>
          <Route exact path="/time-periods/time-period-1">
            <Helmet>
              <title>Time Period 1 - History Project</title>
            </Helmet>
            <TimePeriod1 />
          </Route>
          <Route exact path="/time-periods/time-period-2">
            <Helmet>
              <title>Time Period 2 - History Project</title>
            </Helmet>
            <TimePeriod2 />
          </Route>
          <Route exact path="/time-periods/time-period-3">
            <Helmet>
              <title>Time Period 3 - History Project</title>
            </Helmet>
            <TimePeriod3 />
          </Route>
          <Route path="*">
            <Helmet>
              <title>Error 404 Not Found - History Project</title>
            </Helmet>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
