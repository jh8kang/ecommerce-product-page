import { useState } from "react";
import "./App.scss";
import Landing from "./screens/Landing";
import logo from "./assets/images/logo.svg";
import cart from "./assets/images/icon-cart.svg";
import profilePic from "./assets/images/image-avatar.png";
import Navigation from "./components/Index";
import { NavigationMobile } from "./components/Index";
import menu from "./assets/images/icon-menu.svg";

function App() {
  let [mobileMenu, setMobileMenu] = useState(false);
  let mobileMenuOpen = () => {
    setMobileMenu(true);
  };
  let mobileMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <div className="App">
      {mobileMenu ? (
        <NavigationMobile mobileMenuClose={mobileMenuClose} />
      ) : null}
      <header className="header">
        <div className="header_left">
          <img
            src={menu}
            alt="menu bar"
            className="header_menu_icon"
            onClick={mobileMenuOpen}
          />
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
