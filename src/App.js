import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import NavLink from "./components/NavLink.js";
import NavDropdownItem from "./components/NavDropdownItem.js";
import NavDropdown from "./components/NavDropdown.js";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3A from "./pages/Page3/A";
import Page3B from "./pages/Page3/B";
import Page3C from "./pages/Page3/C";

function App() {
  return (
    <>
      <Router>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          id="web-navbar"
        >
          <Link className="navbar-brand" to='/'>
            Navbar
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
          <div className="collapse navbar-collapse mr-auto position-relative" id="navbarNavDropdown">
            <div className="dropdown-divider" />
            <ul className="navbar-nav">
              <NavLink to='/' label="Home" />
              <NavLink to='/page1' label="Page1" />
              <NavLink to='/page2' label="Page2" />

              <NavDropdown to='/page3' label="Page3">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem to='/page3/a' label="Page 3 A" />
                  <NavDropdownItem to='/page3/b' label="Page 3 B" />
                  <NavDropdownItem to='/page3/c' label="Page 3 C" />
                </div>
              </NavDropdown>
            </ul>

          </div>
        </nav>
        *
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/page1'>
            <Page1 />
          </Route>
          <Route exact path='/page2'>
            <Page2 />
          </Route>
          <Route exact path='/page3'>
            <h1>PAGE3</h1>
          </Route>
          <Route exact path='/page3/a'>
            <Page3A />
          </Route>
          <Route exact path='/page3/b'>
            <Page3B />
          </Route>
          <Route exact path='/page3/c'>
            <Page3C />
          </Route>
          <Route path="*">
            <h1>UNKNOWN: 404 ERROR</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;