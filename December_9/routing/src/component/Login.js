import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  username = React.createRef();
  password = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    this.login(this.username.current.value, this.password.current.value);
  };

  login = (username, password) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          localStorage.setItem("authorized", result.username);
        } else {
          localStorage.removeItem("authorized");
        }
      })
      .catch(err => console.log(err.message));
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to={`/profile`} />;
    }

    return (
      <form className="form form--login" onSubmit={this.onSubmit}>
        <div className="input--group">
          <label>
            Username:
            <br />
            <input
              type="text"
              placeholder="Username"
              className="form--input"
              ref={this.username}
            />
          </label>
        </div>
        <div className="input--group">
          <label>
            Passwords:
            <br />
            <input
              type="password"
              placeholder="Password"
              className="form--input"
              ref={this.password}
            />
          </label>
        </div>
        <div className="input--group">
          <button className="btn btn--login">Login</button>
        </div>
      </form>
    );
  }
}
