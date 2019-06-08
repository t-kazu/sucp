import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";

import illustList from "../components/illust/illust-list.jsx";
import "./share.css";
import "./guidelines.css";

class GuidelinesScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <div>
          <h2>ライセンスについて</h2>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img
              alt="クリエイティブ・コモンズ・ライセンス"
              className="cc-img"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png"
            />
          </a>
          <br />
          本サイトで公開しているキャラクター は全て{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
          </a>
          の下に提供されています。
          <h6>
            また、当キャラを利用し問題が発生した場合、いかなる理由でも責任を負いかねます。
          </h6>
        </div>
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              　キャラの利用にあたって
            </h2>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src={illustList[2].img} alt="" />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="green-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="utensils" className="pr-2" />
                    Good
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>やってもいいこと</strong>
                </h3>
                <p>
                  ©表記なしで基本自由にキャラを使うことができます <br />
                  <br />
                  キャラ設定を好みに追加することができます <br />
                  <br />
                  トリミングや明るみ変更など画像を加工することができます <br />
                  <br />
                  自分で描いたイラストをお問い合わせメールから送信できます（本サイトイラスト一覧に追加されるかもしれません）
                </p>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="pink-text">
                  <h6
                    className="font-weight-bold mb-3"
                    style={{ color: "#3F51B5" }}
                  >
                    Bad
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>してはいけないこと</strong>
                </h3>
                <p>
                  自分自身が創作したキャラクターであると誤認されるような方法での使用{" "}
                  <br />
                  <br />
                  キャライメージを損なう可能性のある使用方法（他人を不快にさせたり、傷つけたり）{" "}
                  <br />
                  <br />
                  特定の信条や宗教，政治的発言を支援・公認していると誤認されるような使用
                </p>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src={illustList[1].img} alt="" />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default GuidelinesScreen;
