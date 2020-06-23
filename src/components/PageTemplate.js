/* eslint no-unused-vars: 0 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function PageTemplate(props) {
  var offsetPadding = 0;
  var offsetMargin = 0;
  if (props.padding) {
    offsetPadding = "32px";
    offsetMargin = 0;
  } else if (props.margin) {
    offsetPadding = 0;
    offsetMargin = "32px";
  }
  var finalClasses = `${props.classes} dark`;
  return (
    <div
      className={finalClasses}
      id={props.ID}
      style={{
        paddingTop: offsetPadding,
        marginTop: offsetMargin
      }}
    >
      {props.children}
    </div>
  );
}
