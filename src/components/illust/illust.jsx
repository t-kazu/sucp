import React, { Component } from "react";
import { Fa, Card, CardBody, CardTitle, CardText } from "mdbreact";

import "./illust.css";

const illustBasePath = `${process.env.PUBLIC_URL}` + "/characters/";

class Illust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: illustBasePath + this.props.character.filePath
    };
  }

  render() {
    return (
      <div>
        <Card style={{ width: "20rem", margin: "1rem" }}>
          <CardBody>
            <CardTitle tag="h5" className="illust-title">
              {this.props.character.name}
            </CardTitle>
            <CardTitle tag="h6" sub className="mb-2 text-muted illust-title">
              <a href="/" class="disabled" tabindex="-1">
                {this.props.character.creator}
              </a>
            </CardTitle>
            <CardText>
              <a href={this.props.character.img}>
                <img src={this.props.character.img} />
              </a>
            </CardText>
            <a href={this.props.character.img} className="card-link" download>
              <Fa icon="download" />
              ダウンロード
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Illust;
