import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myInput = <input name="inputReverse" type="text" />;

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {myInput}
      </div>
    );
  }
}

export default App;
