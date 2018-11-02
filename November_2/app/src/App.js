import React, { Component } from 'react';
import './App.css';


class App extends Component {
    randomText() {
        return "Random Text";
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <h2>{this.randomText()}</h2>
            </div>
        );
    }
}

export default App;