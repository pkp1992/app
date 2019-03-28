import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const StatelessGreeting = ({ user: { name, age } }) => {
  return (
    <Fragment>
      <p>Hello, {name.toUpperCase()}</p>
      <p>Age, {age}</p>
    </Fragment>
  );
};

StatelessGreeting.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired
};

class Greeting extends Component {
  static propTypes = {
      name: PropTypes.string,
      age: PropTypes.number,
      userName: PropTypes.object.isRequired
  };
  static defaultProps = {
      name : 'Undefine',
      userName: {}
  };
  render() {
    Object.keys(this.props.userName)
    const { name, age } = this.props;
    return (
      <Fragment>
        <p>Hello, {name.toUpperCase()}</p>
        <p>Age, {age}</p>
      </Fragment>
    );
  }
}

class PropTypeExample extends Component {
  render() {
    return (
      <Fragment>
        <StatelessGreeting user={{ name: "Artem", age: 22 }} />
        <Greeting age={22} />
      </Fragment>
    );
  }
}

export default PropTypeExample;
