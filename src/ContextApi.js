import React, { PureComponent } from "react";

const { Provider, Consumer } = React.createContext("light");

export default class ContextApi extends PureComponent {
  state = {
    theme: "light"
  };

  componentDidMount = () => {
    // setInterval(() => {
    //   this.setState(state => {
    //     return state.theme === "light" ? { theme: "dark" } : { theme: "light" };
    //   });
    // }, 1000);
  };

  hangleToggleThem = () => {
    console.log(1);
    this.setState(state => {
      return state.theme === "light" ? { theme: "dark" } : { theme: "light" };
    });
  };

  render() {
    return (
      <Provider
        value={{
          theme: this.state.theme,
          onToggleTheme: this.hangleToggleThem
        }}
      >
        <IntermediateComponent>
          <IntermediateComponent>
            <IntermediateComponent>
              <ThemeButton />
            </IntermediateComponent>
          </IntermediateComponent>
        </IntermediateComponent>
      </Provider>
    );
  }
}

const IntermediateComponent = ({ children }) => {
  return <div>{children}</div>;
};

const withTheme = WrappedComponent =>
  class extends PureComponent {
    static displayName = "HOCsBtn";
    render() {
      return (
        <Consumer>
          {theme => (
            <WrappedComponent
              {...this.props}
              {...theme}
            />
          )}
        </Consumer>
      );
    }
  };

const Button = ({ theme, onToggleTheme }) => {
  return (
    <button
      style={{ backgroundColor: theme === "light" ? "#eee" : "#ccc" }}
      onClick={onToggleTheme}
    >
      Button with theme
    </button>
  );
  // <Consumer>
  //   {value => (
  //     <button
  //       onClick={value.onToggleTheme}
  //       style={{ backgroundColor: value.theme === "light" ? "#eee" : "#ccc" }}
  //     >
  //       Button with theme
  //     </button>
  //   )}
  // </Consumer>
};

const ThemeButton = withTheme(Button);

/////////// lesson 8 00:58:46
