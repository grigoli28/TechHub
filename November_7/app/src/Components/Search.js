import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="input">
        <form action="GET">
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
