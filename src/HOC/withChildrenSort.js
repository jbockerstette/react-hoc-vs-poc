import React from 'react';

const withChildrenSort = sortFn => WrappedComponent => {
  const C = props => {
    const { children, ...rest } = props;
    const childArr = React.Children.toArray(children);
    childArr.sort((a, b) => sortFn(a.props.children, b.props.children));
    return <WrappedComponent {...rest}>{childArr}</WrappedComponent>;
  };
  C.displayName = `withChildrenSort(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  C.WrappedComponent = WrappedComponent;
  return C;
};

export default withChildrenSort;
