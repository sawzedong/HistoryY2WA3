import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";

import NavLink from "./components/NavLink.js";
import NavDropdownItem from "./components/NavDropdownItem.js";
import NavDropdown from "./components/NavDropdown.js";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Changes from "./pages/Changes";
import InterviewSummary from "./pages/Interviews/InterviewSummary";
import Interview1 from "./pages/Interviews/Interview1";
import Interview2 from "./pages/Interviews/Interview2";
import Interview3 from "./pages/Interviews/Interview3";

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
              <NavLink to="/changes" label="Changes" />

              <NavDropdown to="/interviews/" label="Interviews">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem
                    to="/interviews/"
                    label="Interviews Summary"
                  />
                  <div className="dropdown-divider"></div>
                  <NavDropdownItem
                    to="/interviews/interview1/"
                    label="Interview 1"
                  />
                  <NavDropdownItem
                    to="/interviews/interview2/"
                    label="Interview 2"
                  />
                  <NavDropdownItem
                    to="/interviews/interview3/"
                    label="Interview 3"
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
          <Route exact path="/timeline">
            <Helmet>
              <title>Timeline - History Project</title>
            </Helmet>
            <Timeline />
          </Route>
          <Route exact path="/changes">
            <Helmet>
              <title>Changes - History Project</title>
            </Helmet>
            <Changes />
          </Route>
          <Route exact path="/interviews/">
            <Helmet>
              <title>Interviews - History Project</title>
            </Helmet>
            <InterviewSummary />
          </Route>
          <Route exact path="/interviews/interview1">
            <Helmet>
              <title>Interview 1 - History Project</title>
            </Helmet>
            <Interview1 />
          </Route>
          <Route exact path="/interviews/interview2">
            <Helmet>
              <title>Interview 2 - History Project</title>
            </Helmet>
            <Interview2 />
          </Route>
          <Route exact path="/interviews/interview3">
            <Helmet>
              <title>Interview 3 - History Project</title>
            </Helmet>
            <Interview3 />
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
