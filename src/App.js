import React, { Component } from "react";
import CVHeader from "./components/CVHeader";
import logoPath from "./assets/ResumeLogo.png";
import "./App.css";
import CVNav from "./components/CVNav";
import CVMain from "./components/CVMain";
import CVFooter from "./components/CVFooter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleClicked: false,
    };
  }

  changeExampleClicked = () => {
    this.setState({ exampleClicked: true });
  };

  render() {
    return (
      <div className="main">
        <CVHeader logo={logoPath} size={160} />

        {/* <CVNav> contains reset, example, and print buttons */}
        <CVNav exampleStatusHandler={this.changeExampleClicked} />

        <span className="instruct">Click Element To Edit</span>

        {/* <CVMain> contains CV */}
        <CVMain exampleStatus={this.state.exampleClicked}></CVMain>

        <CVFooter></CVFooter>
      </div>
    );
  }
}

export default App;
