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
        <h5>こちらのページではイラストを紹介しています。</h5>
        <h5>
          キャラ名は、『かんなびやえ』になりました。キャラ名募集のアンケートに協力して下さった皆様ありがとうございました。
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
