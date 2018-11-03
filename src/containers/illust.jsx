import React, { Component } from "react";
import { Fa } from "mdbreact";

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
          現在キャラクター名を募集していますので、宜しければリンク先のアンケートにお答え下さい。
        </h5>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_lOliJmhuyoI49oADYfOv0BJimFhSgj6UKXDD4s9G5MP4Ug/viewform"
          className="card-link"
        >
          <Fa icon="pencil-square-o" />
          キャラ名募集のアンケート実施中
        </a>
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
