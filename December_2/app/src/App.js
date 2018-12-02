import React, { Component } from "react";
import "./App.css";

export const dec = prev => ({ value: prev.value - 1 });
export const inc = prev => ({ value: prev.value + 1 });

export const Value = ({ value }) => <h1>{value}</h1>;

class App extends Component {
  state = {
    value: 0,
  };

  OnInc = () => {
    this.setState(inc);
  };

  OnDec = () => {
    this.setState(dec);
  };

  render() {
    return (
      <div className="App">
        <Value value={this.state.value} />
        <button onClick={this.OnInc}>Inc +</button>
        <button onClick={this.OnDec}>Dec -</button>
      </div>
    );
  }
}

export default App;
