import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import TopScreen from "../../containers/top.jsx";
import IllustScreen from "../..//containers/illust.jsx";
import LicenseScreen from "../../containers/license.jsx";
import ContactScreen from "../../containers/contact.jsx";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="blue" dark expand="md" fixed="top">
            <NavbarBrand href="/">
              <strong>SUCP</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="/">ホーム</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/illust">イラスト</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/license">ライセンス</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">お問合わせ</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={TopScreen} />
            <Route path="/illust" component={IllustScreen} />
            <Route path="/license" component={LicenseScreen} />
            <Route path="/contact" component={ContactScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
