/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Introduction_IntroPart2() {
  return (
    <PageTemplate padding>
      <div className="min-vh-100 vw-100 p-2">
        <h1>Introduction</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
          <h3>Gathering Data</h3>
          <p className="text-paragraph">
            We have used sources such as other webpages, speeches by ministers,
            interviews such as to better understand the situation and the
            changes, the reasons for the change and how they have implemented
            Singaporeans. We have also used the interviews as a gauge as to how
            effective and well-communicated the policies were.
          </p>
          </div>
        </div>
        <div className="dropdown-divider" />
        <h2>Interviewees</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
          <h3>Mr Emmanuel</h3>
          <p className="text-paragraph">
            
          </p>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
          <h3>Mr Kong</h3>
          <p className="text-paragraph">
            
          </p>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <div className="info-category py-3 row w-100 ">
          <div className="col-lg-8 col-md-10">
          <h3>Mr Cheong</h3>
          <p className="text-paragraph">
            
          </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <PageFooter prevLink="/introduction/timeline" prevTitle="Policies Timeline" prevDisplay nextDisplay nextLink="/changes/" nextTitle="Changes Overview"/>
    </PageTemplate>
  );
}
