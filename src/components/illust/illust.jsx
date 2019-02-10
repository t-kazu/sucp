import React, { Component } from "react";
import { Fa, Card, CardBody, CardTitle, CardText, Button } from "mdbreact";

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
              <Button color="info" disabled size="sm" className="button-left">
                {this.props.character.option}
              </Button>
            </CardTitle>
            <CardTitle tag="h6" sub className="mb-2 text-muted illust-title">
              Illust by {this.props.character.creator}
            </CardTitle>
            <div align="center">
              <CardText>
                <a href={this.state.imgPath}>
                  <img
                    src={this.props.character.img}
                    alt={this.props.character.name}
                  />
                </a>
              </CardText>
              <a
                href={this.state.imgPath}
                className="card-link"
                download={this.props.character.filePath}
              >
                <Fa icon="download" /> ダウンロード
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Illust;
