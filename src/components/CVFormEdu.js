import React, { Component } from "react";
import CVFormEduEntry from "./CVFormEduEntry";

export default class CVFormEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numChildren: 0,
    };
  }

  addChild = () => {
    if (this.state.numChildren < 3) {
      this.setState({
        numChildren: this.state.numChildren + 1,
      });
    }
  };

  removeChild = () => {
    if (this.state.numChildren > 0) {
      this.setState({
        numChildren: this.state.numChildren - 1,
      });
    }
  };

  render() {
    const children = [];

    if (this.props.exampleClicked) {
      children.push(<CVFormEduEntry />, <CVFormEduEntry />, <CVFormEduEntry />);
    } else {
      for (let i = 0; i < this.state.numChildren; i++)
        children.push(<CVFormEduEntry />);
    }

    return (
      <section id="education">
        <h2 className="section-header">
          Education
          <img
            src={require("../assets/add.png")}
            alt="plus symbol"
            id="add-edu"
            style={
              this.props.exampleClicked
                ? { display: "none" }
                : { width: 30, height: 30 }
            }
            title="Add to end"
            onClick={this.addChild}
          />
          <img
            src={require("../assets/remove.png")}
            alt="minus symbol"
            id="remove-edu"
            style={
              this.props.exampleClicked
                ? { display: "none" }
                : { width: 30, height: 30 }
            }
            title="Remove from end"
            onClick={this.removeChild}
          />
        </h2>
        <div id="edu-body">{children}</div>
      </section>
    );
  }
}
