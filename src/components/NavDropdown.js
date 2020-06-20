/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
/*<li className="nav-item dropdown d-inline-block active">
                <NavDropdown to="/page3" label="Page3" />
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavDropdownItem to="/page3/a" label="Page 3 A" />
                  <NavDropdownItem to="/page3/b" label="Page 3 B" />
                  <NavDropdownItem to="/page3/c" label="Page 3 C" />
                </div>
              </li>*/
export default function NavDropdown(props) {
  let match = useRouteMatch({
    path: props.to,
    exact: false
  });
  /*<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>*/

  return (
    <>
      <li
        className={
          match ? "nav-item dropdown active px-2" : "nav-item dropdown px-2"
        }
      >
        <Link
          className="dropdown-toggle nav-link "
          to={props.to}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.label}
        </Link>
        {props.children}
      </li>
    </>
  );
}
