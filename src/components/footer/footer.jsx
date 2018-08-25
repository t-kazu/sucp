import React from "react";
import { Container, Footer } from "mdbreact";

import "./footer.css";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="light-blue" className="font-small pt-0 footer-div">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://shimane-u-characters.com">
              島根大学非公認キャラ sucp
            </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
