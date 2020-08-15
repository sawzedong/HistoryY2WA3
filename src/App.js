import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";

import NavLink from "./components/NavLink.js";
import NavDropdownItem from "./components/NavDropdownItem.js";
import NavDropdown from "./components/NavDropdown.js";

import Home from "./pages/Home";

import DHSLogo from "./img/dhs-logo.png"

import IntroductionOverview from "./pages/Introduction/Overview"
import IntroductionIntro from "./pages/Introduction/Intro"
import IntroductionTimeline from "./pages/Introduction/Timeline"
import IntroductionGatheringData from "./pages/Introduction/GatheringData"

import ChangesOverview from "./pages/Changes/Overview"
import ChangesHousing from "./pages/Changes/HousingChanges"
import ChangesEnvironment from "./pages/Changes/EnvironmentChanges"
import ChangesPopulation from "./pages/Changes/PopulationChanges"
import ChangesMonetary from "./pages/Changes/MonetaryChanges"
import ChangesSocial from "./pages/Changes/SocialChanges"

import ConclusionOverview from "./pages/Conclusion/Overview"

import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Router>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top py-md-0"
          id="web-navbar"
        >
          <Link className="navbar-brand py-0 py-md-2" to="/">
          <img src={DHSLogo} width="30" height="30" class="d-inline-block align-top mr-1" alt="Dunman High School Logo"/>
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
              <NavDropdown to="/introduction/" label="Introduction" >
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/introduction/"
                    label="Overview"
                  />
                  <div className="dropdown-divider"/>
                  <NavDropdownItem
                    to="/introduction/intro"
                    label="Intro"
                  />
                  <NavDropdownItem
                    to="/introduction/timeline"
                    label="Timeline"
                  />
                  <NavDropdownItem
                    to="/introduction/gathering-data"
                    label="Gathering Data"
                  />
                </div>
              </NavDropdown>
              <NavDropdown to="/changes/" label="Changes" >
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/changes/"
                    label="Overview"
                  />
                  <div className="dropdown-divider"/>
                  <NavDropdownItem
                    to="/changes/housing"
                    label="Housing"
                  />
                  <NavDropdownItem
                    to="/changes/environment"
                    label="Environment"
                  />
                  <NavDropdownItem
                    to="/changes/population"
                    label="Population"
                  />
                  <NavDropdownItem
                    to="/changes/monetary"
                    label="Monetary"
                  />
                  <NavDropdownItem
                    to="/changes/social"
                    label="Social"
                  />
                </div>
              </NavDropdown>

              <NavDropdown to="/conclusion/" label="Conclusion">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/conclusion/"
                    label="Overview"
                  />
                  <div className="dropdown-divider" />
                  <NavDropdownItem
                    to="/conclusion/"
                    label="BROKEN LINK"
                  />
                </div>
              </NavDropdown>
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
          <Route exact path="/introduction/">
            <Helmet>
              <title>Introduction - History Project</title>
            </Helmet>
            <IntroductionOverview />
          </Route>
          <Route exact path="/introduction/intro">
            <Helmet>
              <title>Introduction - History Project</title>
            </Helmet>
            <IntroductionIntro />
          </Route>
          <Route exact path="/introduction/timeline">
            <Helmet>
              <title>Introduction: Timeline - History Project</title>
            </Helmet>
            <IntroductionTimeline />
          </Route>
          <Route exact path="/introduction/gathering-data">
            <Helmet>
              <title>Introduction: Gathering Data - History Project</title>
            </Helmet>
            <IntroductionGatheringData />
          </Route>
          <Route exact path="/changes/">
            <Helmet>
              <title>Changes - History Project</title>
            </Helmet>
            <ChangesOverview />
          </Route>
          <Route exact path="/changes/housing">
            <Helmet>
              <title>Changes: Housing - History Project</title>
            </Helmet>
            <ChangesHousing />
          </Route>
          <Route exact path="/changes/environment">
            <Helmet>
              <title>Changes: Environment - History Project</title>
            </Helmet>
            <ChangesEnvironment />
          </Route>
          <Route exact path="/changes/population">
            <Helmet>
              <title>Changes: Population - History Project</title>
            </Helmet>
            <ChangesPopulation />
          </Route>
          <Route exact path="/changes/monetary">
            <Helmet>
              <title>Changes: Monetary - History Project</title>
            </Helmet>
            <ChangesMonetary />
          </Route>
          <Route exact path="/changes/social">
            <Helmet>
              <title>Changes: Social - History Project</title>
            </Helmet>
            <ChangesSocial />
          </Route>
          <Route exact path="/conclusion/">
            <Helmet>
              <title>Conclusion - History Project</title>
            </Helmet>
            <ConclusionOverview />
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
