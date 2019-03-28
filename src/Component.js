import React, { PureComponent, Fragment } from "react";

class CreditCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      creditCardInput: this.props.creditCard
    };
    this.div = React.createRef();
    console.log(this.div);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      creditCardInput: props.creditCard.replace(/(\d{0,4})/g, "$1 ").trim()
    };
  }
  componentDidMount = () => {
    console.log('componentDidMount');    
    // console.log(this.div.current.getBoundingClientRect());
    // fetch(
    //   "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json"
    // )
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
      console.log(this.state);
      
  };

  shouldComponentUpdate(nextProps, nextState) {
     return this.state.creditCardInput !== nextState.creditCardInput
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");  
  }
  render() {
    const { creditCardInput } = this.state;

    console.log('render');    
    console.log(this.state);
    return (
      <Fragment>
        <div ref={this.div}>{creditCardInput}</div>
      </Fragment>
    );
  }
}

export default CreditCard;
