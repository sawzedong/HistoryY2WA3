/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";
import "../../styles/Timeline.css";
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
            header="State Development Plan"
            date="12 April 1961"
            aspect="Economic"
          >
            To solve issues of economic stagnation and high unemployment rate
            through an expansion in manufacturing.
          </TimelineEntry>
          <TimelineEntry
            ID={2}
            header="Economic Development Board"
            date="1 August 1961"
            aspect="Economic"
          >
            To tackle the high unemployment rate.
          </TimelineEntry>
          <TimelineEntry
            ID={3}
            header="Economic Expansion Incentives Act "
            date="1967"
            aspect="Economic"
          >
            An Act to amend and consolidate the laws relating to incentives for
            the establishment of pioneer industries and for economic expansion
            (generally)
          </TimelineEntry>
          <TimelineEntry
            ID={4}
            header="Jurong town corporation"
            date="1 June 1968"
            aspect="Economic"
          >
            To manage industrial estates and their related facilities.
          </TimelineEntry>
          <TimelineEntry
            ID={5}
            header="Two-Child Policy"
            date="1 July 1966"
            aspect="Population"
          >
            A population control measure introduced by the Singapore Government
            to encourage couples to have no more than 2 children
          </TimelineEntry>
          <TimelineEntry
            ID={6}
            header="Monetary Authority of Singapore (MAS)"
            date="1 January 1971"
            aspect="Economic"
          >
            Manage Singapore’s exchange rate, official foreign reserves, and
            liquidity in the banking sector and promotes Singapore as a dynamic
            international financial centre
          </TimelineEntry>
          <TimelineEntry
            ID={7}
            header="Correction wage policy"
            date="1979"
            aspect="Economic"
          >
            To shift the economy to skill-intensive, middle technology and
            higher value-added industries and services.
          </TimelineEntry>
          <TimelineEntry
            ID={8}
            header="National Computer board"
            date="September 1981"
            aspect="Economic"
          >
            To computerise Singapore’s Civil Service, coordinate computer
            education and training, and develop the local computer services
            industry.
          </TimelineEntry>
          <TimelineEntry
            ID={9}
            header="Have 3 or more"
            date="1 July 1966"
            aspect="Population"
          >
            A policy encouraging couples to have more children
          </TimelineEntry>

          <TimelineEntry
            ID={10}
            header="Ethnic Integration Policy"
            date="1 March 1989"
            aspect="Housing"
          >
            To promote racial integration and harmony in HDB estates.
          </TimelineEntry>
          <TimelineEntry
            ID={11}
            header="Singapore-Johor-Riau (SIJORI)"
            date="20 December 1989"
            aspect="Economic"
          >
            To relocate Singapore’s investments in manufacturing to the nearby
            areas in Malaysia and Indonesia
          </TimelineEntry>
          <TimelineEntry
            ID={12}
            header="Single’s Purchase Scheme"
            date="October 1991"
            aspect="Housing"
          >
            To allow single Singaporeans aged 35 and above to purchase HDB
            flats.
          </TimelineEntry>
          <TimelineEntry
            ID={13}
            header="Baby Bonus Scheme"
            date="1 April 2001"
            aspect="Population"
          >
            To help couples lighten the financial costs of raising children
          </TimelineEntry>
          <TimelineEntry
            ID={14}
            header="Remaking our Homeland"
            date="2007"
            aspect="Housing"
          >
            A comprehensive rejuvenation blueprint to renew and further develop
            existing HDB towns and estates.
          </TimelineEntry>
          <TimelineEntry
            ID={15}
            header="Contact Singapore"
            date="28 April 2008"
            aspect="Population"
          >
            An agency launched to attract global talent to work, invest and live
            in Singapore.
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
