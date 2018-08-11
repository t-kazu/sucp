import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

import Menu from "./components/menu-bar/menu-bar.jsx";
import Footer from "./components/footer/fotter.jsx";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
