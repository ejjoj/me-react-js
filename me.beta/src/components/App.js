import React, { Component } from "react";

import "../styles/App.scss";

import Header from "./Header";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-columns">
          <LeftAside />
          <RightAside />
        </div>
      </div>
    );
  }
}

export default App;
