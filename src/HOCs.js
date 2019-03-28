import React, { PureComponent } from "react";

let Stateless = ({ email }) => {
  console.log("Stateless render");
  return <p>I'm simple stateless component</p>;
};

// function pure(WrappedComponent) {
//   return class extends PureComponent {
//     static displayName = "pure HOC";
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }
const pure = WrappedComponent =>
  class extends PureComponent {
    static displayName = "pure_HOC";
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

Stateless = pure(Stateless);

export default class HOCs extends PureComponent {
  state = {
    counter: 0
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState(state => ({
        counter: state.counter++
      }));
    }, 1000);
  };

  render() {
    return <Stateless />;
  }
}
