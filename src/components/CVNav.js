import React, { Component } from "react";
import "../components/CVNav.css";

class CVNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-nav">
        <button>Print</button>
        <button>Reset</button>
        <button>Example</button>
      </div>
    );
  }
}

export default CVNav;
