import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

import charcterImg from "../components/illust/characters/image1.png";
import "./share.css";

class IntroScreen extends Component {
  render() {
    return (
      <div className="padding-menu container">
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            島根大学非公認キャラって？
          </h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">
            自分で自由にキャラを作って投稿（メール）したり、
            <br />
            イラストリストから画像をダウンロードして自由に使うことができます。
            <br />
            本ページでは、本企画のメインキャラ かんなびやえちゃん
            が自己紹介をします
          </p>

          <MDBRow>
            <MDBCol lg="5" className="text-center text-lg-left">
              <img className="img-fluid" src={charcterImg} alt="" />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">かんなびやえ</h5>
                  <p className="grey-text">
                    やえと呼んでください。
                    <br />
                    誕生日: 10/5です (このサイトの公開日と同じですね) <br />
                    年齢: ひっ、ひみつです
                    <br />
                    性格:
                    明るいけど、おしとやか？（自分だとよくわからないですね）{" "}
                    <br />
                    好きな場所: 水辺と温泉です。とにかく水には目がないんです！{" "}
                    <br />
                    好きなこと:
                    お友達とおしゃべりですが…（まだお友達いないのです）
                    <br />
                    特技: あやとりです
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    );
  }
}

export default IntroScreen;
