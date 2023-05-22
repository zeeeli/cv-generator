import React, { Component } from "react";
import CVFormInput from "./CVFormInput";

export default class CVFormEdu extends Component {
  render() {
    return (
      <section id="education">
        <h3 className="section-header">
          Education
          <img
            src={require("../assets/add.png")}
            alt="plus symbol"
            id="add-edu"
            style={{ width: 30, height: 30 }}
            title="Add to end"
          />
          <img
            src={require("../assets/remove.png")}
            alt="minus symbol"
            id="remove-edu"
            style={{ width: 30, height: 30 }}
            title="Remove from end"
          />
        </h3>
        <div id="edu-body">
          <div>
            <CVFormInput defaultText="Degree" id="degree-name" length={20} />
            <CVFormInput
              defaultText="Institution"
              id="insti-name"
              length={28}
            />
            <CVFormInput defaultText="xxxx - xxxx" id="years" length={11} />
            <CVFormInput defaultText="GPA" id="gpa" length={4} />
          </div>
          <div>
            <CVFormInput defaultText="Degree" id="degree-name" length={20} />
            <CVFormInput
              defaultText="Institution"
              id="insti-name"
              length={28}
            />
            <CVFormInput defaultText="xxxx - xxxx" id="years" length={11} />
            <CVFormInput defaultText="GPA" id="gpa" length={4} />
          </div>
          <div>
            <CVFormInput defaultText="Degree" id="degree-name" length={20} />
            <CVFormInput
              defaultText="Institution"
              id="insti-name"
              length={28}
            />
            <CVFormInput defaultText="xxxx - xxxx" id="years" length={11} />
            <CVFormInput defaultText="GPA" id="gpa" length={4} />
          </div>
        </div>
      </section>
    );
  }
}
