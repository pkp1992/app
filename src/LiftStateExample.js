import React, { PureComponent, Fragment } from "react";

class LiftStateExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: "",
        firstName: "",
        lastName: ""
      },
      checkboxes: {
        isReady: false,
        isSet: true
      }
    };
  }

  handleChangeInput = event => {
    const { value, name } = event.target;
    this.setState(state => ({
      inputs: {
        ...state.inputs,
        [name]: value
      }
    }));
  };

  handleChangeCheckbox = event => {
    const { name, checked } = event.target;
    this.setState(state => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: checked
      }
    }));
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <div>
          {Object.keys(this.state.inputs).map(fieldName => (            
            <input
              key={fieldName}
              name={fieldName}
              value={this.state.inputs[fieldName]}
              placeholder={fieldName.toUpperCase()}
              onChange={this.handleChangeInput}
            />
          ))}
          {Object.keys(this.state.checkboxes).map(fieldName => (
            <label key={fieldName}>
              <input
                type="checkbox"
                name={fieldName}
                checked={this.state.checkboxes[fieldName]}
                onChange={this.handleChangeCheckbox}
              />
              {fieldName}
            </label>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default LiftStateExample;