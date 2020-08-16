/*eslint no-unused-vars: 0*/
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

import SGImg1965 from "../../img/SG-img-1965.png"
import SGImgNow from "../../img/SG-img-now.png"

export default function Introduction_Intro() {
  return (
    <PageTemplate padding>
      
      <div className="row vw-100">
        <div className="min-vh-100 col-md-10 col-lg-8 p-2">
          <h1>Introduction</h1>
          <p className="text-paragraph">
            A brief overview to our topic of focus and the Historical
            Investigation question.
          </p>
          <div className="info-category py-3">
            <h3>Underlying Context</h3>
            <p className="text-paragraph">
              In 1965, due to various reasons, Singapore was no longer in
              Malaysia and was left to survive on its own. It faced multiple
              challenges, and many solutions had to be put into place in order
              to allow Singapore to be able to survive and thrive.{" "}
            </p>
          </div>
          <div className="info-category py-3">
            <h3>Investigation Focus</h3>
            <p className="text-paragraph">
              This investigation hence focuses on how
              <strong> Singapore has changed</strong> from{" "}
              <strong>1965 to 2000</strong>, specifically in the aspect of all
              the <strong>Government Policies</strong> implemented, why these
              changes were put into place and how these affected Singapore.
            </p>
          </div>
          <div className="dropdown-divider" />
          <div className="info-category py-3">
            <h3>Government Policies</h3>
            <p className="text-paragraph">
              Government Policies refers to the laws, grants, acts, etc. that
              were implemented by the Government / Political Parties that aims
              to influence the people to act in a certain way, or lead /
              kickstart a change.

              See all policies <Link to="/introduction/timeline">here</Link>.
            </p>
          </div>
          
        </div>
        <div className="col-lg-4">
            <img src={SGImg1965} className="img-fluid" alt="Depicts change in Singapore"></img>
            <span className="d-block text-center py-2"><i className="fas fa-arrow-down fa-4x"></i></span>
            
            <img src={SGImgNow} className="img-fluid" alt="Depicts change in Singapore"></img>

          </div>
      </div>
      <PageFooter prevLink="/introduction/" prevTitle="Introduction Overview" prevDisplay nextDisplay nextLink="/introduction/timeline" nextTitle="Policies Timeline"/>
    </PageTemplate>
  );
}
