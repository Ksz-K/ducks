import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am learning REDUX</p>
      </header>
    </div>
  );
}

export default Header;
