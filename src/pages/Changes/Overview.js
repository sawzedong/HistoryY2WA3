/*eslint no-unused-vars: 0*/
import React from "react";
import ScrollLink from "../../components/ScrollLink"
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Changes_Overview() {
  return (
    <PageTemplate padding>
      
      <div className="min-vh-100 gradient-background-1">
        <section className="min-vh-40 vw-100 row">
          <div className="text-center col-md-12 my-auto mx-auto">
            <h1 className="imptText">CHANGES</h1>
          </div>
        </section>
        <section className="min-vh-40 vw-100 row justify-content-around">
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-12 mx-auto my-auto">
              <i className="fas fa-home fa-5x"></i>
              <ScrollLink to="/changes/housing" className="my-4">
                <h2 class="h4">Housing</h2>
              </ScrollLink>
            </div>
          </div>
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-users fa-5x"></i>
              <ScrollLink to="/changes/population" className="my-4">
                <h2 class="h4">Population</h2>
              </ScrollLink>
            </div>
          </div>
          <div className="col-lg-3 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-md-12 mx-auto my-auto">
              <i className="fas fa-dollar-sign fa-5x"></i>
              <ScrollLink to="/changes/economic" className="my-4">
                <h2 class="h4">Economic</h2>
              </ScrollLink>
            </div>
          </div>
        </section>
      </div>
      <PageFooter prevLink="/introduction/gathering-data" prevTitle="Gathering Data" prevDisplay nextDisplay nextLink="/changes/housing" nextTitle="Housing Changes"/>
    </PageTemplate>
  );
}
