import React, { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({ hasError: true, error });
  }
  render() {
    const { hasError } = this.state;
   if(hasError) {
       return <p style={{ backgroundColor: 'red', padding: 20 }}>
           Error
    </p>;
   }
   return <Child />
  }
}

class Child extends Component {
    componentDidMount() {
        throw new Error('Random Error')
    }
    render() { 
        return ( <div>Child</div> );
    }
}

export default ErrorHandling;
