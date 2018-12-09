import React, { Component } from "react";
import ProtectedRouter from "./routes/ProtectedRouter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Data from "./db/data.json";

import { Index } from "./component/Index";
import { Contact } from "./component/Contact";
import { Profile } from "./component/Profile";
import Login from "./component/Login";

class App extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <Router>
        <div className="App">
          <ul className="menu">
            <li className="menu--item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu--item">
              <Link to="/contact">Contact</Link>
            </li>
            {this.state.showLogin && (
              <li className="menu--item">
                <Link to="/login">Login</Link>
              </li>
            )}
            {!this.state.showLogin && (
              <li className="menu--item">
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </ul>

          <Route
            path="/"
            exact
            render={() => (
              <Index title={Data.index.title} desc={Data.index.desc} />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact title={Data.contact.title} desc={Data.contact.desc} />
            )}
          />
          <Route
            path="/login"
            component={() => <Login showlogin={this.state.showLogin} />}
          />
          <ProtectedRouter path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
