import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Phase1() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Conclusion: Phase 1 - Stable Society</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph"></p>
            <p className="text-paragraph"></p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <PageFooter prevLink="/conclusion/" prevTitle="Conclusion Overview" prevDisplay nextDisplay nextLink="/conclusion/phase2" nextTitle="Conclusion Phase 2"/>
    </PageTemplate>
  );
}
