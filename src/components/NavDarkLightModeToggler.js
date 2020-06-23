import React from "react";

class NavDarkLightModeToggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        var darkModeStylingElement = document.getElementById("dark-mode");
        var darkModeSelector = document.getElementById("DarkModeToggler").checked;
        if(darkModeSelector){
        darkModeStylingElement.textContent = `
        .dark {
            background-color: black !important;
          
          }
          .dark * {
            color: white !important;
          }

          .dark .scroll-down {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
          }
          
        `
        }else {
            darkModeStylingElement.textContent = "";
        }
      }
      render() {
        return (
        <form className="form-inline my-2 my-md-0 mr-2 float-md-right position-absolute" id="DarkModeTogglerDiv">
            <input 
                type="checkbox" 
                className="form-control mr-md-2" 
                placeholder="Dark Mode" 
                aria-label="Dark Mode Toggle" 
                id="DarkModeToggler" 
                onChange={this.handleClick}
            />
            <label htmlFor="DarkModeToggle" className="text-white">Dark Mode</label>
        </form>
        );
      }
}


export default NavDarkLightModeToggler;