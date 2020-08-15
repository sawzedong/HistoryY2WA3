/*eslint no-unused-vars: 0*/
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Changes_Overview() {
  return (
    <PageTemplate padding>
      <div className="min-vh-100 gradient-background-1">
        <section className="min-vh-40 vw-100 row">
          <div className="text-center col-md-12 my-auto mx-auto">
            <h1 className="imptText">INTRODUCTION CONTENTS</h1>
          </div>
        </section>
        <section className="min-vh-40 vw-100 row justify-content-around">
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-12 mx-auto my-auto">
              <i className="fas fa-home fa-5x"></i>
              <Link to="/introduction/intro1" className="my-4">
                <h2 class="h4">Intro Part 1</h2>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
              <div className="col-md-12 mx-auto my-auto">
                <i className="fas fa-history fa-5x"></i>
                <Link to="/introduction/timeline" className="my-4">
                  <h2 class="h4">Timeline</h2>
                </Link>
            </div>
          </div>
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-users fa-5x"></i>
              <Link to="/introduction/intro2" className="my-4">
                <h2 class="h4">Intro Part 2</h2>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <PageFooter prevLink="/" prevTitle="Home Page" prevDisplay nextDisplay nextLink="/introduction/intro1" nextTitle="Introduction Part 1"/>
    </PageTemplate>
  );
}
