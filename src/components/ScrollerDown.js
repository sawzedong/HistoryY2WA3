/* eslint no-unused-vars: 0 */
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init()

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
        <div id={this.props.ID} onClick = {this.handleClick} className="scroll-down bg-on-dark-positive-trans" >
            <span className="fas fa-chevron-down"/>
          </div>
        );
      }
}

export default ScrollerDown;