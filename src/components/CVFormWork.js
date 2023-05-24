import React, { Component } from "react";
import CVFormInput from "./CVFormInput";

export default class CVFormWork extends Component {
  render() {
    return (
      <section id="work">
        <h3 className="section-header">
          Work Experience
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
        <div id="work-body">
          <div>
            <CVFormInput
              defaultText="Employer Name"
              id="employer"
              length={50}
            />
            <CVFormInput
              defaultText="xxxx - xxxx"
              id="years-worked"
              length={25}
            />
            <textarea
              rows={3}
              placeholder="Short description"
              id="job-descript"
            />
          </div>
          <div>
            <CVFormInput
              defaultText="Employer Name"
              id="employer"
              length={50}
            />
            <CVFormInput
              defaultText="xxxx - xxxx"
              id="years-worked"
              length={25}
            />
            <textarea
              rows={3}
              placeholder="Short description"
              id="job-descript"
            />
          </div>
          <div>
            <CVFormInput
              defaultText="Employer Name"
              id="employer"
              length={50}
            />
            <CVFormInput
              defaultText="xxxx - xxxx"
              id="years-worked"
              length={25}
            />
            <textarea
              rows={3}
              placeholder="Short description"
              id="job-descript"
            />
          </div>
        </div>
      </section>
    );
  }
}
