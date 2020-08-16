/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

import IntervieweeMrEmmanuel from "../../img/interviewee-mr-emmanuel.png";
import IntervieweeMrCheong from "../../img/interviewee-mr-cheong.png";
import IntervieweeMrKong from "../../img/interviewee-mr-kong.jpeg";

export default function Introduction_GatheringData() {
  return (
    <PageTemplate padding>
      
      <div className="min-vh-100 vw-100 p-2">
        <h1>Introduction</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h3>Gathering Data</h3>
            <p className="text-paragraph">
              We have used sources such as other webpages, speeches by
              ministers, interviews such as to better understand the situation
              and the changes, the reasons for the change and how they have
              implemented Singaporeans. We have also used the interviews as a
              gauge as to how effective and well-communicated the policies were.
            </p>
          </div>
        </div>
        <div className="dropdown-divider" />
        <h2>Interviewees</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h3>Mr Andrew Emmanuel</h3>
            <p className="text-paragraph">
              Mr Andrew Emmanuel works as a civil servant in the education
              sector. As a citizen of Singapore, and has seen the development of
              Singapore throughout his life. He is a suitable interviewee as he
              has experienced the changes of Singapore in her recent years.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={IntervieweeMrEmmanuel}
              alt="Potrait of Mr Emmanuel"
              width="150"
              height="200"
            />
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h3>Mr Mike Kong</h3>
            <p className="text-paragraph">
              Mr Mike Kong works as a Sales manager in the business sector. Born
              in the 1970s, he is the first generation of Singaporeans that was
              born after independence. He is a suitable interviewee as he is the
              first generation that experienced the life of independent
              Singapore, and has experienced the changes of Singapore from a
              third world country to first world country after independence.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={IntervieweeMrKong}
              alt="Potrait Of Mr Kong"
              width="150"
              height="200"
            />
          </div>
        </div>

        <div className="info-category py-3 row w-100 ">
          <div className="col-lg-8 col-md-10">
            <h3>Mr Cheong Kwek Kwong</h3>
            <p className="text-paragraph">
              Mr Cheong Kwek Kwong has retired as a senior manager, is part of
              the merdeka generation, and has witnessed the development of
              Singapore since her independence. He has seen Singapore transform
              from a third world country to a first world country and would
              provide great insights on how Singapore has developed over the
              past few decades.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={IntervieweeMrCheong}
              alt="Potrait of Mr Cheong"
              width="150"
              height="200"
            />
          </div>
        </div>
      </div>
      <PageFooter
        prevLink="/introduction/timeline"
        prevTitle="Policies Timeline"
        prevDisplay
        nextDisplay
        nextLink="/changes/"
        nextTitle="Changes Overview"
      />
    </PageTemplate>
  );
}
