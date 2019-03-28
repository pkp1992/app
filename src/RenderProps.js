import React, { PureComponent } from "react";

class WidthWindow extends PureComponent {
  state = {
    width: window.innerWidth,
    x: 0,
    y: 0
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouse);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouse);
  }

  onMouse = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return this.props.render(this.state);
  }
}

export default () => (
  <div>
    <h1>Пример с RenderProps</h1>
    <WidthWindow
      render={({ width, x, y }) => (
        <p style={{ color: "red", position: 'absolute', top: y, left: x }}>
          {width}, {x}, {y}
        </p>
      )}
    />
  </div>
);
