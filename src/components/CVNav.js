import React, { Component } from "react";

class CVNav extends Component {
  refreshPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="cv-nav">
        <button>Print</button>
        <button onClick={this.refreshPage}>Reset</button>
        <button onClick={this.props.exampleStatusHandler}>Example</button>
      </div>
    );
  }
}

export default CVNav;
