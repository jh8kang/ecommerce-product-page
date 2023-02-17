import React from "react";
import "./NavigationMobile.scss";
import iconClose from "../assets/images/icon-close.svg";

function Navigation() {
  return (
    <div className="nav-mobile">
      <div className="nav-mobile_white">
        <img src={iconClose} alt="side menu" className="icon-close" />
        <div className="nav-mobile_menu">
          <a href="Collections" className="nav-mobile_item">
            Collections
          </a>
          <a href="Men" className="nav-mobile_item">
            Men
          </a>
          <a href="Women" className="nav-mobile_item">
            Women
          </a>
          <a href="About" className="nav-mobile_item">
            About
          </a>
          <a href="Contact" className="nav-mobile_item">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
