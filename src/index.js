import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import CreditCard from "./Component";
// import LiftStateExample from "./LiftStateExample";
// import PropTypeExample from "./PropTypeExample";
// import Portals from "./Portals";
// import RenderProps from "./RenderProps";
// import HOCs from "./HOCs";
// import ContextApi from "./ContextApi";
// import PersistEvent from "./PersistEvent";
// import Update from "./Update";
// import SimpleRouter from "./SimpleRouter";
import SwitchRouter from "./SwitchRouter";
// import ErrorHandling from "./ErrorHandling";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //   <CreditCard prop1={1} prop2={2} creditCard="1234123452341234" />,
  // <LiftStateExample />,
  // <Portals />,
  // <RenderProps />,
  // <HOCs />,
  // <ContextApi />,
  // <PersistEvent />,
  // <PropTypeExample />,
  // <Update />,
  // <ErrorHandling />,
  // <BrowserRouter>
  //   <SimpleRouter />
  // </BrowserRouter>,
  <BrowserRouter>
    <SwitchRouter />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
