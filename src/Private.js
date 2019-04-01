import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import "./App.css";

const { Provider: AuthProvider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false
});

export default class Private extends Component {
  state = {
    isAuthorized: false
  };

  authorize = () => {
    this.setState(state => ({
      isAuthorized: !this.state.isAuthorized
    }));
  };
  render() {
    console.log(this.state);

    const { isAuthorized } = this.state;
    return (
      <AuthProvider value={{ isAuthorized, authorize: this.authorize }}>
        <Link to="/">Public</Link>
        <Link to="/private">Private</Link>
        <Link to="/login">Login</Link>
        <hr />
        <Switch>
          <Route path="/" render={() => <p>Public Page</p>} exact />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/private"
            component={() => (
              <div>
                <p>Private Page</p>
                <AuthConsumer>
                  {({ authorize }) => <button onClick={authorize}>Out</button>}
                </AuthConsumer>
              </div>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    );
  }
}

const LoginPage = () => (
  <AuthConsumer>
    {({ authorize, isAuthorized }) =>
      isAuthorized ? (
        <Redirect to="/private" />
      ) : (
        <button onClick={authorize}>Click</button>
      )
    }
  </AuthConsumer>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ authorizev, isAuthorized }) => (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )}
  </AuthConsumer>
);


/////// Lesson 10 00:57:59