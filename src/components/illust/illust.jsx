import React, { Component } from "react";
import { Fa, Card, CardBody, CardTitle, CardText } from "mdbreact";

import "./illust.css";

const basePath = "/static/media/";

class Illust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: basePath + this.props.character.img.split("/").pop()
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
            <CardText className="center">
              <a href={this.state.imgPath}>
                <img
                  src={this.props.character.img}
                  alt={this.props.character.name}
                />
              </a>
            </CardText>
            <div align="center">
              <a
                href={this.state.imgPath}
                className="card-link"
                download={this.props.character.filePath}
              >
                <Fa icon="download" />
                ダウンロード
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Illust;
