import React, { Component } from "react";

import "./share.css";
import "./guidelines.css";

class GuidelinesScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2>ライセンスについて</h2>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img
            alt="クリエイティブ・コモンズ・ライセンス"
            className="cc-img"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </a>
        <br />
        この 作品 は{" "}
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
        </a>
        の下に提供されています。
        <h6>
          また、当キャラを利用し問題が発生した場合、いかなる理由でも責任を負いかねます。
        </h6>
      </div>
    );
  }
}

export default GuidelinesScreen;
