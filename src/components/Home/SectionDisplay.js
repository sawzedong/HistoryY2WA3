/*eslint no-unused-vars: 0*/
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
function SectionDisplay(props) {
  var sizeLarge = props.large;
  var sizing = props.size + " col-11 my-2 my-lg-0 py-3 py-lg-0 row glassCard text-center p-0";
  var fullIconName = "fas fa-" + props.iconName + " fa-5x my-lg-3";
  var showTheLink = props.showLink ? "my-4" : "d-none"
  var showTheNonLink = props.showLink ? "d-none" : "h4"
  return (
    <>
    <div className={sizing + " d-flex d-lg-none"}>
      <div className="col-12 h-100 mx-auto my-auto">
        <div className="row w-100">
          <div className="col-12 my-auto mx-auto">
            <i className={fullIconName} />

            <Link to={props.linkTo} className={showTheLink}>
              <h2 class="h4">{props.header}</h2>
            </Link>
            <h2 class={showTheNonLink}>{props.header}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 my-auto mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>

    <div className= {sizing + " d-none d-lg-flex"}>
      <div className="col-12 h-100 mx-auto my-auto d-flex flex-column">
        <div className="h-60 row w-100 bottomGrayBorder">
          <div className="col-12 my-auto mx-auto">
            <i className={fullIconName} />

            <Link to={props.linkTo} className={showTheLink}>
              <h2 class="h4">{props.header}</h2>
            </Link>
            <h2 class={showTheNonLink}>{props.header}</h2>
          </div>
        </div>
        <div className="h-40 row">
          <div className="col-12 my-auto mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default SectionDisplay;
/*
<div className= {sizing}>
      <div className="col-12 h-100 mx-auto my-auto d-flex flex-column">
        <div className="h-60 row w-100 bottomGrayBorder">
          <div className="col-12 my-auto mx-auto">
            <i className={fullIconName} />

            <Link to={props.linkTo} className={showTheLink}>
              <h2 class="h4">{props.header}</h2>
            </Link>
            <h2 class={showTheNonLink}>{props.header}</h2>
          </div>
        </div>
        <div className="h-40 row">
          <div className="col-12 my-auto mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
*/