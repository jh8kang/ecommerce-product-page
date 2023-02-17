// import { useState } from "react";
import "./App.scss";
import Landing from "./screens/Landing";
import logo from "./assets/images/logo.svg";
import cart from "./assets/images/icon-cart.svg";
import profilePic from "./assets/images/image-avatar.png";
import Navigation from "./components/Index";
import { NavigationMobile } from "./components/Index";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_left">
          <div>
            <NavigationMobile />
          </div>
          <div className="header_desktop">
            <img src={logo} alt="header logo" className="header_logo" />
            <Navigation />
          </div>
        </div>
        <div className="header_right">
          <img src={cart} alt="cart" />
          <img src={profilePic} alt="profilePic" className="profilePic" />
        </div>
      </header>
      <Landing />
    </div>
  );
}

export default App;
