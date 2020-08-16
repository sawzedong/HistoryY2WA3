/*eslint no-unused-vars: 0*/
import React from "react";
import ScrollLink from "../../components/ScrollLink"
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Conclusion_Overview() {
  return (
    <PageTemplate padding>
      
      <div className="min-vh-100 gradient-background-1">
        <section className="min-vh-40 vw-100 row">
          <div className="text-center col-md-12 my-auto mx-auto">
            <h1 className="imptText">CONCLUSION CONTENTS</h1>
          </div>
        </section>
        <section className="min-vh-40 vw-100 row justify-content-around">
          <div className="col-lg-4 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
            <div className="col-12 mx-auto my-auto">
              <i className="fas fa-hourglass-start fa-5x"></i>
              <ScrollLink to="/conclusion/phase1" className="my-4">
                <h2 class="h4">Phase 1</h2>
              </ScrollLink>
            </div>
          </div>
          <div className="col-lg-4 col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-2">
              <div className="col-md-12 mx-auto my-auto">
                <i className="fas fa-hourglass-half fa-5x"></i>
                <ScrollLink to="/conclusion/phase2" className="my-4">
                  <h2 class="h4">Phase 2</h2>
                </ScrollLink>
            </div>
          </div>
        </section>
      </div>
      <PageFooter prevLink="/changes/economic" prevTitle="Economic Changes" prevDisplay nextDisplay nextLink="/conclusion/phase1" nextTitle="Conclusion Phase 1"/>
    </PageTemplate>
  );
}
