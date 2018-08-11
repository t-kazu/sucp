import React, { Component } from "react";

import topImage from "./sample.jpg";
import "./main-visual.css";

class MainVisual extends Component {
  render() {
    return <img src={topImage} alt="TopImage" />;
  }
}

export default MainVisual;
