import React from 'react';
import PropTypes from 'prop-types';

const MyInput = props => <input type="text" name={props.name} />;

MyInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default MyInput;
