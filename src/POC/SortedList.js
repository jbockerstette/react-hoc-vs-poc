import React from 'react';
import PropTypes from 'prop-types';

const SortedList = props => {
  const { children, sortFn, ...rest } = props;
  const childArr = React.Children.toArray(children);
  childArr.sort((a, b) => sortFn(a.props.children, b.props.children));
  return <ul {...rest}>{childArr}</ul>;
};

SortedList.propTypes = {
  sortFn: PropTypes.func.isRequired
};

export default SortedList;
