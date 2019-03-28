import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  state = {
    isShowModal: false
  };
  toogleModal = () => {
    this.setState(state => ({
      isShowModal: !state.isShowModal
    }));
  };

  showEvent = event => {
    console.log(event.nativeEvent);
  };
  render() {
    const { isShowModal } = this.state;
    return (
      <Fragment>
        <div onClick={this.showEvent}>
          <button onClick={this.toogleModal}>Open ModalWindow</button>
          {/* <Modal show={isShowModal}>
            <p>I am ModalWindow</p>
            <button onClick={this.toogleModal}>CloseMe)))</button>
          </Modal> */}
          {/* <Modal show={isShowModal} /> */}
          {isShowModal && <Modal />}
        </div>
      </Fragment>
    );
  }
}

// const Modal = ({ show, children }) =>
//   show
//     ? ReactDOM.createPortal(children, document.getElementById("portal"))
//     : null;

/////////////////
// const Modal = ({ show }) =>
//   show
//     ? ReactDOM.createPortal(<Fragment>
//         <p>I am ModalWindow</p>
//         <button>CloseMe)))</button>
//     </Fragment>, document.getElementById("portal"))
//     : null;
////////////////////////
// const Modal = () =>
//   ReactDOM.createPortal(
//     <Fragment>
//       <p>I am ModalWindow</p>
//       <button>CloseMe)))</button>
//     </Fragment>,
//     document.getElementById("portal")
//   );

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.portDiv = document.createElement("div");
    this.portDiv.id = "portal";

    document.getElementById("root").appendChild(this.portDiv);
  }

  componentWillUnmount = () => {
    document.getElementById("root").removeChild(this.portDiv);
  };

  render() {
    const popup = {
      color: "white",
      backgroundColor: "red"
    };
    return ReactDOM.createPortal(
      <Fragment>
        <div className="popup" style={popup}>
          <p>I am ModalWindow</p>
          <button>CloseMe)))</button>
        </div>
      </Fragment>,
      document.getElementById("portal")
    );
  }
}

///// Lesson 8 00:31:30
export default Portal;
