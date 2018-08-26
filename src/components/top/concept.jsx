import React, { Component } from "react";
import { Animation } from "mdbreact";
import icon01 from "./icon01_light2.svg";
import icon02 from "./icon02_light.svg";
import icon03 from "./icon03_light.svg";

import "./concept.css";

class Concept extends Component {
  render() {
    return (
      //todo オシャレにする
      <div class="concept-view">
        <div class="mask concept-gradient d-flex justify-content-center align-items-center">
          <div id="concept" className="container-fluid">
            <div className="row row-eq-height white-text">
              <div className="col">
                <img
                  src={icon01}
                  className="mx-auto d-block img-fluid w-50 h-50"
                  alt="global"
                />
              </div>

              <div className="col">
                <img
                  src={icon02}
                  className="mx-auto d-block img-fluid w-50 h-50"
                  alt="character_open"
                />
              </div>

              <div className="col text">
                <img
                  src={icon03}
                  className="mx-auto d-block img-fluid w-50 h-50"
                  alt="platform"
                />
              </div>
            </div>

            <div className="row row-eq-height white-text">
              <div className="col text">
                <Animation reveal type="fadeInUp" duration="1s">
                  <p className="text-center align-middle">
                    島根大学生なら自由に
                    <span class="br">使えるキャラの公開</span>
                  </p>
                </Animation>
              </div>

              <div className="col">
                <Animation reveal type="fadeInUp" duration="1s" delay="0.3s">
                  <p className="text-center  align-middle">
                    島根大学キャラの
                    <span class="br">オープン化</span>
                  </p>
                </Animation>
              </div>

              <div className="col text">
                <Animation reveal type="fadeInUp" duration="1s" delay="0.6s">
                  <p className="text-center align-middle">
                    島根大学生自らがキャラを
                    <span class="br">生み出せるプラットフォーム</span>
                    <span class="br">の作成</span>
                  </p>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
