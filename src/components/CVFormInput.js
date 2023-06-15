import React, { Component } from "react";

export default class CVFormInput extends Component {
  render() {
    const { defaultText, id, length, seed = "", label } = this.props;
    if (seed !== "") {
      return (
        <input
          type="text"
          id={id}
          maxLength={length}
          placeholder={seed}
          autoComplete="off"
          aria-label={label}
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
          aria-label={label}
        />
      );
    }
  }
}
