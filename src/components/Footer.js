/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import "../styles/Footer.css"

/*
class ScrollerDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var elmnt = document.getElementById(this.props.ID);
    elmnt.scrollIntoView();
  }
  render() {
    return (
      <div
        id={this.props.ID}
        onClick={this.handleClick}
        className="scroll-down bg-on-dark-positive-trans"
      >
        <span className="fas fa-chevron-down" />
      </div>
    );
  }
}
*/
class FooterLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <Link to={this.props.to} className={this.props.className} onClick={this.handleClick}>{this.props.children}</Link>
    );
  }
}
export default function PageFooter(props) {
    // props. : prevLink, prevTitle, prevDisplay, nextLink, nextTitle, nextDisplay
  const previousArticleText = props.prevDisplay ? "Previous Page" : ""
  const nextArticleText = props.nextDisplay ? "Next Page" : ""
  return (
    <footer class="min-vh-30 py-5 row justify-content-between background-3 px-2">
        <div class="col-md-6 left pagechange row p-0">
            <div class="col-12 mx-auto my-auto">
            <span class="h4">{previousArticleText}</span>
            <FooterLink to={props.prevLink} className="footerLink h2">{props.prevTitle}</FooterLink>
            </div>
        </div>
        <div class="col-md-6 right pagechange row p-0">
        <div class="col-12 mx-auto my-auto">
            <span className="h4">{nextArticleText}</span>
            <FooterLink to={props.nextLink} className="footerLink h2">{props.nextTitle}</FooterLink>
            </div>
        </div>
    </footer>
  );
}
