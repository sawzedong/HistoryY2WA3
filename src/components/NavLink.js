/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function NavLink({ label, to }) {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <li className={match ? "active nav-item px-2" : "nav-item px-2"}>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
}
