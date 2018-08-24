import React, { Component } from "react";

class Concept extends Component {
  render() {
    return (
      //todo オシャレにする
      <div class="container">
        <div className="row">
          <div className="col">
            <img
              src="./クラウドストレージアイコン.png"
              className="mx-auto d-block"
              alt="concept1"
            />
            <p className="text-center">
              島根大学生なら自由に使えるキャラの公開
            </p>
          </div>
          <div className="col">
            <p>島根大学キャラのオープン化</p>
          </div>
          <div className="col">
            <p>島根大学生生自らがキャラを生み出せるプラットフォームの作成</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
