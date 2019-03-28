import React, { PureComponent, Component, Fragment } from "react";

class Simple extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return false;
  };

  render() {
    console.log("render simple");
    return <div>{`counter = ${this.props.counter}`}</div>;
  }
}

class Pure extends PureComponent {
  render() {
    const { counter } = this.props;
    console.log("Pure render");

    return <p>{`Pure ${counter.value}`}</p>;
  }
}

const StatelessComponent = props => {
  console.log("StatelessComponent");
  console.log(props);
  return <div ></div>
};

StatelessComponent.defaultProps = {
  someProp: 1
}

export default class extends Component {
  state = {
    counter: { value: 0 }
  };

  componentDidMount() {
    // setInterval(() => {
    //   const { counter } = this.state;
    //   this.setState(state => ({
    //     counter: {
    //       ...counter,
    //       value: counter.value + 1
    //     }
    //   }));
    // }, 1000);
  }

  render() {
    const { counter } = this.state; 
    return (
      <Fragment>
        {/* {<Simple counter = {counter.value}/>} */}
        <StatelessComponent />
        {/* <Pure counter={counter} /> */}
        {/* key = {'asasadas'} */}
        {/* </Pure> */}
        {/* </StatelessComponent> */}
      </Fragment>
    );
  }
}
