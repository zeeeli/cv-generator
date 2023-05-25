import React, { Component } from "react";
import CVFormInput from "./CVFormInput";

export default class CVFormEduEntry extends Component {
  render() {
    return (
      <div>
        <CVFormInput defaultText="Degree" id="degree-name" length={20} />
        <CVFormInput defaultText="Institution" id="insti-name" length={28} />
        <CVFormInput defaultText="xxxx - xxxx" id="years" length={11} />
        <CVFormInput defaultText="GPA" id="gpa" length={4} />
      </div>
    );
  }
}
