import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="input">
        <form
          action="GET"
          onSubmit={e => {
            this.props.onSubmit(e);
          }}
        >
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
