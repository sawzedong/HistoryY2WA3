/*eslint no-unused-vars: 0*/
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTemplate from "../components/PageTemplate";

// import TestImg from "../img/test-img.svg";
import PoliciesThumbnail from "../img/homepage-img.svg";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import SectionDisplay from "../components/Home/SectionDisplay";
import ScrollerDown from "../components/ScrollerDown";
import PageFooter from "../components/Footer";

import "../styles/Home.css";

// style={{ border: "1px solid black" }}

const backgroundImgStyle = {
  backgroundImage: `url(${PoliciesThumbnail})`,
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
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
            size="col-lg-3"
            linkTo="/introduction/"
            header="Introduction"
            iconName="play-circle"
            showLink
          >
            Introduction to area of focus and overview of policies
          </SectionDisplay>
          <SectionDisplay
            size="col-lg-4 gradient-background-2"
            linkTo="/changes/"
            header="Changes"
            iconName="exchange-alt"
            showLink
          >
            Changes
          </SectionDisplay>
          <SectionDisplay
            size="col-lg-3"
            linkTo="/conclusion/"
            header="Conclusion"
            iconName="scroll"
            showLink
          >
            Answering the HI question and summary
          </SectionDisplay>
      </section>
      <PageFooter prevLink="/error404" prevTitle="" nextDisplay nextLink="/introduction/" nextTitle="Introduction Overview"/>
    </PageTemplate>
  );
}
