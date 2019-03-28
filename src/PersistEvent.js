import React, { Component } from 'react'

export default class PersistEvent extends Component {
    handlClick = event => {
        console.log(event);
        console.log(event.nativeEvent);
        event.persist()
        setTimeout(() => {
            console.log(event.target);
            // console.log(event.nativeEvent);
        }, 1);
    }
  render() {
    return (
        <button onClick={this.handlClick}>Click</button>
    )
  }
}
