/*eslint no-unused-vars: 0*/
/*
Required Props:
icon
sectionEx
headerText
paraText
btnDisplay
btnText
*/
import React from "react"
function SectionDisplay(props) {
    var iconClass = `fas fa-${props.icon} fa-3x`;
    var sectionClass = `${props.sectionEx} px-3 vw-100`;
    var btnClass = "btn btn-primary px-3 py-2 font-20";
    if(!props.btnDisplay){btnClass = "d-none";}
    return (
        <section className={sectionClass}>
        <div className="row h-100 justify-content-center">
          <div className="col-md-3 text-md-right p-4" >

              <i className={iconClass} id="historyIcon" />

          </div>
          <div className="col-md-8 row p-3" >
            <div className="col-md-12 my-auto">
              <h1>
                <strong>{props.headerText}</strong>
              </h1>

              <p className="my-4 font-18">
              {props.children}
              </p>
              <p>
                <button className={btnClass}>
                  {props.btnText}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SectionDisplay;