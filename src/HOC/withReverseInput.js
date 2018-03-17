import React from 'react';

const withReverseInput = name => WrappedComponent =>
  class extends WrappedComponent {
    componentDidMount() {
      console.log(`Named input is ${name}`);
      console.log(React.Children.toArray(this.props.children));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withReverseInput;
