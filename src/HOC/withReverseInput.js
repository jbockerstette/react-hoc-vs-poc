import React from 'react';

function withReverseInput(name) {
  return function enhancer(WrappedComponent) {
    class C extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        const inputs = this.domNode.getElementsByTagName('input');
        if (inputs) {
          this.input = inputs[name];
          this.input.addEventListener('input', this.handleChange);
        }
      }

      componentWillUnmount() {
        if (this.input) {
          this.input.removeEventListener('input');
        }
      }

      handleChange(e) {
        if (e.data) {
          const arr = Array.from(e.target.value);
          arr.unshift(arr.pop());
          this.input.value = arr.join('');
        }
      }

      render() {
        return (
          <div
            ref={ref => {
              this.domNode = ref;
            }}
          >
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    }
    C.displayName = `withReverseInput(${WrappedComponent.displayName ||
      WrappedComponent.name})`;
    C.WrappedComponent = WrappedComponent;
    return C;
  };
}
export default withReverseInput;
