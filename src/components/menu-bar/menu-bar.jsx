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
import GuidelinesScreen from "../../containers/guidelines.jsx";
import ContactScreen from "../../containers/contact.jsx";

const HomePath = "/";
const IllustPath = "/illust";
const GuidelinesPath = "/guidelines";
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
                  GuidelinesPath,
                  this.state.pathname,
                  "ガイドライン"
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
            <Route exact path={HomePath} component={TopScreen} />
            <Route path={IllustPath} component={IllustScreen} />
            <Route path={GuidelinesPath} component={GuidelinesScreen} />
            <Route path={ContactPath} component={ContactScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
