import React, { Component } from "react";

import Illust from "../components/illust/illust.jsx";
import illustList from "../components/illust/illust-list.jsx";
import "./share.css";

class IllustScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2>キャラクターは近日公開予定です。</h2>
        <div className="row">
          {illustList.map(character => {
            return <Illust character={character} />;
          })}
        </div>
      </div>
    );
  }
}

export default IllustScreen;
