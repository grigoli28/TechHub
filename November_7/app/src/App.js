import React, { Component } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Search from "./Components/Search";
import ResultList from "./Components/ResultList";

const url = "https://hn.algolia.com/api/v1/search?query=";

class App extends Component {
  state = {
    query: "javascript",
    url,
    data: null,
    isLoading: true
  };

  componentDidMount() {
    fetch(`${url}${this.state.query}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ data, isLoading: false });
        console.log(this.state.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="wrapper">
        <Search />
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <ResultList data={this.state.data.hits} limit={0} />
        )}
      </div>
    );
  }
}

export default App;
