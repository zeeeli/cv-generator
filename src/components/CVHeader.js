import React, { Component } from "react";

class CVHeader extends Component {
  render() {
    const { logo, size } = this.props;
    return (
      <header className="cv-header">
        <img src={logo} alt="Resume Icon" width={size} height={size} />
        <h1>CV Generator</h1>
      </header>
    );
  }
}

export default CVHeader;
