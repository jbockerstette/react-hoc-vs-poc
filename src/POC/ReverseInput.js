import React, { Component } from 'react';

class ReverseInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.size = 0;
  }

  handleChange(e) {
    if (this.size < e.target.value.length) {
      const arr = Array.from(e.target.value);
      arr.unshift(arr.pop());
      this.input.value = arr.join('');
    }
    this.size = this.input.value.length;
  }

  render() {
    return (
      <input
        onChange={this.handleChange}
        type="text"
        ref={ref => {
          this.input = ref;
        }}
      />
    );
  }
}

export default ReverseInput;
