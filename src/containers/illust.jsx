import React, { Component } from "react";

import Illust from "../components/illust/illust.jsx";
import illustList from "../components/illust/illust-list.jsx";
import "./share.css";

class IllustScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2>
          イラストを紹介しています。イラストの利用に関しては、ガイドライン公開までもうしばらくお待ち下さい。
        </h2>
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
