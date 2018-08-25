import React, { Component } from "react";
import { Card, CardBody } from "mdbreact";
import icon01 from "./icon01_light.svg";
import icon02 from "./icon02_light.svg";
import icon03 from "./icon03_light.svg";

import "./concept.css";

class Concept extends Component {
  render() {
    return (
      //todo オシャレにする
      <div id="concept">
        <div className="row white-text py-5 gradient">
          <div className="col mx-2 p-3">
            <img src={icon01} className="mx-auto d-block" alt="global" />
            <p className="text-center mt-3">
              島根大学生なら自由に使えるキャラの公開
            </p>
          </div>
          <div className="col mx-2 ">
            <img
              src={icon02}
              className="mx-auto d-block"
              alt="character_open"
            />
            <p className="text-center mt-3">島根大学キャラのオープン化</p>
          </div>
          <div className="col mx-2 p-3">
            <img src={icon03} className="mx-auto d-block" alt="platform" />
            <p className="text-center mt-3">
              島根大学生生自らがキャラを生み出せるプラットフォームの作成
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
