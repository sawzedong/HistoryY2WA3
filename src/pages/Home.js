/*eslint no-unused-vars: 0*/
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTemplate from "../components/PageTemplate";

import TestImg from "../img/test-img.svg";
import PoliciesThumbnail from "../img/policies-thumbnail.jpg";

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
const borderStyle = {};

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

      <section className="px-3 py-5 vw-100">
        <SectionDisplay
          icon="align-left"
          headerText="Overview"
          btnText=""
          linkto=""
        >
          Focus: <strong>Government Policies</strong>
          <br />
          Time Period: <strong>1965 to 2000</strong>
          <br />
          Where: <strong>Singapore</strong>
          <br />
        </SectionDisplay>
        <SectionDisplay
          icon="history"
          headerText="Timeline"
          btnDisplay
          btnText="See Timeline"
          linkto="/timeline"
        >
          Look through all the government policies, and when they were
          implemented. Click on the policies in the timeline to see them in
          detail.
        </SectionDisplay>
        <SectionDisplay
          icon="exchange-alt"
          headerText="Changes"
          btnDisplay
          btnText="See Changes"
          linkto="/page2"
        >
          Look at the changes in Singapore based on the policies, or simply see
          an overview of all changes due to all the government policies
          implmented.
        </SectionDisplay>
        <SectionDisplay
          icon="comments"
          headerText="Interviews"
          btnDisplay
          btnText="See Interviews"
          linkto="/interviews/"
        >
          Read all the first-hand accounts from people interviewed and
          understand life back then.
        </SectionDisplay>
      </section>
    </PageTemplate>
  );
}
