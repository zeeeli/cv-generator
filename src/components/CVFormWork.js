import React, { Component } from "react";
import CVFormWorkEntry from "./CVFormWorkEntry";

export default class CVFormWork extends Component {
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
      children.push(
        <CVFormWorkEntry />,
        <CVFormWorkEntry />,
        <CVFormWorkEntry />
      );
    } else {
      for (let i = 0; i < this.state.numChildren; i++)
        children.push(<CVFormWorkEntry />);
    }

    return (
      <section id="work">
        <h2 className="section-header">
          Work Experience
          <img
            src={require("../assets/add.png")}
            alt="plus symbol"
            id="add-work"
            style={
              this.props.exampleClicked || this.props.printClicked
                ? { display: "none" }
                : { width: 30, height: 30 }
            }
            title="Add to end"
            onClick={this.addChild}
          />
          <img
            src={require("../assets/remove.png")}
            alt="minus symbol"
            id="remove-work"
            style={
              this.props.exampleClicked || this.props.printClicked
                ? { display: "none" }
                : { width: 30, height: 30 }
            }
            title="Remove from end"
            onClick={this.removeChild}
          />
        </h2>
        <div id="work-body">{children}</div>
      </section>
    );
  }
}
