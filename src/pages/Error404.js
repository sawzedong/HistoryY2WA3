/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Error404(props) {
  return (
    <PageTemplate padding>
      <section className="min-vh-100 row justify-content-center">
      <div className="col-md-3 my-auto row forceBottomMd">
          <div className="col-md-12 text-center">
            <h1><i class="far fa-times-circle fa-3x text-danger" /></h1>
          </div>
        </div>
        <div className="col-md-6 my-auto row forceTopMd">
          <div className="col-md-12 text-center">
            <h1>
              Error 404 
              <br/>
              Page Not Found
            </h1>
            <p className="">
              The page which you have requested could not be found.
              <br />
              Go back to the <Link to="/">homepage</Link>?
            </p>
          </div>
        </div>
        
      </section>
    </PageTemplate>
  );
}
