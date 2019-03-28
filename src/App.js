import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };
  render() {
    return (
      <div className="counter">
        {`counter: ${this.state.counter}`}{" "}
        <button onClick={this.handleClick}>+</button>
        <Child var={this.state.counter} condition = {this.state.counter % 2 === 0}>
          <p>Hello, World!!!</p>
        </Child>
      </div>
    );
  }
}

export default App;