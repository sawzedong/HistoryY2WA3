/*eslint no-unused-vars: 0*/
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageTemplate from "../../components/PageTemplate";

/*
<section
        className="min-vh-100 py-7 vw-100 row"
        style={backgroundImgStyle}
        id="homeIntroSection"
      >
        <div className="col-sm-11 col-md-7 my-auto imptSection p-3 mx-auto ">
          <h1>Historical Investigation Task</h1>
          <div className="dropdown-divider" />
          <h4>Government Policies</h4>
          <h6>Made by 20Y2H Group 3</h6>
        </div>
        <ScrollerDown ID="homepageScroller" />
      </section>
*/
export default function ContentChange() {
  return (
    <PageTemplate padding>
      <div className="min-vh-100 gradient-background-1">
        <section className="min-vh-40 vw-100 row">
          <div className="text-center col-md-12 my-auto mx-auto">
            <h1 className="imptText">CHANGES</h1>
          </div>
        </section>
        <section className="min-vh-40 vw-100 row justify-content-around">
          <div className="col-lg-2 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-12 mx-auto my-auto">
              <i className="fas fa-home fa-5x"></i>
              <Link to="/changes/housing-changes" className="my-4">
                <h2 class="h4">Housing</h2>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
              <div className="col-md-12 mx-auto my-auto">
                <i className="fas fa-globe-asia fa-5x"></i>
                <Link to="/changes/environmental-changes" className="my-4">
                  <h2 class="h4">Environment</h2>
                </Link>
            </div>
          </div>
          <div className="col-lg-2 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-users fa-5x"></i>
              <Link to="/changes/population-changes" className="my-4">
                <h2 class="h4">Population</h2>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-dollar-sign fa-5x"></i>
              <Link to="/changes/monetary-changes" className="my-4">
                <h2 class="h4">Monetary</h2>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-people-arrows fa-5x"></i>
              <Link to="/changes/social-changes" className="my-4">
                <h2 class="h4">Social</h2>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
