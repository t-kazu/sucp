import React, { Component } from "react";
import {
  Fa,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { Route, Switch, withRouter } from "react-router-dom";

import TopScreen from "../../containers/top.jsx";
import IllustScreen from "../..//containers/illust.jsx";
import GuidelinesScreen from "../../containers/guidelines.jsx";
import ContactScreen from "../../containers/contact.jsx";

const HomePath = "/";
const IllustPath = "/illust";
const GuidelinesPath = "/guidelines";
const ContactPath = "/contact";

const MenuComponent = withRouter(props => <Menu {...props} />);

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      pathname: this.props.location.pathname
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

  setNavItem(Path, pathname, icon, name) {
    return pathname === Path ? (
      <NavItem active>
        <NavLink to={Path} onClick={() => this.onClickMenu(Path)}>
          <Fa icon={icon} />
          {name}
        </NavLink>
      </NavItem>
    ) : (
      <NavItem>
        <NavLink to={Path} onClick={() => this.onClickMenu(Path)}>
          <Fa icon={icon} />
          {name}
        </NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        <Navbar color="blue" dark expand="lg" fixed="top" scrolling>
          <NavbarBrand href="#" onClick={() => this.onClickMenu(HomePath)}>
            <strong>SUCP</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              {this.setNavItem(HomePath, this.state.pathname, "home", "ホーム")}
              {this.setNavItem(
                IllustPath,
                this.state.pathname,
                "picture-o",
                "イラスト"
              )}
              {this.setNavItem(
                GuidelinesPath,
                this.state.pathname,
                "book",
                "ガイドライン"
              )}
              {this.setNavItem(
                ContactPath,
                this.state.pathname,
                "envelope",
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
    );
  }
}

export default MenuComponent;
