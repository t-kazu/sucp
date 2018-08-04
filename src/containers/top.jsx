import React, { Component } from "react";
import MainVisual from "../components/top/main-visual.jsx";
import Concept from "../components/top/concept.jsx";

class TopScreen extends Component {
  render() {
    return (
      <div>
        <MainVisual />
        <Concept />
      </div>
    );
  }
}

export default TopScreen;
