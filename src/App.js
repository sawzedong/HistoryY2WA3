import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";

import NavLink from "./components/NavLink.js";
import NavDropdownItem from "./components/NavDropdownItem.js";
import NavDropdown from "./components/NavDropdown.js";

import Home from "./pages/Home";

import IntroductionOverview from "./pages/Introduction/Overview"
import IntroductionPart1 from "./pages/Introduction/IntroPart1"
import IntroductionTimeline from "./pages/Introduction/Timeline"
import IntroductionPart2 from "./pages/Introduction/IntroPart2"

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
                    to="/introduction/intro1"
                    label="Part 1"
                  />
                  <NavDropdownItem
                    to="/introduction/timeline"
                    label="Timeline"
                  />
                  <NavDropdownItem
                    to="/introduction/intro2"
                    label="Part 2"
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
          <Route exact path="/introduction/intro1">
            <Helmet>
              <title>Introduction: Part 1 - History Project</title>
            </Helmet>
            <IntroductionPart1 />
          </Route>
          <Route exact path="/introduction/timeline">
            <Helmet>
              <title>Introduction: Timeline - History Project</title>
            </Helmet>
            <IntroductionTimeline />
          </Route>
          <Route exact path="/introduction/intro2">
            <Helmet>
              <title>Introduction: Part 2 - History Project</title>
            </Helmet>
            <IntroductionPart2 />
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
