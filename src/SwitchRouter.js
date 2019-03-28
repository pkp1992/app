import React, { Component } from "react";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Topics = () => <div>Topics</div>;
const PageNotFound = () => <div>404 Page Not Found</div>;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>

        <hr />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Redirect from="/about([1-9])" to="/about" />
          <Route path="*" component={PageNotFound} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

