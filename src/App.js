import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withReverseInput from './HOC/withReverseInput';
import MyInput from './components/MyInput';

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
        <MyReverseInput name="myInput" />
      </div>
    );
  }
}

export default App;
