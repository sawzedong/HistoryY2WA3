/*eslint no-unused-vars: 0*/
import React from "react"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
function SectionDisplay(props) {
    var iconClass = `fas fa-${props.icon} h1`;
    var btnClass = "font-16";
    if(!props.btnDisplay){btnClass = "d-none";}
    return (
        <div>
        <div className="row h-100">
          <div className="col-md-3 text-md-right p-4 px-5">

              <i className={iconClass} id="historyIcon" />

          </div>
          <div className="col-md-8 row p-3">
            <div className="col-md-12 my-auto">
              <h2>
                <strong>{props.headerText}</strong>
              </h2>

              <p className="my-4 font-17">
              {props.children}
              </p>
              <p>
                <Link className={btnClass} to={props.linkto}>
                  {props.btnText}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SectionDisplay;