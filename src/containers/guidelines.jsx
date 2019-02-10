import React, { Component } from "react";

import "./share.css";

class GuidelinesScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <h2>ライセンスについて</h2>
        <h5>CC(クリエイティブ・コモンズ)に準拠します。</h5>
        <h5>
          また、当キャラを利用し問題が発生した場合、いかなる理由でも責任を負いかねます。
        </h5>
      </div>
    );
  }
}

export default GuidelinesScreen;
