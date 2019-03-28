import React, { Component } from "react";

const { Consumer, Provider } = React.createContext({ isAutorize: false });

export const AutorizationHOC = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <Consumer>
          {({ isAutorize }) => (
            <WrappedComponent {...this.props} {...isAutorize} />
          )}
        </Consumer>
      );
    }
  };

export const AutorizationConsumer = Consumer;
export const AutorizationProvider = Provider;

class YourComponent extends Component {
  render() {
    // const { isAutorize } = this.props;
    return null;
  }
}

export default AutorizationHOC(YourComponent);
