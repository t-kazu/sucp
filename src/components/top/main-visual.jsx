import React, { Component } from "react";
import { Mask, Row, Col, View, Container, Animation } from "mdbreact";

import charcterImg from "../illust/characters/top.png";
import "./main-visual.css";

class MainVisual extends Component {
  render() {
    return (
      <div id="apppage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <Animation type="slideInDown">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      島根大学非公認キャラSUCP
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      非公認キャラを通して島根大学を広めたり、島根大学を宣伝するために自由にキャラを使うことができます。
                    </h6>
                    <h6 className="mb-4">
                      本プロジェクトは、自主的活動支援プロジェクト【
                      <a href="http://gakushien.shimane-u.ac.jp/projectS/">
                        学生プロジェクトS
                      </a>
                      】に採択されたプロジェクトです。
                      自主的活動であるため、島根大学ではなく学生主体のプロジェクトです。
                    </h6>
                  </Animation>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <Animation type="slideInUp">
                    <img
                      src={charcterImg}
                      className="img-fluid"
                      alt="TopImage"
                    />
                  </Animation>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );
  }
}

export default MainVisual;
