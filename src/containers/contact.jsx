import React, { Component } from "react";
import { Mask, Row, Col, Fa, Button, View, Container } from "mdbreact";

import "./share.css";
import "./contact.css";

class ContactScreen extends Component {
  render() {
    return (
      <div className="padding-menu-contact">
        <div id="videobackground">
          <View>
            <video
              className="video-intro"
              poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
              playsInline
              autoPlay
              muted=""
              loop
            >
              {/*<source
                src="https://mdbootstrap.com/img/video/animation.mp4"
                type="video/mp4"
              />*/}
            </video>
            <Mask className="d-flex justify-content-center align-items-center gradient">
              <Container className="px-md-3 px-sm-0">
                <Row>
                  <Col md="12" className="mb-4 white-text text-center">
                    <h3 className="display-contact font-weight-bold mb-0 pt-md-5">
                      Contact us{" "}
                    </h3>
                    <hr className="hr-light my-4 w-75" />
                    <h5 className="subtext-header mt-2 mb-4">
                      お便りお待ちしております。
                    </h5>
                    <Button
                      outline
                      color="white"
                      href="mailto:kaza9322@gmail.com?subject=島根大学非公認キャラSUCPへの問合わせ"
                    >
                      <Fa icon="envelope" /> メールはこちらへ
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Mask>
          </View>
        </div>
      </div>
    );
  }
}

export default ContactScreen;
