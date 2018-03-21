import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

function enhance(WrappedComponent) {
  class C extends WrappedComponent {
    shouldComponentUpdate(nextProps, nextState) {
      if (!isEqual(this.props, nextProps)) {
        return true;
      }

      if (!isEqual(this.state, nextState)) {
        return true;
      }
      return false;
    }
  }
  return C;
}

class ShouldCompUpdate extends Component {
  constructor(props, context) {
    super(props, context);
    this.WithShouldCompUpdate = enhance(props.myComp);
  }

  render() {
    const { WithShouldCompUpdate } = this;
    const { myComp, ...rest } = this.props;
    return <WithShouldCompUpdate {...rest} />;
  }
}

ShouldCompUpdate.propTypes = {
  myComp: PropTypes.func.isRequired
};

export default ShouldCompUpdate;
