import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

import Menu from "./components/menu-bar/menu-bar.jsx";
import Footer from "./components/footer/footer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Router hashType="hashbang">
          <Menu />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
