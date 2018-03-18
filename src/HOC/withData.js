import React from 'react';

const withData = WrappedComponent => {
  class C extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = { data: 0 };
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
      return <WrappedComponent {...this.props} data={this.state.data} />;
    }
  }
  C.displayName = `withData(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  C.WrappedComponent = WrappedComponent;
  return C;
};

export default withData;
