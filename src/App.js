import React, { Component } from "react";

import Menu from "./components/menu-bar/menu-bar.jsx";
import Footer from "./containers/fotter.jsx";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
