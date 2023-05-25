import React, { Component } from "react";
import "./CVMain.css";
import CVFormInput from "./CVFormInput";
import CVFormEdu from "./CVFormEdu";
import CVFormWork from "./CVFormWork";
const imageTypes = ["jpg", "jpeg", "png", "svg"];

export default class CVMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileSrc: require("../assets/user-profile.png"),
    };

    this.changeProfileSrc = this.changeProfileSrc.bind(this);
  }

  changeProfileSrc() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      if (input.files && input.files[0]) {
        // get uploaded file extension
        let ext = input.files[0].name.split(".").pop().toLowerCase();
        // only change profile src with image upload
        if (imageTypes.indexOf(ext) > -1) {
          let reader = new FileReader();
          reader.readAsDataURL(input.files[0]);
          reader.onloadend = (event) => {
            this.setState({
              profileSrc: event.target.result,
            });
          };
        } else {
          this.setState({
            profileSrc: require("../assets/user-profile.png"),
          });
        }
      }
    };
    input.click();
  }

  render() {
    return (
      <main className="main-wrapper">
        <div className="cv-wrapper">
          <header>
            <img
              src={this.state.profileSrc}
              alt="Profile"
              onClick={this.changeProfileSrc}
            />
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
          <CVFormWork />
        </div>
      </main>
    );
  }
}
