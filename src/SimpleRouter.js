import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";

const Home = props => {
  console.log(props);
  return <div>Home</div>;
};

const About = props => <div>About</div>;
const Topics = props => {
  console.log(props);
  return <div>Hi, {props.userName}</div>;
};

export default class App extends Component {
  state = {
    userName: "Kostia"
  };
  render() {
    const { userName } = this.state;
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>

        <hr />

        <Route path="/" component={Home} exact />
        <Route path="/home/:id" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/topics"
          render={props => <Topics {...props} userName={userName} />}
        />
      </div>
    );
  }
}
