/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function NavDropdownItem({ label, to }) {
  let match = useRouteMatch({
    path: to,
    exact: true
  });
  return (
    <>
      <Link
        className={match ? "dropdown-item active" : "dropdown-item "}
        to={to}
      >
        {label}
      </Link>
    </>
  );
}
