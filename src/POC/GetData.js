import { Component } from 'react';
import PropTypes from 'prop-types';

class GetData extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: 0
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.id = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  getData() {
    this.setState(state => ({ data: state.data + 1 }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

GetData.propTypes = {
  render: PropTypes.func.isRequired
};

export default GetData;
