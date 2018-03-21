import { isEqual } from 'lodash';

const withShouldComponentUpdate = () => WrappedComponent => {
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
  C.displayName = `withShouldComponentUpdate(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  C.WrappedComponent = WrappedComponent;
  return C;
};

export default withShouldComponentUpdate;
