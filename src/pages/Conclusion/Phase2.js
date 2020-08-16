import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Phase2() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Conclusion: Phase 2</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph"></p>
            <p className="text-paragraph"></p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <PageFooter prevLink="/conclusion/phase1" prevTitle="Conclusion Phase 1" prevDisplay nextLink="/" nextTitle="Home Page"/>
    </PageTemplate>
  );
}
