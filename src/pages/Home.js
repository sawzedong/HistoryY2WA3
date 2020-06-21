/*eslint no-unused-vars: 0*/
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTemplate from "../components/PageTemplate";

import TestImg from "../img/test-img.svg";
import PoliciesThumbnail from "../img/policies-thumbnail.jpg"

import SectionDisplay from "../components/Home/SectionDisplay"

// style={{ border: "1px solid black" }}

const backgroundImgStyle = {
  backgroundImage: `url(${TestImg})`,
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};
const borderStyle = {

}

AOS.init();

export default function Home() {
  return (
    <PageTemplate padding>
      <section className="py-7 vw-100 row" style={backgroundImgStyle}>
        <div 
          className="container col-sm-11 col-md-7 my-auto imptSection p-3" 
          data-aos="fade-in"
          data-aos-delay="50" 
          data-aos-duration="500"
        >
          <h1>Historical Investigation Task</h1>
          <div className="dropdown-divider" />
          <h4>Government Policies</h4>
          <h6>Made by 20Y2H Group 3</h6>
        </div>
      </section>
      <section className="bg-light min-vh-60 px-3 py-4 vw-100 row">
       <div className="col-md-12 my-auto row">
        <div className="col-md-6 text-md-right row">
          <div className="col-md-12 my-auto">
          <h1>
            <strong>Overview</strong>
          </h1>
          <p className="font-20">
          Focus: <strong>Government Policies</strong><br/>
          Time Period: <strong>1965 to 2000</strong><br/>
          Where: <strong>Singapore</strong><br/>
          </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={PoliciesThumbnail} alt="Example of Policies" className="img-thumbnail fitSmallImg" />
        </div>
       </div>
      </section>
      <section className="px-3 py-4 vw-100">
       
        <SectionDisplay 
          icon="history"
          headerText="Timeline"
          btnDisplay
          btnText="See Timeline"
        >
          Look through all the government policies, and when they were implemented. 
          Click on the policies in the timeline to see them in detail.
        </SectionDisplay>
        <SectionDisplay 
          icon="exchange-alt"
          headerText="Changes"
          btnDisplay
          btnText="See Changes"
        >
          Look at the changes in Singapore based on the policies, 
          or simply see an overview of all changes due to all the government policies implmented.
        </SectionDisplay>
        <SectionDisplay 
          icon="comments"
          headerText="Interviews"
          btnDisplay
          btnText="See Interviews"
        >
          Read all the first-hand accounts from people interviewed 
          and understand life back then.
        </SectionDisplay>
      </section>
    </PageTemplate>
  );
}
