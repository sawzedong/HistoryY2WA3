/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Introduction_Timeline() {
  return (
    <PageTemplate padding>
      <div className="min-vh-100 vw-100">
        Introduction - Timeline
      </div>
      <PageFooter prevLink="/introduction/intro1" prevTitle="Introduction Part 1" prevDisplay nextDisplay nextLink="/introduction/intro2" nextTitle="Introduction Part 2"/>
    </PageTemplate>
  );
}
