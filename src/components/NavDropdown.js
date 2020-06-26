/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
export default function NavDropdown(props) {
  let match = useRouteMatch({
    path: props.to,
    exact: false,
  });

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
