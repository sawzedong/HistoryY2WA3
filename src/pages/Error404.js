/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Error404() {
  return (
    <PageTemplate padding={true} margin={false}>
      <section className="min-vh-100 row">
        <div className="col-md-6 row">
          <div className="col-md-12 my-auto text-md-right">
            <h1 className="mb-1">
              <i className="fas fa-exclamation-triangle text-warning" />
              &ensp;Error 404: Page not found
            </h1>
            <p className="mt-1">
              This page doesn't exist.
              <br />
              Go back to the <Link to="/">homepage?</Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 row">
          <div className="col-md-12 my-auto">
            <h1>ASD</h1>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
