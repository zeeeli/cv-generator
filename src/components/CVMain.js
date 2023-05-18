import React, { Component } from "react";
import "./CVMain.css";

export default class CVMain extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <div className="cv-wrapper">
          <header>
            <img src={require("../assets/default-profile.png")} alt="Profile" />
            <h2>
              <input
                type="text"
                contentEditable="true"
                placeholder={"First Last"}
                id="name-input"
                maxLength={21}
              />
              <br></br>
              <input
                type="text"
                contentEditable="true"
                placeholder={"Job Title"}
                id="job-input"
                maxLength={23}
              />
            </h2>
          </header>
          <section id="contact-info">
            <div>
              <img src={require("../assets/phone.png")} alt="Phone number" />
              <input
                type="text"
                contentEditable="true"
                placeholder={"+1 (xxx) xxx-xxxx"}
                id="phone-input"
                maxLength={17}
              />
            </div>
            <div>
              <img src={require("../assets/mail.png")} alt="Phone number" />
              <input
                type="text"
                contentEditable="true"
                placeholder={"example@example.com"}
                id="email-input"
                maxLength={33}
              />
            </div>
            <div>
              <img src={require("../assets/location.png")} alt="Phone number" />
              <input
                type="text"
                contentEditable="true"
                placeholder={"City, State, Country"}
                id="location-input"
                maxLength={20}
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}
