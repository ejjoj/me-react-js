import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import "../styles/App.scss";

import Header from "./Header";
import Start from "./Start";

class App extends Component {
  render() {
    return (
      <div className="row wrapper">
        <Header />
        <Start />
      </div>
    );
  }
}

export default App;
