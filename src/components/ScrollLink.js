/* eslint no-unused-vars: */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

class ScrollLink extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      window.scrollTo(0,0);
    }
    render() {
      return (
        <Link to={this.props.to} className={this.props.className} id={this.props.id} onClick={this.handleClick}>{this.props.children}</Link>
      );
    }
  }

export default ScrollLink;