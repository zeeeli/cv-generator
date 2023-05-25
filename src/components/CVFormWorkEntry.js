import React, { Component } from "react";
import CVFormInput from "./CVFormInput";

export default class CVFormWorkEntry extends Component {
  render() {
    return (
      <div>
        <CVFormInput defaultText="Employer Name" id="employer" length={50} />
        <CVFormInput defaultText="xxxx - xxxx" id="years-worked" length={25} />
        <textarea rows={3} placeholder="Short description" id="job-descript" />
      </div>
    );
  }
}
