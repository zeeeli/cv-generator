import React, { Component } from "react";
import CVHeader from "./components/CVHeader";
import logoPath from "./assets/ResumeLogo.png";
import "./App.css";
import CVNav from "./components/CVNav";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <CVHeader logo={logoPath} size={160} />

        {/* <CVNav> contains reset, example, and print buttons */}
        <CVNav />

        {/* <main> contains CV */}
        <main></main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
