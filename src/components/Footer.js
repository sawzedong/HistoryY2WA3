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
  const previousArticleText = props.prevDisplay ? "Previous Article" : ""
  const nextArticleText = props.nextDisplay ? "Next Article" : ""
  return (
    <footer class="min-vh-40 row justify-content-between background-3 px-2">
        <div class="col-4 left pagechange row p-0">
            <div class="col-12 mx-auto my-auto">
            <h3>{previousArticleText}</h3>
            <Link to={props.prevLink} className="footerLink h1">{props.prevTitle}</Link>
            </div>
        </div>
        <div class="col-4 right pagechange row p-0">
        <div class="col-12 mx-auto my-auto">
            <h3>{nextArticleText}</h3>
            <Link to={props.nextLink} className="footerLink h1">{props.nextTitle}</Link>
            </div>
        </div>
    </footer>
  );
}
