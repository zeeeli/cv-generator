import React, { Component } from "react";

export class CVFooter extends Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/zeeeli" id="github-link">
          <img
            src={require("../assets/github.png")}
            alt="github logo"
            style={{ width: 30, height: 30 }}
          />
          <span>Written by zeeeli © 2023</span>
        </a>
      </footer>
    );
  }
}

export default CVFooter;
