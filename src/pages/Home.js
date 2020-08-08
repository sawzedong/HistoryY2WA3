/*eslint no-unused-vars: 0*/
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTemplate from "../components/PageTemplate";

import TestImg from "../img/test-img.svg";
import PoliciesThumbnail from "../img/policies-thumbnail.jpg";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import SectionDisplay from "../components/Home/SectionDisplay";
import ScrollerDown from "../components/ScrollerDown";

import "../styles/Home.css";

// style={{ border: "1px solid black" }}

const backgroundImgStyle = {
  backgroundImage: `url(${TestImg})`,
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

AOS.init();

export default function Home() {
  return (
    <PageTemplate padding>
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

      <section className="px-3 py-5 vw-100 gradient-background-1 row justify-content-around  min-vh-60">

        <SectionDisplay
          size="col-lg-2"
          linkTo="/time-periods"
          header="Times"
          iconName="calendar-alt"
          showLink
        >
          State of aspects at individual time periods
        </SectionDisplay>
        <SectionDisplay
          size="col-lg-2"
          linkTo="/timeline"
          header="Timeline"
          iconName="history"
          showLink
        >
          All policies, sorted by implementation date
        </SectionDisplay>
        <SectionDisplay size="col-lg-3 gradient-background-2" header="Overview" iconName="align-left">
          Focus: <strong>Government Policies</strong>
          <br />
          Time Period: <strong>1965 to 2000</strong>
          <br />
        </SectionDisplay>

        <SectionDisplay
          size="col-lg-2"
          linkTo="/changes"
          header="Changes"
          iconName="exchange-alt"
          showLink
        >
          Changes in Singapore, sorted by aspects
        </SectionDisplay>
        <SectionDisplay
          size="col-lg-2"
          linkTo="/policy-making"
          header="Policies"
          iconName="scroll"
          showLink
        >
          Government Insights on Policies
        </SectionDisplay>
      </section>
    </PageTemplate>
  );
}
