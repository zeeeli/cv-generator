import React, { Component } from "react";
import "./CVMain.css";
import CVFormInput from "./CVFormInput";
import CVFormEdu from "./CVFormEdu";

export default class CVMain extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <div className="cv-wrapper">
          <header>
            <img src={require("../assets/default-profile.png")} alt="Profile" />
            <h2>
              <CVFormInput
                defaultText="First Last"
                id="name-input"
                length={21}
              />
              <br></br>
              <CVFormInput defaultText="Job Title" id="job-input" length={23} />
            </h2>
          </header>
          <section id="contact-info">
            <div>
              <img src={require("../assets/phone.png")} alt="Phone number" />
              <CVFormInput
                defaultText="+1 (xxx) xxx-xxxx"
                id="phone-input"
                length={17}
              />
            </div>
            <div>
              <img src={require("../assets/mail.png")} alt="email" />
              <CVFormInput
                defaultText="example@example.com"
                id="email-input"
                length={25}
              />
            </div>
            <div>
              <img src={require("../assets/location.png")} alt="location" />
              <CVFormInput
                defaultText="City, State, Country"
                id="location-input"
                length={20}
              />
            </div>
          </section>
          <section id="about-me">
            <h3>About Me</h3>
            <textarea rows={6} placeholder="..." id="about-input" />
          </section>
          <CVFormEdu />
          <section id="work">
            <h3>Work Experience</h3>
          </section>
        </div>
      </main>
    );
  }
}
