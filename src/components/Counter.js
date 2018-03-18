import React, { Component } from 'react';

class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { count: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleAdd() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  handleDec() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleDec}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
