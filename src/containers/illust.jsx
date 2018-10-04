import React, { Component } from "react";

import Illust from "../components/illust/illust.jsx";
import illustList from "../components/illust/illust-list.jsx";
import "./share.css";
import "./illust.css";

class IllustScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2 className="illust-title">イラスト一覧</h2>
        <h5>
          こちらのページではイラストを紹介しています。
          <br />
          また、イラストの利用に関してはガイドライン公開までもうしばらくお待ち下さい。
          <br />
          現在キャラクター名を募集していますので、宜しければイラスト下記にあるリンクよりお答え下さい。
        </h5>
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
