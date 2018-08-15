import React, { Component } from "react";

import "./illust.css";

const illustBasePath = `${process.env.PUBLIC_URL}` + "/characters/";

class Illust extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="illust-div col-xs-6 col-md-3">
        <img src={illustBasePath + this.props.character.filePath} />
        <h1>{this.props.character.name}</h1>
        <a href="/" class="disabled" tabindex="-1">
          {this.props.character.creator}
        </a>
      </div>
    );
  }
}

export default Illust;
