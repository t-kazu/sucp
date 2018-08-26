import React, { Component } from "react";
import { Mask, Row, Col, Fa, Button, View, Container } from "mdbreact";

import "./share.css";
import "./contact.css";

import contactImg from "./contact.png";

class ContactScreen extends Component {
  render() {
    return (
      <div className="padding-menu-contact">
        <div id="videobackground">
          <View>
            <img
              src={contactImg}
              className="img-fluid size-contact"
              alt="TopImage"
            />
            <Mask className="d-flex justify-content-center align-items-center gradient">
              <Container className="px-md-3 px-sm-0">
                <Row>
                  <Col md="12" className="mb-4 white-text text-center">
                    <h3 className="display-contact font-weight-bold mb-0 pt-md-5">
                      Contact us{" "}
                    </h3>
                    <hr className="hr-light my-4 w-75" />
                    <h5 className="subtext-header mt-2 mb-4">
                      ご相談お待ちしております。
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
