/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";
import "../../styles/Timeline.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
function TimelineEntry(props) {
  var rightStyle = props.ID % 2 === 0 ? "timeline-wrapper-right row" : "d-none";
  var leftStyle = props.ID % 2 === 1 ? "timeline-wrapper-left row" : "d-none";
  return (
    <>
      <div className={rightStyle}>
        <div className="timeline-item my-auto text-left"></div>
        <div className="timeline-text my-auto p-2 text-left">
          <h3 className="h4">{props.header}</h3>
          <h4 className="h5">{props.date}</h4>
          <p className="text-paragraph">
            <strong>{props.aspect}</strong>: {props.children}
          </p>
        </div>
      </div>
      <div className={leftStyle}>
        <div className="timeline-text my-auto p-2 text-left">
          <h3 className="h4">{props.header}</h3>
          <h4 className="h5">{props.date}</h4>
          <p className="text-paragraph">
            <strong>{props.aspect}</strong>: {props.children}
          </p>
        </div>
        <div className="timeline-item my-auto text-left"></div>
      </div>
    </>
  );
}
export default function Introduction_Timeline() {
  return (
    <PageTemplate padding>
      
      <div className="p-2">
      <h1>Timeline of Policies Implemented</h1>
      </div>
      <div className="vw-100 justify-content-center text-center d-flex p-4">
        <div className="timeline-overline">
          <TimelineEntry
            ID={0}
            header="Central Provident Fund"
            date="1 July 1955"
            aspect="Housing"
          >
            A compulsory savings scheme that requires all employers and
            employees to contribute a portion of the employee's monthly gross
            salary to the provident fund.
          </TimelineEntry>
          <TimelineEntry
            ID={1}
            header="Two-Child Policy"
            date="1 July 1966"
            aspect="Population"
          >
            A population control measure introduced by the Singapore Government
            to encourage couples to have no more than 2 children
          </TimelineEntry>
          <TimelineEntry
            ID={2}
            header="Have 3 or more"
            date="1 July 1966"
            aspect="Population"
          >
            A policy encouraging couples to have more children
          </TimelineEntry>
          <TimelineEntry
            ID={3}
            header="Ethnic Integration Policy"
            date="1 March 1989"
            aspect="Housing"
          >
            To promote racial integration and harmony in HDB estates.
          </TimelineEntry>
          <TimelineEntry
            ID={4}
            header="Single’s Purchase Scheme"
            date="October 1991"
            aspect="Housing"
          >
            To allow single Singaporeans aged 35 and above to purchase HDB flats.
          </TimelineEntry>
          <TimelineEntry
            ID={5}
            header="Baby Bonus Scheme"
            date="1 April 2001"
            aspect="Population"
          >
            To help couples lighten the financial costs of raising children
          </TimelineEntry>
          <TimelineEntry
            ID={6}
            header="Remaking our Homeland"
            date="2007"
            aspect="Housing"
          >
            A comprehensive rejuvenation blueprint to renew and further develop existing HDB towns and estates. 
          </TimelineEntry>
          <TimelineEntry
            ID={7}
            header="Contact Singapore"
            date="28 April 2008"
            aspect="Population"
          >
            An agency launched to attract global talent to work, invest and live in Singapore. 
          </TimelineEntry>
          
        </div>
      </div>
      <PageFooter
        prevLink="/introduction/intro"
        prevTitle="Introduction"
        prevDisplay
        nextDisplay
        nextLink="/introduction/gathering-data"
        nextTitle="Gathering Data"
      />
    </PageTemplate>
  );
}
