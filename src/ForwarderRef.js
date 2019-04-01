import React, { Component, PureComponent } from "react";

export class ForwarderRef extends Component {
  greeting = React.createRef();

  componentDidMount() {
    console.log(this.greeting.current);
    setTimeout(() => {
      this.greeting.current.toUpperCase();
      //   console.log(this.greeting.current);
    }, 3000);
  }
  render() {
    return <PureGreeting ref={this.greeting} name="Kostia" />;
  }
}

class Greeting extends Component {
  state = {
    isUpper: false
  };
  toUpperCase = () => {
    this.setState(state => ({
      isUpper: !this.state.isUpper
    }));
  };
  render() {
    const { isUpper } = this.state;
    const { name } = this.props;
    return (
      <p>
        {isUpper ? "HELLO" : "hello"}, {name}
      </p>
    );
  }
}
const PureGreeting = pure(Greeting);

function pure(WrappedComponent) {
  class PuredComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} ref={this.props.forwaredRef} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <PuredComponent {...props} forwaredRef={ref} />
  ));
}

export default ForwarderRef;
