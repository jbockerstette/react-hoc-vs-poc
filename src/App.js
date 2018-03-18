import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withReverseInput from './HOC/withReverseInput';
import MyInput from './components/MyInput';
import Counter from './components/Counter';
import ReverseInput from './POC/ReverseInput';
import withData from './HOC/withData';
import GetData from './POC/GetData';
import withShouldComponentUpdate from './HOC/withShouldComponentUpdate';

const MyReverseInput = withReverseInput('myInput')(MyInput);

const ShouldUpdateCounter = withShouldComponentUpdate()(Counter);

class App extends Component {
  componentDidMount() {}

  render() {
    // eslint-disable-next-line react/prop-types
    const { data } = this.props;
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
          <div className="row">
            <span className="col">Get Data</span>
            <span className="col">{data}</span>
            <GetData
              render={renderData => <span className="col">{renderData}</span>}
            />
          </div>
          <div className="row">
            <span className="col">Implement Should Update</span>
            <span className="col">
              <ShouldUpdateCounter />
            </span>
            <span className="col">TODO</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withData(App);
