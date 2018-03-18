import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withReverseInput from './HOC/withReverseInput';
import MyInput from './components/MyInput';
import ReverseInput from './POC/ReverseInput';

const MyReverseInput = withReverseInput('myInput')(MyInput);

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row title">
            <span className="col">Description</span>
            <span className="col">HOC</span>
            <span className="col">POC</span>
          </div>
          <div className="row">
            <span className="col">Reverse Input</span>
            <span className="col">
              <MyReverseInput name="myInput" />
            </span>
            <span className="col">
              <ReverseInput />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
