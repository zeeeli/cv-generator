import React, { Component } from "react";

export default class CVFormInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { defaultText, id, length, seed = "" } = this.props;
    if (seed !== "") {
      return (
        <input
          type="text"
          id={id}
          maxLength={length}
          value={seed}
          autoComplete="off"
        />
      );
    } else {
      return (
        <input
          type="text"
          contentEditable="true"
          placeholder={defaultText}
          id={id}
          maxLength={length}
          autoComplete="off"
        />
      );
    }
  }
}
