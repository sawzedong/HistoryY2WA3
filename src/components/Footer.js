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

export default function PageFooter(props) {
    // props. : prevLink, prevTitle, prevDisplay, nextLink, nextTitle, nextDisplay
  const previousArticleText = props.prevDisplay ? "Previous Page" : ""
  const nextArticleText = props.nextDisplay ? "Next Page" : ""
  return (
    <footer class="min-vh-40 row justify-content-between background-3 px-2">
        <div class="col-md-6 left pagechange row p-0">
            <div class="col-12 mx-auto my-auto">
            <span class="h4">{previousArticleText}</span>
            <Link to={props.prevLink} className="footerLink h2">{props.prevTitle}</Link>
            </div>
        </div>
        <div class="col-md-6 right pagechange row p-0">
        <div class="col-12 mx-auto my-auto">
            <span className="h4">{nextArticleText}</span>
            <Link to={props.nextLink} className="footerLink h2">{props.nextTitle}</Link>
            </div>
        </div>
    </footer>
  );
}
