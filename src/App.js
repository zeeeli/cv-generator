import React, { Component } from "react";
import CVHeader from "./components/CVHeader";
import logoPath from "./assets/ResumeLogo.png";
import "./App.css";
import CVNav from "./components/CVNav";
import CVMain from "./components/CVMain";
import CVFooter from "./components/CVFooter";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <CVHeader logo={logoPath} size={160} />

        {/* <CVNav> contains reset, example, and print buttons */}
        <CVNav />

        <span className="instruct">Click Element To Edit</span>

        {/* <main> contains CV */}
        <CVMain></CVMain>

        <CVFooter></CVFooter>
      </div>
    );
  }
}

export default App;
