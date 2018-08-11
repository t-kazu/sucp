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

const HomePath = "/";
const IllustPath = "/illust";
const LicensePath = "/license";
const ContactPath = "/contact";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      pathname: HomePath
    };
    this.onClick = this.onClick.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  onClickMenu(nextPath) {
    this.setState({
      collapse: false,
      pathname: nextPath
    });
  }

  setNavItem(Path, pathname, name) {
    return pathname === Path ? (
      <NavItem active>
        <NavLink to={Path} onClick={() => this.onClickMenu(Path)}>
          {name}
        </NavLink>
      </NavItem>
    ) : (
      <NavItem>
        <NavLink to={Path} onClick={() => this.onClickMenu(Path)}>
          {name}
        </NavLink>
      </NavItem>
    );
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
                {this.setNavItem(HomePath, this.state.pathname, "ホーム")}
                {this.setNavItem(IllustPath, this.state.pathname, "イラスト")}
                {this.setNavItem(
                  LicensePath,
                  this.state.pathname,
                  "ライセンス"
                )}
                {this.setNavItem(
                  ContactPath,
                  this.state.pathname,
                  "お問合わせ"
                )}
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
