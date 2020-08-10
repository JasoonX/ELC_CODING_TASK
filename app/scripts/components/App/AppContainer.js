import React from "react";
import ReactDOM from "react-dom";
import store from "../../store";
import AppView from "./AppView";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("root")
);
