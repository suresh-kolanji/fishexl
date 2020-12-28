import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 0.5,
        }}
      />
    );
    return (
      <footer>
        <ColoredLine color=" #e6f2ff" />
        2020-2021 Jones Seafood. All Rights Reserved{" "}
      </footer>
    );
  }
}

export default Footer;
