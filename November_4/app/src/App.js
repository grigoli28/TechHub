import React, { Component } from "react";
import Users from "./Users";

const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  state = {
    jsonData: null
  };

  componentDidMount() {
    fetch(FETCH_URL)
      .then(res => res.json())
      .then(users => this.setState({ jsonData: users }))
      .catch(err => console.log(err));
  }

  /* render() {
    const persons = [
      { name: "Otiko", age: 25, id: 2, isActive: false },
      { name: "Mamuka", age: 20, id: 5, isActive: true },
      { name: "Grigoli", age: 20, id: 10, isActive: true },
      { name: "Salome", age: 17, id: 12, isActive: false }
    ];

    const showList = false;

    return (
      <div className="App">
        {showList ? (
          <div>
            <h2>Using Array.prototype.map</h2>
            <ul>
              {persons.map(person => (
                <li key={person.id}>
                  {person.name} {person.age}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <h2>Using Array.prototype.filter</h2>
        <ul>
          {persons.filter(person => person.isActive).map(person => (
            <li key={person.id}>
              {person.name} {person.age}
            </li>
          ))}
        </ul>
        <h2>FETCHURL Data</h2>
        <ol>
          {this.state.jsonData &&
            this.state.jsonData.map(user => <li key={user.id}>{user.name}</li>)}
        </ol>
      </div>
    );
  } */


  render() {
    return (
      <div className="App">
          <Users>{this.state.jsonData}</Users>
      </div>
    );
  }
}

export default App;
