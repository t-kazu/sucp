import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

import TopScreen from "../../containers/top.jsx";
import IllustScreen from "../..//containers/illust.jsx";
import LicenseScreen from "../../containers/license.jsx";
import ContactScreen from "../../containers/contact.jsx";

class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">SUCP</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/illust">
                  <NavItem>イラスト</NavItem>
                </LinkContainer>
                <LinkContainer to="/license">
                  <NavItem>ライセンス</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem>お問合わせ</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={TopScreen} />
          <Route path="/illust" component={IllustScreen} />
          <Route path="/license" component={LicenseScreen} />
          <Route path="/contact" component={ContactScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
