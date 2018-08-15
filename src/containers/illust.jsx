import React, { Component } from "react";

import Illust from "../components/illust/illust.jsx";
import characterData from "../components/illust/illust-list.json";
import "./share.css";

class IllustScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2>キャラクターは近日公開予定です。</h2>
        <div className="row">
          {characterData.map(character => {
            return <Illust character={character} />;
          })}
        </div>
      </div>
    );
  }
}

export default IllustScreen;
