import "./App.scss";
import Landing from "./screens/Landing";
import "./style/_global.scss";
import logo from "./assets/images/logo.svg";
import cart from "./assets/images/icon-cart.svg";
import profilePic from "./assets/images/image-avatar.png";
import Navigation from "./components/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <Navigation />
        <img src={cart} alt="cart" />
        <img src={profilePic} alt="profilePic" className="profilePic" />
      </header>
      <Landing />
    </div>
  );
}

export default App;
