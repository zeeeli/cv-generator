import React, { Component } from "react";
import CVHeader from "./components/CVHeader";
import logoPath from "./assets/ResumeLogo.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <CVHeader logo={logoPath} size={160} />

        {/* <nav> contains reset, example, and print buttons */}
        <nav></nav>

        {/* <main> contains CV */}
        <main></main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
