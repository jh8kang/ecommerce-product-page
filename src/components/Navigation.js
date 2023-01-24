import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <a href="Collections" className="navigation-item">
          Collections
        </a>
        <a href="Men" className="navigation-item">
          Men
        </a>
        <a href="Women" className="navigation-item">
          Women
        </a>
        <a href="About" className="navigation-item">
          About
        </a>
        <a href="Contact" className="navigation-item">
          Contact
        </a>
      </div>
    );
  }
}
