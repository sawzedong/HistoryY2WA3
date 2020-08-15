/* eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class InTextCitation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var searchID = `citationNo${this.props.ID}`
    var allElmnt = document.getElementsByClassName("footnoteCitation")
    for(var i = 0; i < allElmnt.length; i++) {
      allElmnt[i].classList.remove("selected")
    }
    var elmnt = document.getElementById(searchID);
    elmnt.scrollIntoView();
    elmnt.classList.add("selected");
  }
  render() {
    return (
        <Link to="#" onClick={this.handleClick}><sup>{`[${this.props.ID}]`}</sup></Link>

    );
  }
}

export default InTextCitation;
